import { brand } from '../custom-variables.js';
import { Borders } from '../styles';

// Overriding default TextBox styling
export const TextBox = {
  container: {
    paddingTop: 2,
    paddingBottom: 2,
    lineHeight: 10,
  },
  inputDisabled: {
    placeholderTextColor: '#DDD',
  },
};

export const messageInput = {
  container: {
    padding: 0,
  },
  input: {
    borderRadius: 15,
    ...Borders.defaultBorder,
  },
  inputFocused: {
    borderColor: brand.primary,
  },
};

export const searchInput = {
  inputDisabled: {
    backgroundColor: '#efefef',
    borderColor: '#FFFFFF',
  },
};
