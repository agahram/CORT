import React, { useEffect } from 'react';
import withRouter from 'Common/withRouter';

//redux
import { useDispatch, useSelector } from "react-redux";

//import actions
import {
    // changeLayoutTheme,
    changeLayoutMode, changeTopbarTheme,
} from "slices/thunk";
import { createSelector } from 'reselect';

const NonAuthLayout = ({ children }: any) => {
    const dispatch: any = useDispatch();

    const nonauthData = createSelector(

        (state : any) => state.Layout,
        (layout) => ({
            layoutModeType: layout.layoutModeType,
            topbarThemeType: layout.topbarThemeType,
        })
      );
    // Inside your component
    const { layoutModeType, topbarThemeType } = useSelector(nonauthData);


    /*
    layout settings
    */
    useEffect(() => {
        if (

            layoutModeType ||
            topbarThemeType

        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLayoutMode(layoutModeType));
            dispatch(changeTopbarTheme(topbarThemeType));
        }
    }, [
        layoutModeType, topbarThemeType,
        dispatch]);


    return (
        <React.Fragment>
            <div>
                {children}
            </div>
        </React.Fragment>
    );
};

export default withRouter(NonAuthLayout);