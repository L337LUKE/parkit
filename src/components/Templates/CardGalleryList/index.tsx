import React, { Fragment, SFC } from 'react';
import { ICardGalleryList } from './types';
import { GalleryCard, ProgressiveGalleryCardLoader } from '../../Organisms';
import { Ul, Li } from './styles';

const CardGalleryList: SFC<ICardGalleryList> = ({
    galleryItems,
    isFetching
}) => {
    if (!galleryItems || galleryItems.length <= 0) return <Fragment />;

    return (
        <Ul>
            {isFetching ? (
                <Fragment>
                    {Array.from({ length: 8 }, (_item, index) => (
                        <Li key={`${index}-prog-gall-loader`}>
                            <ProgressiveGalleryCardLoader />
                        </Li>
                    ))}
                </Fragment>
            ) : (
                <Fragment>
                    {galleryItems.map((item, index) => (
                        <Fragment key={`${item.owner}${index}`}>
                            {item.url_m && (
                                <Li>
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
                            )}
                        </Fragment>
                    ))}
                </Fragment>
            )}
        </Ul>
    );
};

export default CardGalleryList;
