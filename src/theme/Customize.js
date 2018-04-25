import { createMuiTheme } from 'material-ui/styles';

// override theme 
// more info @ https://material-ui-next.com/customization/overrides/
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8e55fb',
            main: '#8450fb',
            dark: '#7042f4',
            contrastText: '#fff'
        }
    },
    typography: {
        body2: {
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
