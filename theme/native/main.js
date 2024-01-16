import * as Avatars from './components/avatars';
import * as Buttons from './components/buttons';
import * as Chats from './components/chats';
import * as Containers from './components/containers';
import * as Inputs from './components/inputs';
import * as Navigation from './components/navigation';
import * as Typography from './components/typography';

// Add import and export statements for every file you add in /components
module.exports = {
  ...Avatars,
  ...Buttons,
  ...Chats,
  ...Containers,
  ...Inputs,
  ...Navigation,
  ...Typography,
};
