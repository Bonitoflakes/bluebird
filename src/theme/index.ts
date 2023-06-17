import { ThemeConfig } from "antd";

const white = "#FFFFFF";
const black = "#000000";
const primary = "rgb(29,156,240)";

const common: ThemeConfig["token"] = {
  colorLink: primary,
  colorLinkHover: "rgb(21, 117, 182)",
  borderRadius: 16,

  colorPrimaryBorderHover: primary,
  // Hover & Active States.
  colorPrimaryActive: primary,
};

export const darkTheme: ThemeConfig["token"] = {
  ...common,
  colorPrimary: white,
  colorPrimaryHover: "#888888", //==> inputs
  // Background
  colorBgLayout: black,
  colorBgContainer: black,
  // Border
  colorPrimaryBorder: white,

  /**
   * Neutral Color
   */
  colorText: white, //==> Main text color
  colorTextLightSolid: black, //==> button text
  /**
   * Control Items
   */
  controlItemBgActive: "#525252",
  controlItemBgActiveHover: black,
  controlOutline: black,
  // controlItemBgHover: primary,

  // Weak colors --> prefix, suffix
  colorTextPlaceholder: primary,
};

export const darkComponents: ThemeConfig["components"] = {
  Radio: {
    colorPrimary: primary,
  },
  Checkbox: {
    colorPrimary: primary,
  },
  Switch: {
    colorPrimary: primary,
    colorPrimaryHover: "rgb(21, 117, 182)", //==> inputs
  },
  Button: {
    colorPrimaryHover: "#B7B7B7", //==> inputs
    colorPrimary: white,
  },
};

export const lightTheme: ThemeConfig["token"] = {
  ...common,
  // Primary theme of the entire application.
  colorPrimary: black,
  colorPrimaryHover: black, //=> Hover for inputs
  // Background
  colorBgLayout: white,
  colorBgContainer: white,
  // Border
  colorPrimaryBorder: black,

  /**
   * Neutral Color
   */
  colorText: black, //==> Main text color
  colorTextLightSolid: white, //==> button text
  /**
   * Control Items
   */
  controlItemBgActive: "#c8c8c8",
  controlItemBgActiveHover: white,
  controlOutline: white,
};
