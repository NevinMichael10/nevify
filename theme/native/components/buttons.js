import { Platform } from 'react-native';
import { button } from '../custom-variables.js';
import { Buttons } from '../styles';

export const linkButton = {
  container: {
    ...Buttons.transparentButton,
  },
  caption: {
    color: button.secondary.color,
  },
  icon: {
    color: button.secondary.color,
  },
};

export const materialButton =
  Platform.OS === 'android'
    ? {
        container: {
          ...Buttons.roundButton,
          backgroundColor: button.primary.backgroundColor,
          position: 'absolute',
          bottom: 0,
          right: 0,
          elevation: 8,
        },
        caption: {
          color: button.primary.color,
        },
        icon: {
          color: button.primary.color,
        },
      }
    : {};
