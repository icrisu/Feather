
// replace with your API root
// will use dummy URL (also see index.js - DUMMY_DTA_FOLDER )
export const API_ROOT = `${process.env.PUBLIC_URL}/assets/dummy_data/json`;

// you also have to set the same menu width in settings.scss
export const MENU_WIDTH = 240;
export const SMALL_SCREEN_MAIN_SIZE = 767; // menu will behave different

export const LANG_OPTIONS = [
    {
        country_code: 'US',
        label: 'EN-US'
    },
    {
        country_code: 'GB',
        label: 'EN-GB'
    }         
]
export const DEFAULT_LANG = 'GB';
