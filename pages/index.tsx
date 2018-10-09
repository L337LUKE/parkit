import React from 'react';
import styled from 'styled-components';
import { CardGalleryList } from '../src/components/Templates';
import { PageLayout, PageProvider } from '../src/components/Organisms';
import { MaxWidthContainer } from '../src/components/Atoms';

const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    flex-flow: column wrap;
`;

const IndexPage = () => (
    <PageProvider>
        <PageLayout>
            <StyledMaxWidthContainer>
                <h2>Flickr Photo Stream</h2>
                <CardGalleryList />
            </StyledMaxWidthContainer>
        </PageLayout>
    </PageProvider>
);

export default IndexPage;
