import React, { SFC } from 'react';
import styled from 'styled-components';
import { ICardGalleryList } from './types';
import { media } from '../../../theme';
import { GalleryCard } from '../../Organisms';

const Ul = styled.ul`
    padding: 0;
    list-style: none;
    margin: 0;

    @media only screen and (min-width: ${media.small}) {
        margin-left: -1.25rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
`;

const Li = styled.li`
    display: flex;
    margin-bottom: 1.875em;

    @media only screen and (min-width: ${media.small}) {
        min-width: 48%;
        margin-left: 2%;
        flex: 1;
    }

    @media only screen and (min-width: ${media.medium}) {
        min-width: 23%;
        margin-left: 1.25rem;
        margin-bottom: 3.125em;
    }
`;

const CardGalleryList: SFC<ICardGalleryList> = ({ galleryItems }) => (
    <Ul>
        {galleryItems &&
            galleryItems.map((item, index) => (
                <Li key={`${item.author_id}${index}`}>
                    <GalleryCard
                        author={item.ownername}
                        author_id={item.owner}
                        content={item.description._content}
                        title={item.title}
                        image_url={item.url_m}
                        image_id={item.id}
                        tags={item.tags}
                    />
                </Li>
            ))}
    </Ul>
);

export default CardGalleryList;
