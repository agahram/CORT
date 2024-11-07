import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Modal,
} from "react-bootstrap";
import withRouter from "Common/withRouter";

// logo
import logolight from "assets/images/logo-light.png";
import logodark from "assets/images/logo-dark.png";
import logosm from "assets/images/logo-sm.png";
// import Language from 'Common/Language';
import LayoutModeDropdown from "Common/LayoutModeDropdown";
import Notification from "Common/Notification";
import ProfileDropdown from "Common/ProfileDropdown";
import { useLanguage } from "./LanguageContext";
import SimpleBar from "simplebar-react";
import Vertical from "./Layout/Vertical";
import Horizontal from "./Layout/Horizontal";

const Header = ({ layoutType }: any) => {
  const { language, setLanguage } = useLanguage();

  // scroll
  useEffect(() => {
    const windowScroll = () => {
      const pageTopbar = document.getElementById("page-topbar");
      if (pageTopbar) {
        document.body.scrollTop >= 20 ||
        document.documentElement.scrollTop >= 20
          ? pageTopbar.classList.add("topbar-shadow")
          : pageTopbar.classList.remove("topbar-shadow");
      }
    };
    window.addEventListener("scroll", windowScroll);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const toogleMenuBtn = () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    if (layoutType === "horizontal") {
      document.body.classList.contains("menu")
        ? document.body.classList.remove("menu")
        : document.body.classList.add("menu");
    }
    if (window.innerWidth > 1025) {
      document.body.classList.remove("vertical-sidebar-enable");
      if (hamburgerIcon) {
        hamburgerIcon?.classList.toggle("open");
        if (hamburgerIcon?.classList.contains("open")) {
          document.documentElement.setAttribute(
            "data-sidebar-size",
            "sm-hover"
          );
        } else {
          document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
      }
    } else {
      document.body.classList.add("vertical-sidebar-enable");
      // Assuming hamburgerIcon is a reference to a DOM element
      if (hamburgerIcon) {
        hamburgerIcon.classList.add("open");
      }

      if (window.dispatchEvent(new Event("resize"))) {
        if (hamburgerIcon?.classList.contains("open")) {
          hamburgerIcon?.classList.toggle("open");
        }
      }
    }
  };

  const windowScroll = () => {
    const pageTopbar = document.getElementById("page-topbar");
    if (pageTopbar) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        pageTopbar.classList.add("topbar-shadow");
      } else {
        pageTopbar.classList.remove("topbar-shadow");
      }
    }
  };

  if (typeof document !== "undefined") {
    document.onscroll = function () {
      windowScroll();
    };
  }

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  return (
    <React.Fragment>
      <div className="menu-wrapper">
        <header id="page-topbar">
          <div className="layout-width">
            <div className="navbar-header" id="navbar-header">
              <div className="d-flex" id="header-logo">
                {/* LOGO */}
                <div className="navbar-brand-box horizontal-logo">
                  <Link to="/" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src={logosm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                      <img src={logodark} alt="" height="22" />
                    </span>
                  </Link>

                  <Link to="/" className="logo logo-light">
                    <span className="logo-sm">
                      <img src={logosm} alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                      <img src={logolight} alt="" height="22" />
                    </span>
                  </Link>
                </div>

                <Button
                  variant="a"
                  size="sm"
                  type="button"
                  className="btn btn-sm px-3 header-item vertical-menu-btn topnav-hamburger shadow-none"
                  id="topnav-hamburger-icon"
                  onClick={toogleMenuBtn}
                >
                  <span className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </Button>
              </div>

              <div className="app-menu navbar-menu mx-auto">
                <div className="navbar-brand-box vertical-logo">
                  <Link to="/" className="logo logo-dark">
                    <span className="logo-sm">
                      <img
                        src="https://img.themesbrand.com/judia/logo-sm.png"
                        alt=""
                        height="22"
                      />
                    </span>
                    <span className="logo-lg">
                      <img
                        src="https://img.themesbrand.com/judia/logo-dark.png"
                        alt=""
                        height="22"
                      />
                    </span>
                  </Link>

                  <Link to="/" className="logo logo-light">
                    <span className="logo-sm">
                      <img
                        src="https://img.themesbrand.com/judia/logo-sm.png"
                        alt=""
                        height="22"
                      />
                    </span>
                    <span className="logo-lg">
                      <img
                        src="https://img.themesbrand.com/judia/logo-light.png"
                        alt=""
                        height="22"
                      />
                    </span>
                  </Link>
                </div>

                {layoutType === "horizontal" ? (
                  <div id="scrollbar">
                    <ul className="navbar-nav" id="navbar-nav">
                      {/* <Layout language={language} layoutType={layoutType} /> */}
                      <Horizontal language={language} layoutType={layoutType} />
                    </ul>
                  </div>
                ) : (
                  <SimpleBar id="scrollbar" className="h-100">
                    <ul className="navbar-nav" id="navbar-nav">
                      {/* <Layout language={language} layoutType={layoutType} /> */}
                      <Vertical language={language} layoutType={layoutType} />
                    </ul>
                  </SimpleBar>
                )}
              </div>

              <div className="d-flex align-items-center" id="header-items">
                <Dropdown className="ms-1 topbar-head-dropdown header-item">
                  <Dropdown.Toggle
                    as={Button}
                    variant="icon"
                    className="btn-topbar rounded-circle arrow-none"
                    id="page-header-search-dropdown"
                  >
                    <i className="bx bx-search align-middle fs-3xl"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown"
                  >
                    <Form className="p-3">
                      <FormGroup className="m-0">
                        <InputGroup>
                          <FormControl
                            type="text"
                            placeholder="Search ..."
                            aria-label="Recipient's username"
                          />
                          <Button variant="primary" type="submit">
                            <i className="bi bi-search"></i>
                          </Button>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Language */}
                {/* <Language language={language} setLanguage={setLanguage} /> */}

                {/* Layout mode change */}
                <LayoutModeDropdown />

                {/* Notifications */}
                <Notification />

                {/* Profile */}
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </header>

        <div className="vertical-overlay"></div>

        {/* removeNotificationModal */}

        <Modal
          id="removeNotificationModal"
          className="fade zoomIn"
          centered
          tabindex={1}
        >
          <Modal.Dialog className="modal-dialog-centered">
            <div className="modal-content">
              <Modal.Header>
                <Button
                  variant="light"
                  className="btn-close"
                  id="NotificationModalbtn-close"
                />
              </Modal.Header>
              <Modal.Body className="p-md-5">
                <div className="text-center">
                  <div className="text-danger">
                    <i className="bi bi-trash display-4"></i>
                  </div>
                  <div className="mt-4 fs-base">
                    <h4 className="mb-1">Are you sure ?</h4>
                    <p className="text-muted mx-4 mb-0">
                      Are you sure you want to remove this Notification ?
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                  <Button
                    variant="light"
                    className="w-sm"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </Button>
                  <Button
                    variant="danger"
                    className="w-sm"
                    id="delete-notification"
                  >
                    Yes, Delete It!
                  </Button>
                </div>
              </Modal.Body>
            </div>
          </Modal.Dialog>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Header);
