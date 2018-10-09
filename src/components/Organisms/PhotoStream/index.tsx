import React, { Fragment } from 'react';
import { PhotoFeed } from '../';
import { LinkTag } from '../../Atoms';

const PhotoStream = () => (
    <PhotoFeed>
        {photoFeed => (
            <Fragment>
                <LinkTag href="https://example.com">click here</LinkTag>
            </Fragment>
        )}
    </PhotoFeed>
);

// items.map(item => (
//     <PhotoGalleryCard />
// ))

export default PhotoStream;
