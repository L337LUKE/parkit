import React, { SFC } from 'react';
import styled from 'styled-components';
import { ICardGalleryList } from './types';
import { MaxWidthContainer } from '../../Atoms';
import { PhotoFeed } from '../../Organisms';

const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const CardGalleryList: SFC<ICardGalleryList> = () => (
    <MaxWidthContainer>
        <PhotoFeed>{photoFeed => <Ul />}</PhotoFeed>
    </MaxWidthContainer>
);

export default CardGalleryList;
