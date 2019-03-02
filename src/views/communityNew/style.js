// @flow
import styled, { css } from 'styled-components';
import theme from 'shared/theme';
import { Link } from 'react-router-dom';
import { tint, Tooltip, Truncate } from 'src/components/globals';

const MAIN_WIDTH = 600;
const SIDEBAR_WIDTH = 340;
const COL_GAP = 16;
const MAX_WIDTH = MAIN_WIDTH + SIDEBAR_WIDTH + COL_GAP;
const MEDIA_BREAK = MAIN_WIDTH + SIDEBAR_WIDTH + COL_GAP;

export const Container = styled.section`
  display: grid;
  justify-content: center;
  height: calc(100% - 48px); /* navbar */

  @media (max-width: ${MEDIA_BREAK}px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const TwoColumnGrid = styled.section`
  display: grid;
  grid-template-columns: ${SIDEBAR_WIDTH}px ${MAIN_WIDTH}px;
  grid-template-rows: 100%;
  grid-gap: ${COL_GAP}px;
  max-width: ${MAX_WIDTH}px;

  @media (max-width: ${MEDIA_BREAK}px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    grid-gap: 0;
  }
`;

export const OneColumnGrid = styled.section`
  display: grid;
  grid-template-columns: ${MAIN_WIDTH}px;
  grid-template-rows: 100%;
  max-width: ${MAX_WIDTH}px;

  @media (max-width: ${MEDIA_BREAK}px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    grid-gap: 0;
  }
`;

export const Main = styled.section`
  background: ${theme.bg.default};
  border-left: 1px solid ${theme.bg.border};
  border-right: 1px solid ${theme.bg.border};
  border-bottom: 1px solid ${theme.bg.border};
  border-radius: 0 0 4px 4px;
  height: 100%;

  @media (max-width: ${MEDIA_BREAK}px) {
    border-left: 0;
    border-right: 0;
  }
`;

export const Sidebar = styled.section`
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  position: sticky;
  top: 0;
  padding-bottom: 128px;

  @media (max-width: ${MEDIA_BREAK}px) {
    height: auto;
    display: none;
  }
`;

export const SidebarSection = styled.section`
  background: ${theme.bg.default};
  border: 1px solid ${theme.bg.border};
  margin-top: 16px;
  border-radius: 4px;

  @media (max-width: ${MEDIA_BREAK}px) {
    display: none;
  }
`;

export const SidebarSectionHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.bg.border};
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  position: sticky;
  top: 0;
  background: ${theme.bg.default};
  z-index: 11;
  border-radius: 4px 4px 0 0;

  a {
    display: flex;
    align-items: center;
    color: ${theme.text.alt};

    &:hover {
      color: ${theme.text.default};
    }
  }
`;

export const SidebarSectionHeading = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.text.default};
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  @media (max-width: ${MEDIA_BREAK}px) {
    border-radius: 0;
    margin-top: 0;
    border: 0;
  }
`;

export const MobileProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${theme.bg.default};
  position: sticky;
  top: 0;
  z-index: 11;
  padding: 12px 16px 12px 8px;

  @media (min-width: ${MEDIA_BREAK}px) {
    display: none;
  }
`;

export const CoverPhotoFallback = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${SIDEBAR_WIDTH / 3}px;
  max-height: ${SIDEBAR_WIDTH / 3}px;
  background-color: ${theme.text.default};
  overflow: hidden;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 4px 4px 0 0;

  @media (max-width: ${MEDIA_BREAK}px) {
    border-radius: 0;
  }
`;

export const CoverPhoto = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-height: ${SIDEBAR_WIDTH / 3}px;
  max-height: ${SIDEBAR_WIDTH / 3}px;
  max-width: 100%;
`;

export const ProfileAvatarContainer = styled.div`
  position: relative;
  top: -36px;
  width: 68px;
  height: 68px;
  margin-left: 12px;
  border-radius: 10px;
  background: ${theme.bg.default};
  border: 4px solid ${theme.bg.default};
  margin-bottom: -56px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
`;

export const ActionsRowContainer = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 12px;
  padding: 12px;
  margin-top: 16px;

  @media (max-width: ${MEDIA_BREAK}px) {
    border-bottom: 1px solid ${theme.bg.border};
    margin-top: 0;
    padding-bottom: 16px;
  }
`;

export const MobileActionsRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 24px;

  @media (max-width: ${MEDIA_BREAK}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const MobileMetaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CommunityName = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: ${theme.text.default};
`;

export const MobileCommunityName = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.text.default};
  margin-left: 12px;
`;

export const CommunityDescription = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${theme.text.secondary};
`;

export const MetaLinksContainer = styled.div`
  @media (max-width: ${MEDIA_BREAK}px) {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CommunityMetaRow = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.text.secondary};
  align-items: center;
  margin-top: 8px;

  &:first-of-type {
    margin-top: 16px;
  }

  a {
    display: flex;
    align-items: center;
  }

  a:hover {
    color: ${theme.text.default};
  }

  .icon {
    margin-right: 8px;
  }

  @media (max-width: ${MEDIA_BREAK}px) {
    margin-top: 0;
    margin-right: 16px;
    margin-bottom: 4px;

    .icon {
      margin-right: 4px;
    }

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

export const OnlineDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.success.default};
  margin-right: 16px;
  margin-left: 6px;

  @media (max-width: ${MEDIA_BREAK}px) {
    margin-right: 10px;
  }
`;

export const FeedsContainer = styled.section``;

export const SegmentedControl = styled.div`
  display: flex;
  width: 100%;
  box-shadow: inset 0 -1px ${theme.bg.border};
  position: sticky;
  top: 0;
  z-index: 11;
  background: ${theme.bg.default};

  @media (max-width: ${MEDIA_BREAK}px) {
    box-shadow: inset 0 -1px ${theme.bg.border};
    top: 56px;
  }
`;

export const Segment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  flex: 1 0 auto;
  font-weight: 500;
  color: ${props => (props.active ? theme.text.default : theme.text.alt)};
  box-shadow: ${props =>
    props.active ? `inset 0 -2px 0 ${theme.text.default}` : 'none'};
  text-align: center;

  &:hover {
    background: ${theme.bg.wash};
    box-shadow: ${props =>
      props.active
        ? `inset 0 -2px 0 ${theme.text.default}`
        : `inset 0 -2px 0 ${tint(theme.bg.wash, -16)}`};
    color: ${props =>
      props.active ? theme.text.default : theme.text.secondary};
    cursor: pointer;
  }

  @media (min-width: ${MEDIA_BREAK}px) {
    ${props =>
      props.hideOnDesktop &&
      css`
        display: none;
      `}
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const ToggleNotificationsContainer = styled.div`
  display: flex;
  color: ${theme.text.alt};
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  ${Tooltip};
`;

export const ChannelListItem = styled(Link)`
  padding: 12px 12px 12px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.bg.divider};

  &:last-of-type {
    border-bottom: 0;
  }

  &:hover {
    background: ${theme.bg.wash};
  }

  .icon {
    color: ${theme.text.alt};
  }
`;

export const ChannelListItemContent = styled.div`
  display: flex;
  align-items: center;

  .icon {
    color: ${theme.text.secondary};
    margin-right: 6px;
    position: relative;
    top: 1px;
  }
`;

export const ChannelName = styled.div`
  color: ${theme.text.default};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.2;
  vertical-align: middle;
  display: flex;
  align-items: center;
  display: inline-block;
  ${Truncate};
`;

export const CenteredContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const SingleColumnSection = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.bg.default};
  border: 1px solid ${theme.bg.border};
  margin: 16px 0;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  max-width: 640px;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid ${theme.bg.border};
  }
`;

export const Emoji = styled.h3`
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.text.default};
`;
export const Description = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: ${theme.text.secondary};
`;

export const ActionsRow = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;

  button {
    display: flex;
    flex: 1 0 auto;
    width: 100%;
  }
`;