import React, { SFC } from 'react';
import styled from 'styled-components';

interface ISkipLink {
    className?: string;
    id: string;
}

const SkipLink: SFC<ISkipLink> = ({ className, id }) => (
    <a href={id} className={className}>
        Skip to main content
    </a>
);

const StyledSkipLink = styled(SkipLink)`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
    font-size: 0.875rem;
    display: block;
    padding: 0.714285714em 1.071428571em;

    @media only screen and (min-width: ${props => props.theme.small}) {
        font-size: 1em;
        padding: 0.625em 1em;
    }

    &:focus {
        outline: 3px solid ${props => props.theme.maize};
        outline-offset: 0;
        background-color: ${props => props.theme.maize};
        position: static;
        width: auto;
        height: auto;
        margin: inherit;
        overflow: visible;
        clip: auto;
        clip-path: none;
        white-space: inherit;
    }
`;

export default StyledSkipLink;
