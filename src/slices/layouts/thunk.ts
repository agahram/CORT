import { changeHTMLAttribute } from './utils';

import {
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
} from "./reducer"

/**
 * Changes the layout type
 * @param {*} param0
 */
export const changeLayoutType: any = (layoutType: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-layout", layoutType);
        dispatch(changeLayoutTypeAction(layoutType));
    } catch (error) {
        // console.log(error);
    }
};

/**
 * Changes the layout sidebar size
 * @param {*} param0
 */
export const changeLayoutSize: any = (layoutSize: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-sidebar-size", layoutSize);
        dispatch(changeLayoutSizeAction(layoutSize));
    } catch (error) {
        // console.log(error);
    }
};

/**
 * Changes the layout sidebar color
 * @param {*} param0
 */
export const changeLayoutTheme: any = (layoutSize: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-sidebar", layoutSize);
        dispatch(changeLayoutThemeAction(layoutSize));
    } catch (error) {
        // console.log(error);
    }
};


/**
 * Changes the layout mode
 * @param {*} param0
 */
export const changeLayoutMode = (layoutMode: any) => async (dispatch: any) => {
    try {
        switch (layoutMode) {
            case "light":
                changeHTMLAttribute("data-bs-theme", "light");
                break;
            case "dark":
                changeHTMLAttribute("data-bs-theme", "dark");
                break;
            case "brand":
                changeHTMLAttribute("data-bs-theme", "brand");
                break;
            default:
                changeHTMLAttribute("data-bs-theme", "light");
                break;
        }
        dispatch(changeLayoutModeAction(layoutMode));
        dispatch(changeTopbarThemeAction(layoutMode));
    } catch (error) {
        // Handle any errors if needed
    }
};

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
export const changeSidebarTheme = (sidebarTheme: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-sidebar", sidebarTheme);
        dispatch(changeSidebarThemeAction(sidebarTheme));
    } catch (error) {
        // console.log(error);
    }
};

/**
 * Changes the layout width
 * @param {*} param0
 */
export const changeLayoutWidth = (layoutWidth: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-layout-width", layoutWidth);
        dispatch(changeLayoutWidthAction(layoutWidth));
    } catch (error) {
        return error;
    }
};

/**
 * Changes the Preloader
 * @param {*} param0
 */
export const changePreLoader = (preloaderTypes: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-preloader", preloaderTypes);
        dispatch(changePreLoaderAction(preloaderTypes));
    } catch (error) {
        // console.log(error);
    }
};

/**
 * Changes the layout position
 * @param {*} param0
 */
export const changeLayoutPosition = (layoutposition: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-layout-position", layoutposition);
        dispatch(changeLayoutPositionAction(layoutposition));
    } catch (error) {
        // console.log(error);
    }
};

/**
 * Changes the layout topbar image
 * @param {*} param0
 */
export const changeTopbarImage = (topbarImage: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-topbar-image", topbarImage);
        dispatch(changeTopbarImageAction(topbarImage));
    } catch (error) {
        // console.log(error);
    }
};

/**
 * Changes the layout topbar image
 * @param {*} param0
 */
export const changeCardLayout = (cardLayout: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-card-layout", cardLayout);
        dispatch(changeCardLayoutAction(cardLayout));
    } catch (error) {
        // console.log(error);
    }
};

/**
 * Changes the topbar themes
 * @param {*} param0
 */
export const changeTopbarTheme = (topbarTheme: any) => async (dispatch: any) => {
    try {
        changeHTMLAttribute("data-topbar", topbarTheme);
        dispatch(changeTopbarThemeAction(topbarTheme));

    } catch (error) {
        // console.log(error);
    }
};



