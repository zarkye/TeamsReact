import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
export default {
  COLORS: {
    WHITE: '#FFFFFF',

    PURPLE_500: '#7A4A9E',

    GREEN_700: '#228A48',
    GREEN_500: '#31C667',

    RED: '#F75A68',
    RED_DARK: '#AA2834',

    GRAY_700: '#121214',
    GRAY_600: '#202024',
    GRAY_500: '#29292E',
    GRAY_400: '#323238',
    GRAY_300: '#7C7C8A',
    GRAY_200: '#D9D9D9',
    GRAY_100: '#F2F2F2'
  },
  FONT_FAMILY: {
    REGULAR: 'Roboto_400Regular',
    BOLD: 'Roboto_700Bold'
  },
  FONT_SIZE: {
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24
  }
} as const;