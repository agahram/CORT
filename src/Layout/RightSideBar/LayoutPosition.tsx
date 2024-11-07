import React from 'react'
import { useDispatch } from 'react-redux';

interface PositionProps {
    LAYOUT_POSITION_TYPES: any;
    layoutPositionType: any;
    changeLayoutPosition: any
}

const LayoutPosition = ({ LAYOUT_POSITION_TYPES, layoutPositionType, changeLayoutPosition }: PositionProps) => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div id="layout-position">
                <h6 className="mt-4 fs-md mb-1">Layout Position</h6>
                <p className="text-muted fs-sm">Choose Fixed or Scrollable Layout Position.</p>
                <div className="btn-group radio" role="group">
                    <input
                        type="radio"
                        className="btn-check"
                        name="data-layout-position"
                        id="layout-position-fixed"
                        value={LAYOUT_POSITION_TYPES.FIXED}
                        checked={layoutPositionType === LAYOUT_POSITION_TYPES.FIXED}
                        onChange={e => {
                            if (e.target.checked) {
                                dispatch(changeLayoutPosition(e.target.value));
                            }
                        }}
                    />
                    <label className="btn btn-light w-sm" htmlFor="layout-position-fixed">Fixed</label>
                    <input
                        type="radio"
                        className="btn-check"
                        name="data-layout-position"
                        id="layout-position-scrollable"
                        value={LAYOUT_POSITION_TYPES.SCROLLABLE}
                        checked={layoutPositionType === LAYOUT_POSITION_TYPES.SCROLLABLE}
                        onChange={e => {
                            if (e.target.checked) {
                                dispatch(changeLayoutPosition(e.target.value));
                            }
                        }}
                    />
                    <label className="btn btn-light w-sm ms-0" htmlFor="layout-position-scrollable">Scrollable</label>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LayoutPosition