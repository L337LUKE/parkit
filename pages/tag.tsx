import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CardGalleryList } from '../src/components/Templates';
import { GalleryFeed, PageProvider } from '../src/components/Organisms';
import { MaxWidthContainer } from '../src/components/Atoms';

const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    flex-flow: column wrap;
`;

const TagPage = ({ query }) => (
    <PageProvider>
        <StyledMaxWidthContainer>
            <h2>Tag: {query && query.tag && query.tag}</h2>
            <GalleryFeed tags={query && query.tag && query.tag}>
                {({ galleryFeed, isFetching }) => (
                    <Fragment>
                        {galleryFeed && (
                            <CardGalleryList
                                galleryItems={galleryFeed}
                                isFetching={isFetching}
                            />
                        )}
                    </Fragment>
                )}
            </GalleryFeed>
        </StyledMaxWidthContainer>
    </PageProvider>
);

TagPage.getInitialProps = ({ query }) => ({ query });

export default TagPage;
