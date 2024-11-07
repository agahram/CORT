// Importing necessary libraries
import { createSlice } from "@reduxjs/toolkit";

// Importing constants
import {
  LAYOUT_TYPES,
  SIDEBAR_SIZE,
  LAYOUT_TOPBAR_IMAGE,
  LAYOUT_MODE_TYPES,
  LAYOUT_CARD,
  LAYOUT_WIDTH_TYPES,
  LAYOUT_POSITION_TYPES,
  LAYOUT_TOPBAR_THEME_TYPES,
  PERLOADER_TYPES,
  LAYOUT_SIDEBAR,
} from "Common/constants/layout";

// Defining the state interface
export interface LayoutState {
  layoutType: LAYOUT_TYPES.VERTICAL | LAYOUT_TYPES.HORIZONTAL;
  sidebarSize: SIDEBAR_SIZE.LG | SIDEBAR_SIZE.MD | SIDEBAR_SIZE.SM,
  sidebarTheme: LAYOUT_SIDEBAR.SIDEBAR_DARK | LAYOUT_SIDEBAR.SIDEBAR_LIGHT,
  layoutModeType: LAYOUT_MODE_TYPES.LIGHTMODE | LAYOUT_MODE_TYPES.DARKMODE | LAYOUT_MODE_TYPES.BRANDMODE;
  topbarImage: LAYOUT_TOPBAR_IMAGE.PATTERN1 | LAYOUT_TOPBAR_IMAGE.PATTERN2 | LAYOUT_TOPBAR_IMAGE.PATTERN3;
  cardlayout: LAYOUT_CARD.BORDERLESS | LAYOUT_CARD.BORDER;
  layoutWidthType: LAYOUT_WIDTH_TYPES.FLUID | LAYOUT_WIDTH_TYPES.BOXED;
  layoutPositionType: LAYOUT_POSITION_TYPES.FIXED | LAYOUT_POSITION_TYPES.SCROLLABLE;
  topbarThemeType: LAYOUT_TOPBAR_THEME_TYPES.LIGHT | LAYOUT_TOPBAR_THEME_TYPES.DARK | LAYOUT_TOPBAR_THEME_TYPES.BRAND;
  preloader: PERLOADER_TYPES.ENABLE | PERLOADER_TYPES.DISABLE;
}

// Initial state of the LayoutSlice
export const initialState: LayoutState = {
  layoutType: LAYOUT_TYPES.HORIZONTAL,
  sidebarSize: SIDEBAR_SIZE.LG,
  sidebarTheme: LAYOUT_SIDEBAR.SIDEBAR_LIGHT,
  layoutModeType: LAYOUT_MODE_TYPES.LIGHTMODE,
  layoutWidthType: LAYOUT_WIDTH_TYPES.FLUID,
  layoutPositionType: LAYOUT_POSITION_TYPES.FIXED,
  topbarThemeType: LAYOUT_TOPBAR_THEME_TYPES.DARK,
  preloader: PERLOADER_TYPES.DISABLE,
  topbarImage: LAYOUT_TOPBAR_IMAGE.PATTERN1,
  cardlayout: LAYOUT_CARD.BORDERLESS
};


// Create the LayoutSlice
const LayoutSlice = createSlice({
  name: 'LayoutSlice',
  initialState,
  reducers: {

    // Action to change the layout type
    changeLayoutTypeAction(state: any, action: any) {
      state.layoutType = action.payload;  // layout type change
    },
    // Action to change the layout size
    changeLayoutSizeAction(state: any, action: any) {
      state.sidebarSize = action.payload;  // layout type change
    },

    // Action to change the layout sidebar color
    changeLayoutThemeAction(state: any, action: any) {
      state.sidebarTheme = action.payload;  // layout type change
    },

    // Action to change the layout mode
    changeLayoutModeAction(state: any, action: any) {
      state.layoutModeType = action.payload;  // layout mode change
    },

    // Action to change the sidebar theme
    changeSidebarThemeAction(state: any, action: any) {
      state.leftSidebarType = action.payload; // You may need to add the 'leftSidebarType' key to your state interface for this action to work correctly.
    },

    // Action to change the layout width
    changeLayoutWidthAction(state: any, action: any) {
      state.layoutWidthType = action.payload;
    },

    // Action to change the layout position
    changeLayoutPositionAction(state: any, action: any) {
      state.layoutPositionType = action.payload;
    },

    // Action to change the topbar theme
    changeTopbarThemeAction(state: any, action: any) {
      state.topbarThemeType = action.payload;
    },

    // Action to change the preloader
    changePreLoaderAction(state: any, action: any) {
      state.preloader = action.payload;
    },

    // Action to change the topbar image
    changeTopbarImageAction(state: any, action: any) {
      state.topbarImage = action.payload;
    },

    // Action to change the card layout
    changeCardLayoutAction(state: any, action: any) {
      state.cardlayout = action.payload;
    }
  }
});

// Exporting individual actions from LayoutSlice
export const {
  changeLayoutTypeAction,
  changeLayoutSizeAction,
  changeLayoutThemeAction,
  changeLayoutModeAction,
  changeSidebarThemeAction,
  changeLayoutWidthAction,
  changeLayoutPositionAction,
  changeTopbarThemeAction,
  changePreLoaderAction,
  changeTopbarImageAction,
  changeCardLayoutAction
} = LayoutSlice.actions;

// Exporting the reducer
export default LayoutSlice.reducer;
