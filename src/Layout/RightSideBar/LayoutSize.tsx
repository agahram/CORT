import React from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

interface LayoutSizeProps {
    SIDEBAR_SIZE: any,
    layoutSize: any,
    changeLayoutSize: any
}

const LayoutSize = ({ SIDEBAR_SIZE, layoutSize, changeLayoutSize }: LayoutSizeProps) => {

    const dispatch = useDispatch<any>();
    return (
        <React.Fragment>
            <h6 className="mt-4 mb-1 fs-md">Sidebar Size</h6>
            <p className="text-muted">Choose a size of Sidebar.</p>

            <Row>
                <div className="col-4">
                    <div className="form-check sidebar-setting card-radio">
                        <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-default"
                            value={SIDEBAR_SIZE.LG}
                            checked={layoutSize === SIDEBAR_SIZE.LG}
                            onChange={(e: any) => {
                                if (e.target.checked) {
                                    dispatch(changeLayoutSize(e.target.value))
                                }
                            }} />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-default">
                            <span className="d-flex gap-1 h-100">
                                <span className="flex-shrink-0">
                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
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
                    <h5 className="fs-sm text-center mt-2">Default</h5>
                </div>

                <div className="col-4">
                    <div className="form-check sidebar-setting card-radio">
                        <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-compact"
                            value={SIDEBAR_SIZE.MD}
                            checked={layoutSize === SIDEBAR_SIZE.MD}
                            onChange={(e: any) => {
                                if (e.target.checked) {
                                    dispatch(changeLayoutSize(e.target.value))
                                }
                            }}
                        />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-compact">
                            <span className="d-flex gap-1 h-100">
                                <span className="flex-shrink-0">
                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                        <span className="d-block p-1 bg-primary-subtle rounded mb-2"></span>
                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
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
                    <h5 className="fs-sm text-center mt-2">Compact</h5>
                </div>

                <div className="col-4">
                    <div className="form-check sidebar-setting card-radio">
                        <input className="form-check-input" type="radio" name="data-sidebar-size" id="sidebar-size-small-hover"
                            value={SIDEBAR_SIZE.SM}
                            checked={layoutSize === SIDEBAR_SIZE.SM}
                            onChange={(e: any) => {
                                if (e.target.checked) {
                                    dispatch(changeLayoutSize(e.target.value))
                                }
                            }} />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-small-hover">
                            <span className="d-flex gap-1 h-100">
                                <span className="flex-shrink-0">
                                    <span className="bg-light d-flex h-100 flex-column gap-1">
                                        <span className="d-block p-1 bg-primary-subtle mb-2"></span>
                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
                                        <span className="d-block p-1 pb-0 bg-primary-subtle"></span>
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
                    <h5 className="fs-sm text-center mt-2">Small Hover View</h5>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default LayoutSize;