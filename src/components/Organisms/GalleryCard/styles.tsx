import styled from 'styled-components';
import { BackgroundImage, Box, LinkTag } from '../../Atoms';

export const StyledCard = styled(Box)`
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    width: 100%;
`;

export const StyledBackgroundImage = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: transform 6s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const StyledContent = styled(Box)`
    box-shadow: none;
    min-height: 9.375em;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
`;

export const Title = styled.h3`
    font-size: 1em;
    font-weight: 700;
    display: inline-block;
    margin: 0;
    margin-right: 0.2em;
`;

export const StyledLinkTag = styled(LinkTag)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
        color: ${props => props.theme.black};
    }
`;

export const StyledBackgroundLinkTag = styled(LinkTag)`
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

export const AuthorName = styled.p`
    display: inline-block;
    margin: 0;
`;
