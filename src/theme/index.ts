import { ThemeConfig } from "antd";

export const darkTheme: ThemeConfig["token"] = {
  // colorPrimary: "rgb(29, 155, 240)",
  colorPrimary: "#ffffff",
  colorPrimaryHover: "#888888", //==> inputs
  borderRadius: 16,
  // Background
  colorBgLayout: "black",
  colorBgContainer: "black",
  // Border
  colorPrimaryBorder: "white",
  colorPrimaryBorderHover: "blue",
  // Hover & Active States.
  colorPrimaryActive: "blue",
  /**
   * Neutral Color
   */
  colorText: "white", //==> Main text color
  colorTextLightSolid: "black", //==> button text
  /**
   * Control Items
   */
  controlItemBgActive: "#525252",
  controlItemBgActiveHover: "black",
  controlOutline: "black",
  controlItemBgHover: "blue",

  // Weak colors --> prefix, suffix
  colorTextPlaceholder: "red",
};

export const darkComponents: ThemeConfig["components"] = {
  Radio: {
    colorPrimary: "rgb(29, 155, 240)",
  },
  Checkbox: {
    colorPrimary: "rgb(29, 155, 240)",
  },
  Switch: {
    colorPrimary: "rgb(29, 155, 240)",
    colorPrimaryHover: "rgb(21, 117, 182)", //==> inputs
  },
  Button: {
    colorPrimaryHover: "#f0f0f0", //==> inputs
    colorPrimary: "#fff",
  },
};

export const lightTheme: ThemeConfig["token"] = {
  // Primary theme of the entire application.
  colorPrimary: "black",
  colorPrimaryHover: "black", //=> Hover for inputs
  borderRadius: 16,
  // Background
  colorBgLayout: "white",
  colorBgContainer: "white",
  // Border
  colorPrimaryBorder: "black",
  colorPrimaryBorderHover: "blue",
  // Hover & Active States.
  colorPrimaryActive: "blue",
  /**
   * Neutral Color
   */
  colorText: "black", //==> Main text color
  colorTextLightSolid: "white", //==> button text
  /**
   * Control Items
   */
  controlItemBgActive: "#c8c8c8",
  controlItemBgActiveHover: "white",
  controlOutline: "white",
};
