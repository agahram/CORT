import React, { useEffect, useState } from "react";
import { Button, Dropdown, Image } from "react-bootstrap";

// image
import avatar1 from "assets/images/users/avatar-1.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const ProfileDropdown = () => {
  const [userName, setUserName] = useState<any>("Chiper");

  const profiledropdownData = createSelector(
    (state: any) => state.Profile,
    (user) => user.user
  );

  // Inside your component
  const user = useSelector(profiledropdownData);

  useEffect(() => {
    const authUser: any = sessionStorage.getItem("authUser");
    // if (authUser) {
    const obj = JSON.parse(authUser);
    setUserName(
      process.env.REACT_APP_DEFAULTAUTH === "fake"
        ? obj.username === undefined
          ? user.username
            ? user.username
            : obj.data.first_name
          : "Sophia Bethany"
        : process.env.REACT_APP_DEFAULTAUTH === "firebase"
        ? obj.displayName && obj.displayName
        : "Sophia Bethany"
    );
    // }
  }, [userName, user]);

  return (
    <React.Fragment>
      <>
        <Dropdown className="topbar-head-dropdown ms-2 header-item">
          <Dropdown.Toggle
            as={Button}
            variant="icon"
            className="arrow-none rounded-circle"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Image
              className="img-fluid rounded-circle"
              src={avatar1}
              alt="Header Avatar"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="p-2 dropdown-menu-end">
            <div className="d-flex gap-2 mb-3 topbar-profile">
              <div className="position-relative">
                <Image
                  className="rounded-1"
                  src={avatar1}
                  alt="Header Avatar"
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
              <div>
                <h6 className="mb-1 fs-sm user-name">{userName}</h6>
                <p className="mb-0 fw-medium fs-xs">
                  <Link to="#!">sophia@judia.com</Link>
                </p>
              </div>
            </div>
            <Dropdown.Item href={process.env.PUBLIC_URL + "/user-profile"}>
              <i className="bi bi-person align-middle me-2"></i> Profile
            </Dropdown.Item>
            {/* <Dropdown.Item href={process.env.PUBLIC_URL + "/#"}>
              <i className="bi bi-chat-right-text align-middle me-2"></i>{" "}
              Messages
            </Dropdown.Item>
            <Dropdown.Item href={process.env.PUBLIC_URL + "/#"}>
              <i className="bi bi-gem align-middle me-2"></i> My Subscription
            </Dropdown.Item>
            <Dropdown.Item href={process.env.PUBLIC_URL + "/#"}>
              <i className="bi bi-person-gear align-middle me-2"></i> Account
              Settings
            </Dropdown.Item> */}
            <Dropdown.Item href={process.env.PUBLIC_URL + "/logout"}>
              <i className="bi bi-box-arrow-right align-middle me-2"></i> Sign
              Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    </React.Fragment>
  );
};

export default ProfileDropdown;
