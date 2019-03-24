import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1600,
    },
  },
  typography: { useNextVariants: true },
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#c60021' },
    background: {
      primary: '#e3e3e3',
      secondary: '#f6f6f8',
    },
  },
});
