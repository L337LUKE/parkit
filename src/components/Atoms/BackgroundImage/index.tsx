import React, { SFC } from 'react';
import styled from 'styled-components';
import { IBackgroundImage, IStyleProps } from './types';

const StyledBackgroundImage = styled.div<IStyleProps>`
    background-image: url('${props => (props.url ? props.url : '')}');
    background-size: ${props => props.size};
    background-position: ${props => props.position};
    background-repeat: ${props => props.repeat};
`;

const BackgroundImage: SFC<IBackgroundImage> = ({
    ariaLabel,
    className,
    position,
    repeat,
    size,
    url
}) => (
    <StyledBackgroundImage
        aria-label={ariaLabel}
        className={className}
        position={position}
        repeat={repeat}
        role="img"
        size={size}
        url={url}
    />
);

BackgroundImage.defaultProps = {
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat'
};

export default BackgroundImage;
