export const PAGE_PATH_ENDING = "page.tsx";
export const UNPUBLISHED_PAGE_ENDING_PREFIX = "_page.tsx";
/* 
{
  size: {
    width: 1366,
    height: 768,
    maxCodePaneHeight: 200
  },
  colors: {
    primary: "#ebe5da",
    secondary: "#fc6986",
    tertiary: "#1e2852",
    quaternary: "#ffc951",
    quinary: "#8bddfd"
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Consolas", "Menlo", monospace'
  },
  fontSizes: {
    h1: "72px",
    h2: "64px",
    h3: "56px",
    text: "44px",
    monospace: "20px"
  },
  space: [16, 24, 32]
};
*/
export const DECK_THEMES = {
  light: {
    colors: {
      primary: "#242424",
      secondary: "#242424",
      tertiary: "#ffffff",
      quaternary: "#595959",
      quinary: "purple",
    },
  },
  dark: {
    colors: {
      primary: "#efefef",
      secondary: "#efefef",
      tertiary: "#000000",
      quaternary: "#959595",
      quinary: "salmon",
    },
  },
};
export const NO_DECK_TRANSITION = {
  from: {
    transform: "translateX(0)",
  },
  enter: {
    transform: "translateX(0)",
  },
  leave: {
    transform: "translateX(0)",
  },
};
export const ANIMATION_MODES = ["on", "off", "system"] as const;
export const ANIMATION_MODE_STORAGE_KEY = "animationMode";
