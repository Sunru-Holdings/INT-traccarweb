import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import dimensions from './dimensions';
import components from './components';
import typography from './typography';

export default (server, darkMode) => useMemo(() => createTheme({
  palette: palette(server, darkMode),
  dimensions,
  components,
  typography,
}), [server, darkMode]);
