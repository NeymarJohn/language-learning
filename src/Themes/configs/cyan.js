import {DefaultTheme} from 'react-native-paper';
import colors from '../Colors';

const theme = {
  ...DefaultTheme,
  dark: false,
  id: 2,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6949FF',
    accent: '#35383F',
    background: '#181A20',
    text: colors.panegrey,
    placeholder: colors.ashgrey,
    header: '#1c2541',
    headerTitle: colors.white,

    //react-native-paper theme colors
    surface: colors.white,
    primaryText: colors.darkgunmetal,
    normalText: '#fff',
    redText: '#e93778',
    border: '#EEEEEE',
  },
};

export default theme;
