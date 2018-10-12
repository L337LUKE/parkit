import React, { Fragment } from 'react';
import { GalleryFeed } from '../../Organisms';
import { CardGalleryList } from '../../Templates';
import { PageError } from '../../Atoms';

const SearchListing = ({ searchTerm }) => (
    <GalleryFeed tags={searchTerm}>
        {({ galleryFeed, isFetching, hasError }) => (
            <Fragment>
                {galleryFeed && !hasError ? (
                    <CardGalleryList
                        galleryItems={galleryFeed}
                        isFetching={isFetching}
                    />
                ) : (
                    <PageError />
                )}
            </Fragment>
        )}
    </GalleryFeed>
);

export default SearchListing;
