import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

interface LayoutProps {
    LAYOUT_MODE_TYPES: any;
    layoutModeType: any;
    changeLayoutMode: any;
    changeTopbarTheme : any;
}

const ColorMode = ({ LAYOUT_MODE_TYPES, layoutModeType, changeLayoutMode, changeTopbarTheme }: LayoutProps) => {

    const dispatch = useDispatch();
    
    return (
        <React.Fragment>
            <h6 className="fs-md mb-1">Color Scheme</h6>
            <p className="text-muted fs-sm">Choose Light or Dark Scheme.</p>
            <div className="colorscheme-cardradio">
                <Row className="g-3">
                    <Col xs={4}>
                        <div className="form-check card-radio">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="data-bs-theme"
                                id="layout-mode-light"
                                value={LAYOUT_MODE_TYPES.LIGHTMODE}
                                checked={layoutModeType === LAYOUT_MODE_TYPES.LIGHTMODE}
                                onChange={e => {
                                    if (e.target.checked) {
                                        dispatch(changeLayoutMode(e.target.value));
                                        dispatch(changeTopbarTheme("dark"));
                                    }
                                }}
                            />
                            <label className="form-check-label p-3 bg-transparent text-center" htmlFor="layout-mode-light">
                                Light Mode
                            </label>
                        </div>
                        <h5 className="fs-sm text-center fw-medium mt-2">Light</h5>
                    </Col>
                    <Col xs={4}>
                        <div className="form-check card-radio dark">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="data-bs-theme"
                                id="layout-mode-dark"
                                value={LAYOUT_MODE_TYPES.DARKMODE}
                                checked={layoutModeType === LAYOUT_MODE_TYPES.DARKMODE}
                                onChange={e => {
                                    if (e.target.checked) {
                                        dispatch(changeLayoutMode(e.target.value));
                                    }
                                }}
                            />
                            <label className="form-check-label p-3 bg-dark text-white text-opacity-75 text-center" htmlFor="layout-mode-dark">
                                Dark Mode
                            </label>
                        </div>
                        <h5 className="fs-sm text-center fw-medium mt-2">Dark</h5>
                    </Col>
                    <Col xs={4}>
                        <div className="form-check card-radio brand">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="data-bs-theme"
                                id="layout-mode-brand"
                                value={LAYOUT_MODE_TYPES.BRANDMODE}
                                checked={layoutModeType === LAYOUT_MODE_TYPES.BRANDMODE}
                                onChange={e => {
                                    if (e.target.checked) {
                                        dispatch(changeLayoutMode(e.target.value));
                                    }
                                }}
                            />
                            <label className="form-check-label p-3 bg-primary text-white text-opacity-75 text-center" htmlFor="layout-mode-brand">
                                Brand Mode
                            </label>
                        </div>
                        <h5 className="fs-sm text-center fw-medium mt-2">Brand</h5>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ColorMode