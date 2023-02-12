import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

const primary_color = '#ee7e42';
const dark = '#599EED';
const light = '#42ba96';
export const DefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#FFFFFF',
    // surface: '#ffffff',
    primary: primary_color,
    secondary: dark,
    tertiary: light,
    text: '#000000',
    border: '#206C84',
    error: '#F32013',
    surface: '#ffffff',
    onSurface: '#252525', // text on surface
    surfaceVariant: '#F1F3F7',
    onSurfaceVariant: '#B8B8B8',
    outline: '#E7E7E7',
    surfaceDisabled: '#ECECEC',
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    primary: primary_color,
    secondary: dark,
    tertiary: light,
    background: '#14191F',
    surface: '#0B0F13',
    text: '#ffffff',
    error: '#CA0B00',
    onSurface: '#BCC3CD',
    surfaceVariant: '#1C2026',
    onSurfaceVariant: '#BCC3CD',
    surfaceDisabled: '#606368',
    onSurfaceDisabled: '',
    outline: '#32373e',
  },
};

// Fonts
// export const ROBOTO_BOLD = 'Roboto-Bold';
// export const ROBOTO_MEDIUM = 'Roboto-Medium';
// export const ROBOTO_REGULAR = 'Roboto-Regular';
