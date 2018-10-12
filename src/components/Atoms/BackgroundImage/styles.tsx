import styled from 'styled-components';
import { IStyleProps } from './types';

export const StyledBackgroundImage = styled.div<IStyleProps>`
    background-image: url('${props => (props.url ? props.url : '')}');
    background-size: ${props => props.size};
    background-position: ${props => props.position};
    background-repeat: ${props => props.repeat};
`;
