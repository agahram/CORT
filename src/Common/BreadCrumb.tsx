import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import RightsideBar from 'Layout/RightSideBar';

import avatar7 from "assets/images/users/avatar-7.jpg";

interface BreadCrumbProps {
    title?: string;
    pageTitle?: string;
    isDetailbreadcrumb?: boolean;
    iscustombreadcrumb?: boolean;
    isVideo?: boolean;
    isNotesTitle?: boolean;
    isFile?: boolean;
    isAppOne?: boolean;
    isCustomizer?: boolean;
    isCalendarpage?: boolean;
    isSingleChat?: boolean;
    isVideoConference?: boolean;
    isMarketplace?: boolean;
    isInvoiceList?: boolean;
    isInvoiceOverview?: boolean;
    isNote?: boolean;
    isTodo?: boolean;
    isFileManager?: any;
    hideModal?: any;
    toggle?: any;
    handleClose?: () => void;
    handleModalClose?: any;
    searchUsers?: any;
    hideInvoiceModal?: any
    handeleModal?: any;
}
const BreadCrumb = ({
    hideModal,
    handleClose,
    toggle,
    title,
    pageTitle,
    isDetailbreadcrumb,
    iscustombreadcrumb,
    isVideo,
    isNotesTitle,
    isFile,
    isAppOne,
    isCustomizer,
    isCalendarpage,
    isSingleChat,
    isVideoConference,
    isMarketplace,
    isInvoiceList,
    isInvoiceOverview,
    isNote,
    isTodo,
    hideInvoiceModal,
    isFileManager,
    handleModalClose,
    handeleModal,
    searchUsers }: BreadCrumbProps) => {

    // VideoConference
    const [currentTime, setCurrentTime] = useState('');
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleString(undefined, {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true // Set this to true for 12-hour format
            }));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setCurrentDateTime(now.toLocaleString(undefined, {
                weekday: 'short', // Display the full name of the day (e.g., Monday, Tuesday)
                day: 'numeric', // Display day as a number (1-31)
                month: 'short', // Display the full name of the month (e.g., January, February)
            }));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <React.Fragment>
            <div className="page-title-box">
                {(iscustombreadcrumb || isDetailbreadcrumb || isVideo || isNotesTitle || isFile) && (
                    <Row className="align-items-center gy-3 d-flex">

                        {iscustombreadcrumb && (
                            <Col className='col-md'>

                                <h4>{title}</h4>

                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link to="#" className="text-reset">{pageTitle}</Link></li>
                                    <li className="breadcrumb-item active">{title}</li>
                                </ol>

                            </Col>
                        )}


                        {isDetailbreadcrumb && (
                            <Col className='col-md'>
                                <h3 className="page-title text-capitalize fw-medium fs-3xl">
                                    <span>Welcome</span> <b>Sophia Bethany</b> 👋
                                </h3>
                                <p className="mb-0 page-sub-title">
                                    You had completed 68% from your monthly level, keep going to your level.
                                </p>
                            </Col>
                        )}

                        {isVideo && (
                            <Col md={5}>
                                <h3 className="page-title text-capitalize fw-medium fs-3xl">Judia - Project Meeting with Jennifer</h3>
                                <p className="mb-0 page-sub-title" id="current-time">
                                    {currentTime} - {currentDateTime}
                                </p>
                            </Col>
                        )}

                        {isNotesTitle && (
                            <Col className="col-md">
                                <h5 className="page-title mb-0">Notes <span className="text-secondary">(246)</span></h5>
                            </Col>
                        )}

                        {isFile && (
                            <Col className="col-md">
                                <h3 className="page-title text-capitalize fw-medium fs-2xl"><span>Welcome</span> to MyFolder</h3>
                                <p className="mb-0 page-sub-title">Manage your files with best way by Judia</p>
                            </Col>
                        )}

                        {(isAppOne || isTodo) && (
                            <Col sm="auto" className="ms-auto">
                                {isAppOne && (
                                    <div className="hstack gap-2 flex-wrap">
                                        {(isCalendarpage || isSingleChat || isVideoConference || isMarketplace || isInvoiceList || isInvoiceOverview || isNote || isFileManager) && (
                                            <>
                                                {isCalendarpage && (
                                                    <>
                                                        <Button variant="primary" id="btn-new-event" onClick={toggle}>
                                                            <i className="bi bi-plus-lg me-1 align-baseline"></i> Create New Event
                                                        </Button>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                                {isSingleChat && (
                                                    <>
                                                        <div className="search-box">
                                                            <input type="text" id="search-user" className="form-control bg-light border-light" placeholder="Search here..." onKeyUp={searchUsers} />
                                                            <i className="ri-search-2-line search-icon"></i>
                                                        </div>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                                {isVideoConference && (
                                                    <>
                                                        <Button variant='secondary' data-bs-toggle="modal" data-bs-target="#inviteMembersModal" onClick={hideModal}>
                                                            <i className="bi bi-plus me-1 align-baseline"></i> Add Participant</Button>
                                                        <Link to="/apps-chat" className="btn btn-icon btn-danger"><i className="bi bi-chat-square-dots"></i></Link>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                                {isMarketplace && (
                                                    <>
                                                        <Button variant='primary' className="btn" onClick={handeleModal}><i className="bi bi-plus align-middle me-1"></i> Add Coin</Button>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                                {isInvoiceList && (
                                                    <>
                                                        <Button variant='secondary'  data-bs-toggle="modal" data-bs-target="#incoiceModal" onClick={hideInvoiceModal}><i className="bi bi-plus-circle align-baseline me-1"></i> Add Invoice</Button>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                                {isInvoiceOverview && (
                                                    <>
                                                        <Button as='a' href="#" variant='success' className="btn"><i className="ri-printer-line align-bottom me-1"></i> Print</Button>
                                                        <Button type="button" variant='primary'><i className="ri-download-2-line align-bottom me-1"></i> Download</Button>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                                {isNote && (
                                                    <>
                                                        <Button variant='primary' className="btn" data-bs-toggle="modal" data-bs-target="#addNewNote" onClick={handleModalClose}>Add New Note</Button>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                                {isFileManager && (
                                                    <>
                                                        <Button type="button" variant='primary' onClick={handleClose}>
                                                            <i className="bi bi-folder align-baseline me-1"></i> Create Folder</Button>
                                                        <RightsideBar />
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                )}

                                {isTodo && (
                                    <>
                                        <div className="d-flex flex-wrap gap-2">
                                            <Button type="button" className="btn btn-subtle-success btn-icon btn-sm todo-menu-btn d-lg-none">
                                                <i className="ri-menu-2-fill align-bottom"></i>
                                            </Button>
                                            <Link to="/pages-pricing" className="btn btn-secondary">Upgrade</Link>
                                            <Dropdown>
                                                <Dropdown.Toggle as="a" id="dropdown-basic" className='arrow-none'>
                                                    <img src={avatar7} alt="" height="39.19" width="39.19" className="rounded-circle" />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end p-1">
                                                    <Dropdown.Item as="a" href="/pages-profile">Profile</Dropdown.Item>
                                                    <Dropdown.Item as="a" href="/pages-profile">My Settings</Dropdown.Item>
                                                    <Dropdown.Item as="a" href="/pages-privacy-policy">Privacy Policy</Dropdown.Item>
                                                    <Dropdown.Item as="a" href="/auth-logout">Log Out</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <RightsideBar />
                                        </div>
                                    </>
                                )}
                            </Col>
                        )}

                        {isCustomizer && (
                            <Col className='col-md-auto ms-auto'>
                                <RightsideBar />
                            </Col>
                        )}

                    </Row>
                )}
            </div>

        </React.Fragment>
    );
};

export default BreadCrumb;