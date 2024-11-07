import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

interface LayoutWidthProps {
    LAYOUT_WIDTH_TYPES: any;
    layoutWidthType: any;
    changeLayoutWidth: any,
    changeLayoutSize: any
}

const LayoutWidth = ({ LAYOUT_WIDTH_TYPES, layoutWidthType, changeLayoutWidth,changeLayoutSize }: LayoutWidthProps) => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div id="layout-width">
                <h6 className="mt-4 fs-md mb-1">Layout Width</h6>
                <p className="text-muted fs-sm">Choose Fluid or Boxed layout.</p>
                <Row>
                    <Col xs={4}>
                        <div className="form-check card-radio">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="data-layout-width"
                                id="layout-width-fluid"
                                value={LAYOUT_WIDTH_TYPES.FLUID}
                                checked={layoutWidthType === LAYOUT_WIDTH_TYPES.FLUID}
                                onChange={e => {
                                    if (e.target.checked) {
                                        dispatch(changeLayoutWidth(e.target.value));
                                        dispatch(changeLayoutSize("lg"))
                                    }
                                }}
                            />
                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="layout-width-fluid">
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
                        <h5 className="fs-sm text-center fw-medium mt-2">Fluid</h5>
                    </Col>
                    <Col xs={4}>
                        <div className="form-check card-radio">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="data-layout-width"
                                id="layout-width-boxed"
                                value={LAYOUT_WIDTH_TYPES.BOXED}
                                checked={layoutWidthType === LAYOUT_WIDTH_TYPES.BOXED}
                                onChange={e => {
                                    if (e.target.checked) {
                                        dispatch(changeLayoutWidth(e.target.value));
                                        dispatch(changeLayoutSize("sm-hover"))
                                    }
                                }}
                            />
                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="layout-width-boxed">
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
                        <h5 className="fs-sm text-center fw-medium mt-2">Boxed</h5>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default LayoutWidth