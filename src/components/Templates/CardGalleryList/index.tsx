import React, { SFC } from 'react';
import styled from 'styled-components';
import { ICardGalleryList } from './types';
import { GalleryFeed } from '../../Organisms';

const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    margin: 0;
`;

const CardGalleryList: SFC<ICardGalleryList> = () => (
    <GalleryFeed>
        {({ galleryFeed, isFetching }) => (
            <Ul>
                <li>
                    <p>hello</p>
                </li>
            </Ul>
        )}
    </GalleryFeed>
);

export default CardGalleryList;
