import {DefaultTheme} from 'react-native-paper';
import colors from '../Colors';

const theme = {
  ...DefaultTheme,
  id: 1,
  dark: false,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6949FF',
    accent: '#F0EDFF',
    background: colors.issabeline,
    text: colors.panegrey,
    placeholder: colors.ashgrey,
    header: '#5c80bc',
    headerTitle: colors.white,
    surface: colors.white,
    primaryText: colors.lightgunmetal,
    normalText: '#000',
    redText: '#e93778',
    border: '#EEEEEE',
  },
};

export default theme;
