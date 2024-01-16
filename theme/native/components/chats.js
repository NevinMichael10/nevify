import { Spacing, Shadows, Typography } from '../styles';

export const chatBubble = {
  container: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 5,
    maxWidth: '80%',
    ...Shadows.defaultShadow,
    ...Spacing.small,
    paddingBottom: 0,
  },
};

export const chatBubbleOwned = {
  container: {
    ...chatBubble.container,
    backgroundColor: '#d9fdd3',
    alignSelf: 'flex-end',
  },
};

export const chatContainer = {
  container: {
    ...Spacing.small,
  },
};

export const chatTimestamp = {
  text: {
    ...Typography.smallGray,
  },
};
