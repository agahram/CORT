import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

interface PrealoaderProps {
    PERLOADER_TYPES: any;
    preloader: any;
    changePreLoader: any
}

const Preloader = ({ PERLOADER_TYPES, preloader, changePreLoader }: PrealoaderProps) => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div id="preloader-menu">
                <h6 className="mt-4 fw-semibold fs-base">Preloader</h6>
                <p className="text-muted fs-sm">Choose a preloader.</p>
                <Row>
                    <Col xs={4}>
                        <div className="form-check sidebar-setting card-radio">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="data-preloader"
                                id="preloader-view-custom"
                                value={PERLOADER_TYPES.ENABLE}
                                checked={preloader === PERLOADER_TYPES.ENABLE}
                                onChange={e => {
                                    if (e.target.checked) {
                                        dispatch(changePreLoader(e.target.value));
                                    }
                                }}
                            />
                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="preloader-view-custom">
                                <span className="d-flex h-100 flex-column gap-1">
                                    <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                        <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                    </span>
                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                </span>
                                <span className="d-flex align-items-center justify-content-center">
                                    <span className="spinner-border text-primary avatar-xxs m-auto" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </span>
                                </span>
                            </label>
                        </div>
                        <h5 className="fs-sm text-center fw-medium mt-2">Enable</h5>
                    </Col>
                    <Col xs={4}>
                        <div className="form-check sidebar-setting card-radio">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="data-preloader"
                                id="preloader-view-none"
                                value={PERLOADER_TYPES.DISABLE}
                                checked={preloader === PERLOADER_TYPES.DISABLE}
                                onChange={e => {
                                    if (e.target.checked) {
                                        dispatch(changePreLoader(e.target.value));
                                    }
                                }}
                            />
                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="preloader-view-none">
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
                        <h5 className="fs-sm text-center fw-medium mt-2">Disable</h5>
                    </Col>
                </Row>

            </div>
        </React.Fragment>
    )
}

export default Preloader