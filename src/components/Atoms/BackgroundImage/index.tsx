import React from 'react';
import styled from 'styled-components';

interface IBackgroundImage {
    url: string;
    size?: React.CSSProperties['backgroundSize'];
    position?: React.CSSProperties['backgroundPosition'];
    repeat?: React.CSSProperties['backgroundRepeat'];
}

const BackgroundImage = styled.div<IBackgroundImage>`
    background-image: url('${props => (props.url ? props.url : '')}');
    background-size: ${props => props.size};
    background-position: ${props => props.position};
    background-repeat: ${props => props.repeat};
`;

BackgroundImage.defaultProps = {
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat'
};

export default BackgroundImage;
