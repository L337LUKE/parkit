import React, { SFC } from 'react';
import { IBackgroundImage } from './types';
import { StyledBackgroundImage } from './styles';

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
