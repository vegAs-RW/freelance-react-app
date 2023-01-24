import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const ErrorWrapper = styled.div`
        margin: 30px;   
        display: flex;
        flex-direction: column;
        background-color: ${colors.backgroundLight};
        align-items: center;
`

const ErrorTitle = styled.h1`
    font-weight: 300;
`

const ErrorSubtitle = styled.h2`
        font-weight: 300;
        color: ${colors.secondary};
`
const Illustration = styled.img`
    max-width: 800px;
`

const Error = () => {
    return (
        <ErrorWrapper>
            <ErrorTitle>Ooups ...</ErrorTitle>
            <Illustration src='https://github.com/atoulmet/assets/blob/master/404.svg?raw=true' />
            <ErrorSubtitle>
                La page que vous recherchez n'existe pas
            </ErrorSubtitle>
        </ErrorWrapper>
    );
};

export default Error;