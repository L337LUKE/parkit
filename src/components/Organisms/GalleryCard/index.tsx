import React, { SFC } from 'react';
import styled from 'styled-components';
import { BackgroundImage, Box, IntrinsicRatio, LinkTag } from '../../Atoms';
import { TagGroup } from '../../Molecules';
import { hasHtml, truncate } from '../../../utils';
import { flickrDotCom } from '../../../config/url';
import { IGalleryCardProps } from './types';

const StyledCard = styled(Box)`
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    width: 100%;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: transform 6s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const StyledContent = styled(Box)`
    box-shadow: none;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
`;

const Title = styled.h3`
    font-size: 1em;
    font-weight: 700;
    display: inline-block;
    margin: 0;
    margin-right: 0.2em;
`;

const StyledLinkTag = styled(LinkTag)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
        color: ${props => props.theme.black};
    }
`;

const StyledBackgroundLinkTag = styled(LinkTag)`
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    line-height: 0;

    &:hover,
    &:active,
    &:focus {
        border-bottom: none;
    }
`;

const AuthorName = styled.p`
    display: inline-block;
    margin: 0;
`;

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
