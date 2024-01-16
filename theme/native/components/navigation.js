import { background, darkMode } from '../custom-variables';

export const Page = {
  statusBar: {
    barStyle: darkMode ? 'light-content' : 'dark-content',
    backgroundColor: background.primary,
  },
  header: {
    container: {
      backgroundColor: background.primary,
    },
  },
};
