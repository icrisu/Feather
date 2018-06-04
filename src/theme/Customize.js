import { createMuiTheme } from '@material-ui/core/styles';

// override theme 
// more info @ https://material-ui-next.com/customization/overrides/
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8e55fb',
            main: '#8450fb',
            dark: '#7042f4',
            contrastText: '#fff'
        },
        secondary: {
            light: '#59efb2',
            main: '#3fd699',
            dark: '#33c489',
            contrastText: '#fff'
        },     
        text: {
            primary: '#394163'
        }
    },
    typography: {
        body2: {
            color: '#394163'
        },
        headline: {
            color: '#394163'
        },
        title: {
            color: '#394163'
        }      
    }
});

export const MAIN_MENU_COLORS = {
    itemColor: '#dbc6fe',
    itemSelectedColor: '#FFFFFF',
    submenuBackground: '#7942e6'//613eb3
}

export const APP_BAR_COLORS = {
    navigationItems: '#99a5c8',
    itemsSeparatorBackground: '#d9dfeb'
}

export const WIDGET_LOADER_COLOR = '#eaedfc';
export const PAGE_LOADER_COLOR = 'rgba(152, 165, 200, .2)';

