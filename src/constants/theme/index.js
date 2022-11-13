const black = "#212121";
const white = "#fff";

export const light = {
  body: white,
  heading: black,
  text: black,
  nav_btn_bg_hover: "rgb(230, 230, 230)",
  nav_btn_bg: "rgba(255, 255, 255, 1)",
  item_container_bg: "rgba(250, 250, 250, 1)",
  item_container_bg_hover: "rgba(240, 240, 240, 0.5)",
  content_divider: "rgba(255, 255, 255, 0.5)",
  divider: "rgba(0, 0, 0, 0.1)",
  icon_color: black,
  icon_color_hover: "rgba(0, 0, 0, 0.5)",
  tbp: "rgb(199, 152, 34)",
};

export const dark = {
  body: black,
  heading: white,
  text: white,
  nav_btn_bg_hover: "rgb(0, 0, 0)",
  nav_btn_bg: black,
  item_container_bg: "rgba(25, 25, 25, 0.5)",
  item_container_bg_hover: "rgba(35, 35, 35, 1)",
  content_divider: "rgba(250, 250, 250, 0.1)",
  divider: "rgba(255, 255, 255, 0.1)",
  icon_color: white,
  icon_color_hover: "rgba(255, 255, 255, 0.5)",
  tbp: "rgb(255, 191, 0)",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
