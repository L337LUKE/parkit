import styled from 'styled-components';
import React, { SFC } from 'react';
import { complement } from 'polished';
import { ILinkOwnProps } from './types';

const LinkOwn: SFC<ILinkOwnProps> = ({
    children,
    className,
    href,
    openBlank,
    title
}) => (
    <a
        className={className}
        href={href && href}
        rel={`nofollow ${openBlank ? 'noopener' : ''}`}
        target={openBlank && '_blank'}
        title={title && title}
    >
        {children && children}
    </a>
);

export const StyledLinkOwn = styled(LinkOwn)`
    text-decoration: underline;
    transition: 150ms ease color;
    border: 1px solid transparent;
    white-space: nowrap;
    text-decoration: none;
    color: ${props => props.theme.turqoise};
    border-bottom: 1px dotted transparent;
    position: relative;
    transform: color 150ms ease border 150ms ease;

    &:hover,
    &:active,
    &:focus {
        color: ${props => complement(props.theme.turqoise)};
        border-bottom: 1px dotted ${props => props.theme.red};
    }
`;

export default StyledLinkOwn;
