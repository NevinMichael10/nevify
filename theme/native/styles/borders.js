import { border } from '../custom-variables';

const common = {
  borderColor: border.color,
  borderStyle: 'solid',
};

export const defaultBorder = {
  ...common,
  borderWidth: border.width,
};

export const bottomBorder = {
  ...common,
  borderBottomWidth: border.width,
};
