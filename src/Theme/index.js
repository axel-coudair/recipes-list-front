import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  palette: {
    primary: purple,
    secondary: red,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});