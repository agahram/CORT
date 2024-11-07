import React from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

interface LayoutThemeProps {
    LAYOUT_SIDEBAR: any,
    sidebarTheme: any,
    changeLayoutTheme: any
}

const LayoutColor = ({ LAYOUT_SIDEBAR, sidebarTheme, changeLayoutTheme }: LayoutThemeProps) => {

    const dispatch = useDispatch<any>()
    return (
        <React.Fragment>
            <h6 className="mt-4 mb-1 fs-md">Sidebar Color</h6>
            <p className="text-muted">Choose a color of Sidebar.</p>

            <Row className="row">
                <div className="col-4">
                    <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                        <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-light"
                            value={LAYOUT_SIDEBAR.SIDEBAR_LIGHT}
                            checked={sidebarTheme === LAYOUT_SIDEBAR.SIDEBAR_LIGHT}
                            onChange={(e: any) => {
                                if (e.target.checked) {
                                    dispatch(changeLayoutTheme(e.target.value))
                                }
                            }} />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-color-light">
                            <span className="d-flex gap-1 h-100">
                                <span className="flex-shrink-0">
                                    <span className="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                        <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                    </span>
                                </span>
                                <span className="flex-grow-1">
                                    <span className="d-flex h-100 flex-column">
                                        <span className="bg-light d-block p-1"></span>
                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </span>
                            </span>
                        </label>
                    </div>
                    <h5 className="fs-sm text-center mt-2">Light</h5>
                </div>
                <div className="col-4">
                    <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                        <input className="form-check-input" type="radio" name="data-sidebar" id="sidebar-color-dark"
                            value={LAYOUT_SIDEBAR.SIDEBAR_DARK}
                            checked={sidebarTheme === LAYOUT_SIDEBAR.SIDEBAR_DARK}
                            onChange={(e: any) => {
                                if (e.target.checked) {
                                    dispatch(changeLayoutTheme(e.target.value))
                                }
                            }} />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-color-dark">
                            <span className="d-flex gap-1 h-100">
                                <span className="flex-shrink-0">
                                    <span className="bg-primary d-flex h-100 flex-column gap-1 p-1">
                                        <span className="d-block p-1 px-2 bg-white bg-opacity-10 rounded mb-2"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-white bg-opacity-10"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-white bg-opacity-10"></span>
                                        <span className="d-block p-1 px-2 pb-0 bg-white bg-opacity-10"></span>
                                    </span>
                                </span>
                                <span className="flex-grow-1">
                                    <span className="d-flex h-100 flex-column">
                                        <span className="bg-light d-block p-1"></span>
                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </span>
                            </span>
                        </label>
                    </div>
                    <h5 className="fs-sm text-center mt-2">Dark</h5>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default LayoutColor;