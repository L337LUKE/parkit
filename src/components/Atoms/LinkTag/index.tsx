import React, { SFC } from 'react';
import styled from 'styled-components';
import { ILinkOwnProps } from './types';

const LinkOwnStyles = `
    text-decoration: underline;
    transition: 150ms ease color;
    border: 1px solid transparent;
    white-space: nowrap;
`;

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

export default styled(LinkOwn)`
    ${LinkOwnStyles};
`;
