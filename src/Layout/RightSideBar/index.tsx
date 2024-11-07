import React, { useEffect, useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { createSelector } from "reselect";
import SimpleBar from "simplebar-react";

import {
  changeLayoutSize,
  changeLayoutType,
  changeLayoutMode,
  changeLayoutTheme,
  changeLayoutWidth,
  changePreLoader,
  changeLayoutPosition,
  changeTopbarImage,
  changeCardLayout,
  changeTopbarTheme,
} from "slices/thunk";
import {
  LAYOUT_CARD,
  SIDEBAR_SIZE,
  LAYOUT_SIDEBAR,
  LAYOUT_MODE_TYPES,
  LAYOUT_POSITION_TYPES,
  LAYOUT_TOPBAR_IMAGE,
  LAYOUT_TOPBAR_THEME_TYPES,
  LAYOUT_TYPES,
  LAYOUT_WIDTH_TYPES,
  PERLOADER_TYPES,
} from "Common/constants/layout";
import ColorMode from "./ColorMode";
import CardLayout from "./CardLayout";
import LayoutWidth from "./LayoutWidth";
import LayoutPosition from "./LayoutPosition";
import Topcolor from "./Topcolor";
import TopbarImage from "./TopbarImage";
import Preloader from "./Preloader";
import LayoutsType from "./LayoutsType";
import LayoutSize from "./LayoutSize";
import LayoutColor from "./LayoutColor";

const RightsideBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  // open offcanvas
  const toggleLeftCanvas = () => {
    setOpen(!open);
  };

  const selectLayoutProperties = createSelector(
    (state: any) => state.Layout,
    (layout) => ({
      layoutType: layout.layoutType,
      layoutSize: layout.sidebarSize,
      layoutModeType: layout.layoutModeType,
      sidebarTheme: layout.sidebarTheme,
      layoutWidthType: layout.layoutWidthType,
      layoutPositionType: layout.layoutPositionType,
      topbarThemeType: layout.topbarThemeType,
      topbarImage: layout.topbarImage,
      cardlayout: layout.cardlayout,
      preloader: layout.preloader,
    })
  );
  const {
    layoutType,
    layoutSize,
    layoutModeType,
    sidebarTheme,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    topbarImage,
    cardlayout,
    preloader,
  } = useSelector(selectLayoutProperties);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const pathName = useLocation().pathname;

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.opacity = "1";
      preloader.style.visibility = "visible";
      setTimeout(function () {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
      }, 1000);
    }
  }, [preloader, pathName]);
  return (
    <React.Fragment>
      <button
        onClick={() => toTop()}
        className="btn btn-dark btn-icon"
        id="back-to-top"
      >
        <i className="bi bi-caret-up fs-3xl"></i>
      </button>

      {preloader === "enable" && (
        <div id="preloader">
          <div id="status">
            <div
              className="spinner-border text-primary avatar-sm"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}

      <div className="customizer-setting d-none d-md-block">
        <div className="btn btn-info" onClick={toggleLeftCanvas}>
          <i className="ph ph-gear-six me-1 align-middle"></i> Customizer
        </div>
      </div>

      <Offcanvas
        className="offcanvas-end border-0"
        show={open}
        onHide={toggleLeftCanvas}
        placement="end"
      >
        <Offcanvas.Header className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
          <div className="me-2">
            <h5 className="mb-1 text-white">Judia Builder</h5>
            <p className="text-white text-opacity-75 mb-0">
              Choose your themes &amp; layouts etc.
            </p>
          </div>
          <button
            onClick={toggleLeftCanvas}
            type="button"
            className="btn-close btn-close-white ms-auto"
          ></button>
        </Offcanvas.Header>

        <div className="offcanvas-body p-0">
          <SimpleBar className="h-100">
            <div className="p-4">
              {/* Layout Type Mode */}
              <LayoutsType
                LAYOUT_TYPES={LAYOUT_TYPES}
                layoutType={layoutType}
                changeLayoutType={changeLayoutType}
              />

              {/* Color Scheme Mode */}
              <ColorMode
                LAYOUT_MODE_TYPES={LAYOUT_MODE_TYPES}
                layoutModeType={layoutModeType}
                changeLayoutMode={changeLayoutMode}
                changeTopbarTheme={changeTopbarTheme}
              />

              {/* Crad Layout */}
              <CardLayout
                LAYOUT_CARD={LAYOUT_CARD}
                cardlayout={cardlayout}
                changeCardLayout={changeCardLayout}
              />

              {/* Layout Width */}
              <LayoutWidth
                LAYOUT_WIDTH_TYPES={LAYOUT_WIDTH_TYPES}
                layoutWidthType={layoutWidthType}
                changeLayoutWidth={changeLayoutWidth}
                changeLayoutSize={changeLayoutSize}
              />

              {/* Layout Position */}
              <LayoutPosition
                LAYOUT_POSITION_TYPES={LAYOUT_POSITION_TYPES}
                layoutPositionType={layoutPositionType}
                changeLayoutPosition={changeLayoutPosition}
              />

              {layoutType === "vertical" && (
                <React.Fragment>
                  {/* Sidebar Size */}
                  <LayoutSize
                    SIDEBAR_SIZE={SIDEBAR_SIZE}
                    layoutSize={layoutSize}
                    changeLayoutSize={changeLayoutSize}
                  />

                  {/* Sidebar Color */}
                  <LayoutColor
                    LAYOUT_SIDEBAR={LAYOUT_SIDEBAR}
                    sidebarTheme={sidebarTheme}
                    changeLayoutTheme={changeLayoutTheme}
                  />
                </React.Fragment>
              )}

              {/* Topbar Color */}
              <Topcolor
                LAYOUT_TOPBAR_THEME_TYPES={LAYOUT_TOPBAR_THEME_TYPES}
                topbarThemeType={topbarThemeType}
                changeTopbarTheme={changeTopbarTheme}
              />

              {/* Topbar Image */}
              <TopbarImage
                LAYOUT_TOPBAR_IMAGE={LAYOUT_TOPBAR_IMAGE}
                topbarImage={topbarImage}
                changeTopbarImage={changeTopbarImage}
              />

              {/* Preloader */}
              <Preloader
                PERLOADER_TYPES={PERLOADER_TYPES}
                preloader={preloader}
                changePreLoader={changePreLoader}
              />
            </div>
          </SimpleBar>
        </div>

        <div className="offcanvas-footer border-top p-3 text-center">
          <Row>
            <Col xs={6}>
              <button
                type="button"
                className="btn btn-light w-100"
                id="reset-layout"
              >
                Reset
              </button>
            </Col>
            <Col xs={6}>
              <Link to="#!" target="_blank" className="btn btn-primary w-100">
                Buy Now
              </Link>
            </Col>
          </Row>
        </div>
      </Offcanvas>
    </React.Fragment>
  );
};

export default RightsideBar;
