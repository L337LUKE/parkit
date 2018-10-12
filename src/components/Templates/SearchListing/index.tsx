import React, { Fragment } from 'react';
import { GalleryFeed } from '../../Organisms';
import { CardGalleryList } from '../../Templates';

const SearchListing = ({ searchTerm }) => (
    <GalleryFeed tags={searchTerm}>
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
);

export default SearchListing;
