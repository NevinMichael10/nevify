import { Platform } from 'react-native';

const iosShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
};

const androidShadow = {
  elevation: 2,
};

export const defaultShadow = Platform.OS === 'ios' ? iosShadow : androidShadow;

export const largeShadow =
  Platform.OS === 'ios'
    ? {
        ...iosShadow,
        shadowOffset: {
          ...iosShadow.shadowOffset,
          height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      }
    : { elevation: 6 };
