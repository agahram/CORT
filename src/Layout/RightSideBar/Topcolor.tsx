import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

interface TopbarColorProps {
    LAYOUT_TOPBAR_THEME_TYPES: any;
    topbarThemeType: any;
    changeTopbarTheme: any
}

const Topcolor = ({ LAYOUT_TOPBAR_THEME_TYPES, topbarThemeType, changeTopbarTheme }: TopbarColorProps) => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h6 className="mt-4 fs-md mb-1">Topbar Color</h6>
            <p className="text-muted fs-sm">Choose Light, Dark or Brand Topbar Color.</p>
            <Row>
                <Col xs={4}>
                    <div className="form-check card-radio">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="data-topbar"
                            id="topbar-color-light"
                            value={LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                            checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                            onChange={e => {
                                if (e.target.checked) {
                                    dispatch(changeTopbarTheme(e.target.value));
                                }
                            }}
                        />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-light">
                            <span className="d-flex h-100 flex-column gap-1">
                                <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                    <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                </span>
                                <span className="bg-light d-block p-1 mt-auto"></span>
                            </span>
                        </label>
                    </div>
                    <h5 className="fs-sm text-center fw-medium mt-2">Light</h5>
                </Col>
                <Col xs={4}>
                    <div className="form-check card-radio">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="data-topbar"
                            id="topbar-color-dark"
                            value={LAYOUT_TOPBAR_THEME_TYPES.DARK}
                            checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.DARK}
                            onChange={e => {
                                if (e.target.checked) {
                                    dispatch(changeTopbarTheme(e.target.value));
                                }
                            }}
                        />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-dark">
                            <span className="d-flex h-100 flex-column gap-1">
                                <span className="bg-dark d-flex p-1 gap-1 align-items-center">
                                    <span className="d-block p-1 bg-white bg-opacity-25 rounded me-1"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-white bg-opacity-25 ms-auto"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-white bg-opacity-25"></span>
                                </span>
                                <span className="bg-light d-block p-1 mt-auto"></span>
                            </span>
                        </label>
                    </div>
                    <h5 className="fs-sm text-center fw-medium mt-2">Dark</h5>
                </Col>
                <Col xs={4}>
                    <div className="form-check card-radio">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="data-topbar"
                            id="topbar-color-brand"
                            value={LAYOUT_TOPBAR_THEME_TYPES.BRAND}
                            checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.BRAND}
                            onChange={e => {
                                if (e.target.checked) {
                                    dispatch(changeTopbarTheme(e.target.value));
                                }
                            }}
                        />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-brand">
                            <span className="d-flex h-100 flex-column gap-1">
                                <span className="bg-primary d-flex p-1 gap-1 align-items-center">
                                    <span className="d-block p-1 bg-white bg-opacity-25 rounded me-1"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-white bg-opacity-25 ms-auto"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-white bg-opacity-25"></span>
                                </span>
                                <span className="bg-light d-block p-1 mt-auto"></span>
                            </span>
                        </label>
                    </div>
                    <h5 className="fs-sm text-center fw-medium mt-2">Brand</h5>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Topcolor