import {ICON_TYPE} from '../../Icons';
import Routes from '../../Navigation/Routes';

export default SettingItemList = [
  {
    iconType: ICON_TYPE.FONT_AWESOME,
    icon: 'user-circle',
    label: 'personal_info',
    type: 'navigation',
    action: Routes.PERSONAL_INFO,
  },
  {
    iconType: ICON_TYPE.MATERIAL_ICONS,
    icon: 'notifications',
    label: 'notification',
    type: 'navigation',
    action: Routes.NOTIFICATION_SCREEN,
  },
  {
    iconType: ICON_TYPE.ENTYPO,
    icon: 'light-up',
    label: 'theme',
    type: 'fn',
    action: '',
  },
  {
    iconType: ICON_TYPE.MATERIAL_ICONS,
    icon: 'language',
    label: 'change_language',
    type: 'fn',
    action: '',
  },
  {
    iconType: ICON_TYPE.ENTYPO,
    icon: 'book',
    label: 'about',
    type: 'navigation',
    action: Routes.ABOUT_SCREEN,
  },
  {
    iconType: ICON_TYPE.ENTYPO,
    icon: 'log-out',
    label: 'logout',
    type: 'fn',
    action: '',
  },
];
