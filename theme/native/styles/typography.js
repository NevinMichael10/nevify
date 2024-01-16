import { font } from '../custom-variables';

export const smallGray = {
  color: '#7f8c8d',
  fontSize: font.sizeSmall,
};

export const title =
  Platform.OS === 'ios'
    ? {
        fontWeight: font.weightLight,
        letterSpacing: 6,
      }
    : {
        fontWeight: font.weightBold,
      };
