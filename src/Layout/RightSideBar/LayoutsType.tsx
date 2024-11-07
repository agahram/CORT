import React from "react";
import { useDispatch } from "react-redux";

const LayoutsType = ({ LAYOUT_TYPES, layoutType, changeLayoutType }: any) => {

    const dispatch = useDispatch<any>();

    return (
        <React.Fragment>
            <h6 className="fs-md mb-1">Select Layouts</h6>
            <p className="text-muted fs-sm">Choose your layout.</p>

            <div className="row gy-3 mb-3">
                <div className="col-4">
                    <div className="form-check card-radio">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="data-layout"
                            id="customizer-layout01"
                            value={LAYOUT_TYPES.VERTICAL}
                            checked={layoutType === LAYOUT_TYPES.VERTICAL}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    dispatch(changeLayoutType(e.target.value))
                                }
                            }} />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout01">
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
                    <h5 className="fs-sm text-center mt-2">Vertical</h5>
                </div>
                <div className="col-4">
                    <div className="form-check card-radio">
                        <input
                            id="customizer-layout02"
                            name="data-layout"
                            type="radio"
                            className="form-check-input"
                            value={LAYOUT_TYPES.HORIZONTAL}
                            checked={layoutType === LAYOUT_TYPES.HORIZONTAL}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    dispatch(changeLayoutType(e.target.value))
                                }
                            }}
                        />
                        <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout02">
                            <span className="d-flex h-100 flex-column gap-1">
                                <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                    <span className="d-block p-1 bg-primary-subtle rounded me-1"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"></span>
                                    <span className="d-block p-1 pb-0 px-2 bg-primary-subtle"></span>
                                </span>
                                <span className="bg-light d-block p-1"></span>
                                <span className="bg-light d-block p-1 mt-auto"></span>
                            </span>
                        </label>
                    </div>
                    <h5 className="fs-sm text-center mt-2">Horizontal</h5>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LayoutsType;