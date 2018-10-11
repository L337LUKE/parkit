import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CardGalleryList } from '../src/components/Templates';
import {
    GalleryFeed,
    PageLayout,
    PageProvider
} from '../src/components/Organisms';
import { MaxWidthContainer } from '../src/components/Atoms';

const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    flex-flow: column wrap;
`;

const TagPage = ({ query }) => (
    <PageProvider>
        <PageLayout>
            <StyledMaxWidthContainer>
                <h2>Tag: {query && query.tag && query.tag}</h2>
                <GalleryFeed tags={query && query.tag && query.tag}>
                    {({ galleryFeed }) => (
                        <Fragment>
                            {galleryFeed && (
                                <CardGalleryList galleryItems={galleryFeed} />
                            )}
                        </Fragment>
                    )}
                </GalleryFeed>
            </StyledMaxWidthContainer>
        </PageLayout>
    </PageProvider>
);

TagPage.getInitialProps = ({ query }) => ({ query });

export default TagPage;
