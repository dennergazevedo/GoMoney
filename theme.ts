import {DefaultTheme} from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFC222',
    text: '#FCFCF7',
    notification: '#FFF8',
    card: '#512D3B',
    background: '#342F2B',
  },
};

export default MyTheme;
