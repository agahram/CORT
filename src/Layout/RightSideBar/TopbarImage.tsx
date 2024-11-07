import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

interface Topbarimage {
    LAYOUT_TOPBAR_IMAGE: any;
    topbarImage: any;
    changeTopbarImage: any
}

const TopbarImage = ({LAYOUT_TOPBAR_IMAGE, topbarImage, changeTopbarImage}: Topbarimage) => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h6 className="mt-4 fs-md mb-1">Topbar Images</h6>
            <p className="text-muted fs-sm">Choose Topbar Images.</p>

            <Row>
                <Col xs={4}>
                    <input
                        className="form-check-input me-1"
                        type="radio"
                        name="data-topbar-image"
                        value={LAYOUT_TOPBAR_IMAGE.PATTERN1}
                        checked={topbarImage === LAYOUT_TOPBAR_IMAGE.PATTERN1}
                        onChange={e => {
                            if (e.target.checked) {
                                dispatch(changeTopbarImage(e.target.value));
                            }
                        }}
                        id="data-topbar-image-one" />

                    <label className="form-check-label" htmlFor="data-topbar-image-one">
                        One
                    </label>
                </Col>
                <Col xs={4}>
                    <input
                        className="form-check-input me-1"
                        type="radio"
                        name="data-topbar-image"
                        value={LAYOUT_TOPBAR_IMAGE.PATTERN2}
                        checked={topbarImage === LAYOUT_TOPBAR_IMAGE.PATTERN2}
                        onChange={e => {
                            if (e.target.checked) {
                                dispatch(changeTopbarImage(e.target.value));
                            }
                        }}
                        id="data-topbar-image-two" />

                    <label className="form-check-label" htmlFor="data-topbar-image-two">
                        Two
                    </label>
                </Col>
                <Col xs={4}>
                    <input
                        className="form-check-input me-1"
                        type="radio"
                        name="data-topbar-image"
                        value={LAYOUT_TOPBAR_IMAGE.PATTERN3}
                        checked={topbarImage === LAYOUT_TOPBAR_IMAGE.PATTERN3}
                        onChange={e => {
                            if (e.target.checked) {
                                dispatch(changeTopbarImage(e.target.value));
                            }
                        }}
                        id="data-topbar-image-three" />

                    <label className="form-check-label" htmlFor="data-topbar-image-three">
                        Three
                    </label>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default TopbarImage