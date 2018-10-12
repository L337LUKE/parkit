import React, { SFC } from 'react';
import { IntrinsicRatio } from '../../Atoms';
import { TagGroup } from '../../Molecules';
import { hasHtml, truncate } from '../../../utils';
import { flickrDotCom } from '../../../config/url';
import { IGalleryCardProps } from './types';
import {
    StyledCard,
    StyledBackgroundImage,
    StyledContent,
    CardHeader,
    Title,
    StyledLinkTag,
    StyledBackgroundLinkTag,
    AuthorName
} from './styles';

const GalleryCard: SFC<IGalleryCardProps> = ({
    author,
    author_id,
    content,
    image_url,
    image_id,
    title,
    tags
}) => (
    <StyledCard>
        <IntrinsicRatio ratioWidth={1} ratioHeight={1}>
            <StyledBackgroundLinkTag
                openBlank={true}
                href={`${flickrDotCom}/photos/${author_id}/${image_id}`}
            >
                <StyledBackgroundImage
                    ariaLabel=""
                    url={image_url && image_url}
                />
            </StyledBackgroundLinkTag>
        </IntrinsicRatio>
        <StyledContent>
            <CardHeader>
                {author_id &&
                    image_id && (
                        <StyledLinkTag
                            href={`${flickrDotCom}/photos/${author_id}/${image_id}`}
                        >
                            <Title>{title ? title : 'Anonymous'}</Title>
                        </StyledLinkTag>
                    )}
                {author_id && (
                    <StyledLinkTag href={`${flickrDotCom}/people/${author_id}`}>
                        <span>{` by `}</span>
                        <AuthorName>{author && author}</AuthorName>
                    </StyledLinkTag>
                )}
            </CardHeader>
            {content && content.length > 0 ? (
                <p>{!hasHtml(content) ? `${truncate(content, 70)}...` : ''}</p>
            ) : null}
            {tags && (
                <TagGroup
                    tags={tags.split(' ').filter(val => val !== 'undefined')}
                />
            )}
        </StyledContent>
    </StyledCard>
);

export default GalleryCard;
