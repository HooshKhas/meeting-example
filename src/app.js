import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { RTL } from './components/rtl';
import { SettingsConsumer, SettingsProvider } from './contexts/settings-context';
import { routes } from './routes';
import { createTheme } from './theme';

import './styles/index.css'

export const App = () => {
  const element = useRoutes(routes);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <SettingsProvider>
        <SettingsConsumer>
          {(settings) => {
            const theme = createTheme({
              colorPreset: settings.colorPreset,
              contrast: settings.contrast,
              direction: settings.direction,
              paletteMode: settings.paletteMode,
              responsiveFontSizes: settings.responsiveFontSizes
            });

            return (
              <ThemeProvider theme={theme}>
                <RTL direction={settings.direction}>
                  <CssBaseline />
                  <>
                    {element}
                  </>
                </RTL>
              </ThemeProvider>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </LocalizationProvider>
  );
};
