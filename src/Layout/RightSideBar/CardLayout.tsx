import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

interface CardLayoutType {
    LAYOUT_CARD: any;
    cardlayout: any;
    changeCardLayout: any
}

const CardLayout = ({ LAYOUT_CARD, cardlayout, changeCardLayout }: CardLayoutType) => {

    const dispatch = useDispatch();
    
    return (
        <React.Fragment>
            <Col xs={12}>
                <div id="data-card-layout">
                    <h6 className="mt-4 fs-md mb-1">Card Layout</h6>
                    <p className="text-muted fs-sm">Choose borderless or border layout.</p>

                    <Row>
                        <Col xs={4}>
                            <div className="form-check card-radio">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="data-card-layout"
                                    id="data-card-layout-borderless"
                                    value={LAYOUT_CARD.BORDERLESS}
                                    checked={cardlayout === LAYOUT_CARD.BORDERLESS}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            dispatch(changeCardLayout(e.target.value));
                                        }
                                    }}
                                />
                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="data-card-layout-borderless">
                                    <span className="d-flex h-100 flex-column gap-1 bg-light bg-opacity-50">
                                        <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span className="d-flex gap-2 justify-content-center px-1">
                                            <span className="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                            <span className="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                            <span className="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                            <span className="d-block px-2 py-3 bg-body-secondary rounded-1"></span>
                                        </span>
                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 className="fs-sm text-center fw-medium mt-2">Borderless</h5>
                        </Col>
                        <Col xs={4}>
                            <div className="form-check card-radio">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="data-card-layout"
                                    id="data-card-layout-border"
                                    value={LAYOUT_CARD.BORDER}
                                    checked={cardlayout === LAYOUT_CARD.BORDER}
                                    onChange={e => {
                                        if (e.target.checked) {
                                            dispatch(changeCardLayout(e.target.value));
                                        }
                                    }}
                                />
                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="data-card-layout-border">
                                    <span className="d-flex h-100 flex-column gap-1">
                                        <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                            <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                            <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                            <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                        </span>
                                        <span className="d-flex gap-2 justify-content-center px-1">
                                            <span className="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                            <span className="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                            <span className="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                            <span className="d-block px-2 py-3 bg-body-secondary border rounded-1"></span>
                                        </span>
                                        <span className="bg-light d-block p-1 mt-auto"></span>
                                    </span>
                                </label>
                            </div>
                            <h5 className="fs-sm text-center fw-medium mt-2">Border</h5>
                        </Col>
                    </Row>
                </div>
            </Col>
        </React.Fragment>
    )
}

export default CardLayout