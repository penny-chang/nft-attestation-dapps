import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const fontSize = 14 // px
const htmlFontSize = 16
const coef = fontSize / 14
const pxToRem = (size) => `${(size / htmlFontSize) * coef}rem`

let theme = createTheme({
    palette: {
        common: {
            black: '#000000',
            white: '#FFFFFF',
            grey: '#707070',
        },
        primary: {
            main: '#273272',
            contrastText: '#FFFFFF',
            light: '#F6F7FE', // for modal inline alert's bgcolor
        },
        secondary: {
            main: '#FF6900',
            contrastText: '#FFFFFF',
        },
        action: {
            hover: '#F6F7FE',
        },
        info: {
            main: '#3665B1',
            light: '#EFF3FA',
        },
        success: {
            main: '#24D493',
            light: '#E5FBF3',
        },
        warning: {
            main: '#FF9800',
            light: '#FFF5E5',
        },
        error: {
            main: '#FF6638',
            light: '#FFEBE5',
        },
        background: {
            paper: '#FFFFFF',
            default: '#FFFFFF',
            main: '#FFFFFF',
            light: '#DDDFDF2F',
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#f5f5f5',
            A200: '#eeeeee',
            A400: '#bdbdbd',
            A700: '#616161',
        },
        text: {
            primary: '#000000',
            secondary: '#808080',
            hint: '#A5A5A5',
            disabled: 'rgba(0, 0, 0, 0.38)',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
    },
    typography: {
        fontSize: 14,
        htmlFontSize: 16,
        fontFamily: "'Noto Sans TC', sans-serif",
        serifTitle: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '2.4rem',
            lineHeight: 1.4,
            letterSpacing: '0.02em',
        },
        serifNumTitle: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 400,
            fontSize: '2.8rem',
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        stepLabel: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 300,
            fontSize: pxToRem(15),
            lineHeight: 1.5,
            letterSpacing: '0.08em',
        },
        h1: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: pxToRem(36),
            lineHeight: 1.167,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: pxToRem(32),
            lineHeight: 1.2,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: pxToRem(26),
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h4: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: pxToRem(24),
            lineHeight: 1.235,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: pxToRem(21),
            lineHeight: 1.334,
            letterSpacing: '0em',
        },
        h6: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: pxToRem(18),
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
        },
        body1: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 400,
            fontSize: pxToRem(16),
            lineHeight: 1.5,
            letterSpacing: '0.02em',
        },
        body2: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 400,
            fontSize: pxToRem(14),
            lineHeight: 1.43,
            letterSpacing: '0.02em',
        },
        description: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 400,
            fontSize: pxToRem(13),
            lineHeight: 1.43,
            letterSpacing: '0.02em',
        },
        button: {
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 400,
            fontSize: pxToRem(16),
            lineHeight: 1.75,
            letterSpacing: '0.02em',
            textTransform: 'capitalize',
        },
    },
    shape: {
        borderRadius: 4,
    },
    mixins: {
        toolbar: {
            minHeight: 56,
            '@media (min-width: 0px)': {
                '@media (orientation: landscape)': {
                    minHeight: 48,
                },
            },
            '@media (min-width: 600px)': {
                minHeight: 64,
            },
        },
    },
    shadows: [
        'none',
        '0px 2px 1px -1px rgba(185,185,185,0.2), 0px 1px 1px 0px rgba(185,185,185,0.14), 0px 1px 3px 0px rgba(185,185,185,0.12)',
        '0px 3px 1px -2px rgba(185,185,185,0.2), 0px 2px 2px 0px rgba(185,185,185,0.14), 0px 1px 5px 0px rgba(185,185,185,0.12)',
        '0px 3px 3px -2px rgba(185,185,185,0.2), 0px 3px 4px 0px rgba(185,185,185,0.14), 0px 1px 8px 0px rgba(185,185,185,0.12)',
        '0px 2px 4px -1px rgba(185,185,185,0.2), 0px 4px 5px 0px rgba(185,185,185,0.14), 0px 1px 10px 0px rgba(185,185,185,0.12)',
        '0px 3px 5px -1px rgba(185,185,185,0.2),0px 5px 8px 0px rgba(185,185,185,0.14),0px 1px 14px 0px rgba(185,185,185,0.12)',
        '0px 3px 5px -1px rgba(185,185,185,0.2),0px 6px 10px 0px rgba(185,185,185,0.14),0px 1px 18px 0px rgba(185,185,185,0.12)',
        '0px 4px 5px -2px rgba(185,185,185,0.2),0px 7px 10px 1px rgba(185,185,185,0.14),0px 2px 16px 1px rgba(185,185,185,0.12)',
        '0px 5px 5px -3px rgba(185,185,185,0.2),0px 8px 10px 1px rgba(185,185,185,0.14),0px 3px 14px 2px rgba(185,185,185,0.12)',
        '0px 5px 6px -3px rgba(185,185,185,0.2),0px 9px 12px 1px rgba(185,185,185,0.14),0px 3px 16px 2px rgba(185,185,185,0.12)',
        '0px 6px 6px -3px rgba(185,185,185,0.2),0px 10px 14px 1px rgba(185,185,185,0.14),0px 4px 18px 3px rgba(185,185,185,0.12)',
        '0px 6px 7px -4px rgba(185,185,185,0.2),0px 11px 15px 1px rgba(185,185,185,0.14),0px 4px 20px 3px rgba(185,185,185,0.12)',
        '0px 7px 8px -4px rgba(185,185,185,0.2),0px 12px 17px 2px rgba(185,185,185,0.14),0px 5px 22px 4px rgba(185,185,185,0.12)',
        '0px 7px 8px -4px rgba(185,185,185,0.2),0px 13px 19px 2px rgba(185,185,185,0.14),0px 5px 24px 4px rgba(185,185,185,0.12)',
        '0px 7px 9px -4px rgba(185,185,185,0.2),0px 14px 21px 2px rgba(185,185,185,0.14),0px 5px 26px 4px rgba(185,185,185,0.12)',
        '0px 8px 9px -5px rgba(185,185,185,0.2),0px 15px 22px 2px rgba(185,185,185,0.14),0px 6px 28px 5px rgba(185,185,185,0.12)',
        '0px 8px 10px -5px rgba(185,185,185,0.2),0px 16px 24px 2px rgba(185,185,185,0.14),0px 6px 30px 5px rgba(185,185,185,0.12)',
        '0px 8px 11px -5px rgba(185,185,185,0.2),0px 17px 26px 2px rgba(185,185,185,0.14),0px 6px 32px 5px rgba(185,185,185,0.12)',
        '0px 9px 11px -5px rgba(185,185,185,0.2),0px 18px 28px 2px rgba(185,185,185,0.14),0px 7px 34px 6px rgba(185,185,185,0.12)',
        '0px 9px 12px -6px rgba(185,185,185,0.2),0px 19px 29px 2px rgba(185,185,185,0.14),0px 7px 36px 6px rgba(185,185,185,0.12)',
        '0px 10px 13px -6px rgba(185,185,185,0.2),0px 20px 31px 3px rgba(185,185,185,0.14),0px 8px 38px 7px rgba(185,185,185,0.12)',
        '0px 10px 13px -6px rgba(185,185,185,0.2),0px 21px 33px 3px rgba(185,185,185,0.14),0px 8px 40px 7px rgba(185,185,185,0.12)',
        '0px 10px 14px -6px rgba(185,185,185,0.2),0px 22px 35px 3px rgba(185,185,185,0.14),0px 8px 42px 7px rgba(185,185,185,0.12)',
        '0px 11px 14px -7px rgba(185,185,185,0.2),0px 23px 36px 3px rgba(185,185,185,0.14),0px 9px 44px 8px rgba(185,185,185,0.12)',
        '0px 11px 15px -7px rgba(185,185,185,0.2),0px 24px 38px 3px rgba(185,185,185,0.14),0px 9px 46px 8px rgba(185,185,185,0.12)',
    ],
})

theme = responsiveFontSizes(theme)

export { theme }
