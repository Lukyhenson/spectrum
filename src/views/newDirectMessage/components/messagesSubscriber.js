// @flow
import React, { useState, useEffect } from 'react';
import compose from 'recompose/compose';
import { sortAndGroupMessages } from 'shared/clients/group-messages';
import ChatMessages from 'src/components/messageGroup';
import { Loading } from 'src/components/loading';
import viewNetworkHandler from 'src/components/viewNetworkHandler';
import getDirectMessageThreadMessages from 'shared/graphql/queries/directMessageThread/getDirectMessageThreadMessageConnection';
import type { GetDirectMessageThreadMessageConnectionType } from 'shared/graphql/queries/directMessageThread/getDirectMessageThreadMessageConnection';
import setLastSeenMutation from 'shared/graphql/mutations/directMessageThread/setDMThreadLastSeen';
import { ErrorBoundary } from 'src/components/error';
import { MessagesScrollWrapper, LoadingMessagesWrapper } from '../style';

type Props = {
  id: string,
  data: {
    loading: boolean,
    directMessageThread: GetDirectMessageThreadMessageConnectionType,
    messages: Array<Object>,
    hasNextPage: boolean,
    fetchMore: Function,
  },
  subscribeToNewMessages: Function,
  isLoading: boolean,
  hasError: boolean,
  isFetchingMore: boolean,
  setLastSeen: Function,
};

const MessagesSubscriber = (props: Props) => {
  const {
    subscribeToNewMessages,
    setLastSeen,
    thread,
    id,
    data,
    isLoading,
    hasError,
  } = props;

  const { messages } = data;
  const [subscription, setSubscription] = useState(null);

  let ref = null;

  const scrollToBottom = () => {
    if (!ref || !messages || messages.length === 0) {
      return;
    }
    let { scrollHeight, clientHeight } = ref;
    return (ref.scrollTop = scrollHeight - clientHeight);
  };

  useEffect(() => {
    setLastSeen(id);
    setSubscription(subscribeToNewMessages());
    scrollToBottom();
    return () => subscription && subscription();
  }, []);

  const refHeight = ref && ref.scrollHeight;
  useEffect(
    () => {
      scrollToBottom();
    },
    [refHeight, id, messages, isLoading]
  );

  if (hasError) return <LoadingMessagesWrapper innerRef={el => (ref = el)} />;
  if (isLoading)
    return (
      <LoadingMessagesWrapper innerRef={el => (ref = el)}>
        <Loading style={{ padding: '64px 32px' }} />
      </LoadingMessagesWrapper>
    );

  let unsortedMessages = messages.map(message => message.node);

  const unique = array => {
    const processed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      if (processed.indexOf(array[i].id) < 0) {
        processed.push(array[i].id);
      } else {
        array.splice(i, 1);
      }
    }
    return array;
  };

  const uniqueMessages = unique(unsortedMessages);
  const sortedMessages = sortAndGroupMessages(uniqueMessages);

  return (
    <MessagesScrollWrapper innerRef={el => (ref = el)}>
      <ErrorBoundary>
        <ChatMessages
          messages={sortedMessages}
          uniqueMessageCount={uniqueMessages.length}
          threadType={'directMessageThread'}
          thread={thread}
        />
      </ErrorBoundary>
    </MessagesScrollWrapper>
  );
};

export default compose(
  setLastSeenMutation,
  getDirectMessageThreadMessages,
  viewNetworkHandler
)(MessagesSubscriber);