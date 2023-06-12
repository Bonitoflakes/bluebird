import { ThemeConfig } from "antd";

export const darkTheme: ThemeConfig["token"] = {
  colorPrimary: "#ffffff",
  colorPrimaryHover: "#888888", //==> inputs
  borderRadius: 16,
  // Background
  colorBgLayout: "#000",
  colorBgContainer: "#000",
  // Border
  colorPrimaryBorder: "#fff",
  colorPrimaryBorderHover: "rgb(29,155,240)",
  // Hover & Active States.
  colorPrimaryActive: "rgb(29,155,240)",
  /**
   * Neutral Color
   */
  colorText: "#fff", //==> Main text color
  colorTextLightSolid: "#000", //==> button text
  /**
   * Control Items
   */
  controlItemBgActive: "#525252",
  controlItemBgActiveHover: "#000",
  controlOutline: "#000",
  controlItemBgHover: "rgb(29,155,240)",

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
    colorPrimaryHover: "#B7B7B7", //==> inputs
    colorPrimary: "#fff",
  },
};

export const lightTheme: ThemeConfig["token"] = {
  // Primary theme of the entire application.
  colorPrimary: "#000",
  colorPrimaryHover: "#000", //=> Hover for inputs
  borderRadius: 16,
  // Background
  colorBgLayout: "#fff",
  colorBgContainer: "#fff",
  // Border
  colorPrimaryBorder: "#000",
  colorPrimaryBorderHover: "rgb(29,155,240)",
  // Hover & Active States.
  colorPrimaryActive: "rgb(29,155,240)",
  /**
   * Neutral Color
   */
  colorText: "#000", //==> Main text color
  colorTextLightSolid: "#fff", //==> button text
  /**
   * Control Items
   */
  controlItemBgActive: "#c8c8c8",
  controlItemBgActiveHover: "#fff",
  controlOutline: "#fff",
};
