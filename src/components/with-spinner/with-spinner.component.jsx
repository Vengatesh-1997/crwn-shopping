import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponnet => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) :
            (
                <WrappedComponnet {...otherProps} />
            );
    };
    return Spinner;
}

export default WithSpinner;