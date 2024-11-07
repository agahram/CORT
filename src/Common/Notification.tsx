import React, { useState } from 'react'
import { Button, Dropdown, Form, Image, Row } from 'react-bootstrap'

// image
import img3 from "assets/images/companies/img-3.png";
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar8 from "assets/images/users/avatar-8.jpg";
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';


const Notification = () => {
    // unread badge count
    const [badgeCount, setBadgeCount] = useState<number>(4);

    //Dropdown State
    const [topbarExpanded, setTopbarExpanded] = useState<boolean>(false);
    // toggle Dropdown 
    const handleMainDropdownToggle = (isOpen: any) => setTopbarExpanded(isOpen);
    // nested toggle Dropdown 
    const handleNestedDropdownClick = () => setTopbarExpanded(true);

    // All Clear Notification
    const [clearNotification, setClearNotification] = useState<boolean>(true);
    const deleteAllNotification = () => {
        setClearNotification(false)
        setBadgeCount(0);
    }

    // Mark all as read
    const [allasread, setAllasread] = useState<boolean>(true);
    const markAsRead = () => setAllasread(false);

    return (
        <React.Fragment>
            <Dropdown show={topbarExpanded} className="topbar-head-dropdown ms-1 header-item" id="notificationDropdown" onToggle={handleMainDropdownToggle}>
                <Dropdown.Toggle
                    as={Button}
                    variant="icon"
                    className="btn-topbar rounded-circle arrow-none"
                    id="page-header-notifications-dropdown"
                    aria-haspopup="true"
                >
                    <i className="bi bi-bell fs-2xl"></i>
                    <span className="position-absolute topbar-badge p-0 d-flex align-items-center justify-content-center translate-middle badge rounded-pill bg-danger">
                        <span className="notification-badge">{badgeCount}</span>
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-xl dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div className="dropdown-head rounded-top">
                        <div className="p-3 pb-1">
                            <Row className="align-items-center mb-3">
                                <div className="col">
                                    <h6 className="mb-0 fs-lg fw-semibold">Notifications <span className="badge bg-danger-subtle text-danger fs-sm notification-badge">{badgeCount}</span></h6>
                                </div>
                                <Dropdown className="col-auto" onClick={handleNestedDropdownClick}>
                                    <Dropdown.Toggle as="a" href='#' bsPrefix="link-secondary fs-md arrow-none" id="dropdown-notification-menu">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <li><Dropdown.Item href="#" onClick={deleteAllNotification}>All Clear</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#" onClick={markAsRead}>Mark all as read</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#">Archive All</Dropdown.Item></li>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Row>
                        </div>
                    </div>
                    <div className="card border-top border-bottom mb-0 rounded-0">
                        <div className="p-3 d-flex align-items-center gap-2">
                            <div className="flex-shrink-0">
                                <i className="bi bi-bell fs-3xl"></i>
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="mb-1">Push Notification</h6>
                                <p className="text-muted mb-0">Automatically send new notification</p>
                            </div>
                            <div className="flex-shrink-0">
                                <Form.Check
                                    type="switch"
                                    id="flexSwitchCheckDefault"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-2 ps-3" id="notificationItemsTabContent">
                        <SimpleBar style={{ maxHeight: '300px' }} className="pe-3">
                            <div className={`text-reset notification-item d-block dropdown-item position-relative ${clearNotification ? "" : "d-none"} ${allasread ? "unread-message" : ""}`}>
                                <div className="d-flex gap-3">
                                    <div className="flex-shrink-0">
                                        <Image src={img3} className="avatar-xs rounded-circle" alt="Notification " />
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="fs-md mb-1 lh-base">Judia Membership</h6>
                                        </Link>
                                        <p className="text-muted mb-0">Successfully purchased a business plan for <span className="text-danger fw-medium">-$24.99</span></p>
                                    </div>
                                    <p className="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                        57 sec ago
                                    </p>
                                </div>
                            </div>

                            <div className={`text-reset notification-item d-block dropdown-item position-relative ${clearNotification ? "" : "d-none"}`}>
                                <div className="d-flex gap-3">
                                    <div className="flex-shrink-0">
                                        <Image src={avatar8} className="avatar-xs rounded-circle" alt="Notification " />
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="fs-md mb-1 lh-base">Bella Bailey</h6>
                                        </Link>
                                        <p className="text-muted mb-0">Assigned you on the call with Fatima</p>
                                    </div>
                                    <p className="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                        5 min ago
                                    </p>
                                </div>
                            </div>

                            <div className={`text-reset notification-item d-block dropdown-item position-relative ${clearNotification ? "" : "d-none"} ${allasread ? "unread-message" : ""}`}>
                                <div className="d-flex gap-3">
                                    <div className="avatar-xs flex-shrink-0">
                                        <span className="avatar-title bg-danger-subtle text-danger rounded-circle fs-lg">
                                            <i className="bx bx-message-square-dots"></i>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <p className="text-muted mb-0">
                                            <b className="text-body">Nathan Keeling</b> replied to your comment on <b>Judia - Admin & Dashboards</b>
                                        </p>
                                    </div>
                                    <p className="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                        3 hrs ago
                                    </p>
                                </div>
                            </div>

                            <div className={`text-reset notification-item d-block dropdown-item position-relative ${clearNotification ? "" : "d-none"}`}>
                                <div className="d-flex gap-3">
                                    <div className="position-relative flex-shrink-0">
                                        <Image src={avatar2} className="avatar-xs rounded-circle" alt="Notification " />
                                        <span className="active-badge position-absolute start-100 translate-middle p-1 bg-success rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="fs-md mb-1 lh-base">Angela Bernier</h6>
                                        </Link>
                                        <p className="text-muted mb-0">Answered to your comment on the cash flow forecast's graph 🔔.</p>
                                    </div>
                                    <p className="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                        1 week ago
                                    </p>
                                </div>
                            </div>

                            <div className={`text-reset notification-item d-block dropdown-item position-relative ${clearNotification ? "" : "d-none"}`}>
                                <div className="d-flex gap-3">
                                    <div className="position-relative flex-shrink-0">
                                        <Image src={avatar3} className="avatar-xs rounded-circle" alt="Notification " />
                                        <span className="active-badge position-absolute start-100 translate-middle p-1 bg-warning rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <Link to="#!" className="stretched-link">
                                            <h6 className="fs-md mb-1 lh-base">Maureen Gibson</h6>
                                        </Link>
                                        <p className="text-muted mb-0">We talked about a project on LinkedIn.</p>
                                    </div>
                                    <p className="mb-0 fs-xs fw-medium flex-shrink-0 text-muted">
                                        2 weeks ago
                                    </p>
                                </div>
                            </div>
                        </SimpleBar>
                        <div className="notification-actions" id="notification-actions">
                            <div className="d-flex text-muted justify-content-center align-items-center">
                                Select <div id="select-content" className="text-body fw-semibold px-1">0</div> Result{' '}
                                <Button variant="a" className="link-danger p-0 ms-2" data-bs-toggle="modal" data-bs-target="#removeNotificationModal">
                                    Remove
                                </Button>
                            </div>
                        </div>
                        <div className="notification-actions" id="notification-actions">
                            <div className="d-flex text-muted justify-content-center align-items-center">
                                Select <div id="select-content" className="text-body fw-semibold px-1">0</div> Result{' '}
                                <Button variant="a" className="link-danger p-0 ms-2" data-bs-toggle="modal" data-bs-target="#removeNotificationModal">
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={`empty-notification-elem text-center px-4 ${clearNotification ? "d-none" : ""}`}>
                        <div className="mt-3 avatar-md mx-auto">
                            <div className="avatar-title bg-info-subtle text-info fs-24 rounded-circle"> <i className="bi bi-bell "></i> </div>
                        </div>
                        <div className="pb-3 mt-2">
                            <h6 className="fs-lg fw-semibold lh-base">Hey! You have no any notifications </h6>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    )
}

export default Notification