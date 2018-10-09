import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 0.625em 0.9375em;

    @media only screen and (min-width: 36.25em) {
        padding: 0.625em 1.875em;
    }
`;

const Title = styled.h1`
    font-size: 1.414em;
    font-weight: 700;
    margin: 0;
`;

export default () => (
    <Header>
        <Title>Technical Test</Title>
    </Header>
);
