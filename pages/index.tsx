import React from 'react';
import styled from 'styled-components';
import { CardGalleryList } from '../src/components/Templates';
import { GalleryFeed, PageProvider } from '../src/components/Organisms';
import { MaxWidthContainer } from '../src/components/Atoms';

const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    flex-flow: column wrap;
`;

const IndexPage = () => (
    <PageProvider>
        <StyledMaxWidthContainer>
            <h2>Latest Posts</h2>
            <GalleryFeed text="cars">
                {({ galleryFeed, isFetching }) => (
                    <CardGalleryList
                        galleryItems={galleryFeed}
                        isFetching={isFetching}
                    />
                )}
            </GalleryFeed>
        </StyledMaxWidthContainer>
    </PageProvider>
);

export default IndexPage;
