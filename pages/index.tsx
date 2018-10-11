import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CardGalleryList } from '../src/components/Templates';
import {
    GalleryFeed,
    PageLayout,
    PageProvider
} from '../src/components/Organisms';
import { MaxWidthContainer, ErrorPhotos } from '../src/components/Atoms';

const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    flex-flow: column wrap;
`;

const IndexPage = () => (
    <PageProvider>
        <PageLayout>
            <StyledMaxWidthContainer>
                <h2>Latest Posts</h2>
                <GalleryFeed>
                    {({ galleryFeed, isFetching }) => (
                        <Fragment>
                            {isFetching ? (
                                <p>Loading...</p>
                            ) : (
                                galleryFeed && (
                                    <CardGalleryList
                                        galleryItems={galleryFeed}
                                    />
                                )
                            )}
                        </Fragment>
                    )}
                </GalleryFeed>
            </StyledMaxWidthContainer>
        </PageLayout>
    </PageProvider>
);

export default IndexPage;
