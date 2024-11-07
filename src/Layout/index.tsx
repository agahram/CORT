import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLayoutType,
  changeLayoutMode,
  changeLayoutSize,
  changeLayoutTheme,
  changeLayoutWidth,
  changeLayoutPosition,
  changeTopbarImage,
  changeCardLayout,
  changeTopbarTheme,
} from "slices/thunk";
import Header from "./Header";
import { createSelector } from "reselect";
import Footer from "./Footer";
import TopbarSvg from "./TopbarSvg";
import LanguageProvider from "./LanguageContext";
import { Card, Row } from "react-bootstrap";
import { widgetexchange } from "Common/data/exchange";
import TrialTests from "./TrialTests";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const dispatch: any = useDispatch();

  // const selectLayoutState = (state: any) => state.Layout;
  const selectLayoutProperties = createSelector(
    (state: any) => state.Layout,
    (layout) => ({
      layoutTypeType: layout.layoutType,
      layoutModeType: layout.layoutModeType,
      layoutSize: layout.sidebarSize,
      sidebarTheme: layout.sidebarTheme,
      layoutWidthType: layout.layoutWidthType,
      layoutPositionType: layout.layoutPositionType,
      topbarThemeType: layout.topbarThemeType,
      topbarImage: layout.topbarImage,
      cardlayout: layout.cardlayout,
    })
  );

  const {
    layoutTypeType,
    layoutSize,
    sidebarTheme,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    topbarImage,
    cardlayout,
  } = useSelector(selectLayoutProperties);

  // layout settings
  useEffect(() => {
    if (
      layoutTypeType ||
      layoutSize ||
      layoutModeType ||
      sidebarTheme ||
      layoutModeType ||
      layoutWidthType ||
      layoutPositionType ||
      topbarThemeType ||
      topbarImage ||
      cardlayout
    ) {
      window.dispatchEvent(new Event("resize"));
      dispatch(changeLayoutType(layoutTypeType));
      dispatch(changeLayoutSize(layoutSize));
      dispatch(changeLayoutTheme(sidebarTheme));
      dispatch(changeLayoutMode(layoutModeType));
      dispatch(changeLayoutWidth(layoutWidthType));
      dispatch(changeLayoutPosition(layoutPositionType));
      dispatch(changeTopbarTheme(topbarThemeType));
      dispatch(changeTopbarImage(topbarImage));
      dispatch(changeCardLayout(cardlayout));
    }
  }, [
    layoutTypeType,
    layoutSize,
    sidebarTheme,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    topbarImage,
    cardlayout,
    dispatch,
  ]);

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <LanguageProvider>
          <Header layoutType={layoutTypeType} />
        </LanguageProvider>
        <TopbarSvg />
        <div className="main-content">
          <div className="page-content">
            <TrialTests />
            {/* {props.children} */}
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
