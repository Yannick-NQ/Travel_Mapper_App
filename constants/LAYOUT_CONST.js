import { Dimensions } from "react-native";

// DIMENSIONS

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

// SETUP COLORS

const PRIMARY = {
    lighter: "#e2eefe",
    100: "#bae7ff",
    200: "#91d5ff",
    light: "#69c0ff",
    400: "#40a9ff",
    main: "#0882CC",
    dark: "#0669A4",
    700: "#0050b3",
    darker: "#003a8c",
    900: "#002766",
};

const SECONDARY = {
    lighter: "#fafafa",
    100: "#f5f5f5",
    200: "#f0f0f0",
    light: "#d9d9d9",
    400: "#bfbfbf",
    main: "#8c8c8c",
    600: "#595959",
    dark: "#262626",
    800: "#141414",
    darker: "#000000",
};

const INFO = {
    lighter: "#D0F2FF",
    light: "#74CAFF",
    main: "#1890FF",
    dark: "#0C53B7",
    darker: "#04297A",
};
const SUCCESS = {
    lighter: "#f6ffed",
    light: "#95de64",
    main: "#52c41a",
    dark: "#237804",
    darker: "#092b00",
};
const WARNING = {
    lighter: "#fffbe6",
    light: "#ffd666",
    main: "#faad14",
    dark: "#ad6800",
    darker: "#613400",
};
const ERROR = {
    lighter: "#fff1f0",
    light: "#ff7875",
    main: "#f5222d",
    dark: "#a8071a",
    darker: "#5c0011",
};

const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
};

export { PRIMARY, SECONDARY, INFO, SUCCESS, WARNING, ERROR };