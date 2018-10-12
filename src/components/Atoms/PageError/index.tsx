import React from 'react';
import { PageContainer } from './styles';

const PageError = () => (
    <PageContainer>
        <h2>Oops...</h2>
        <p>
            Your search returned no results or something has gone wrong. Please
            try again
        </p>
    </PageContainer>
);

export default PageError;
