import styled from 'styled-components';
import { lighten, rgba } from 'polished';
import { ITag } from './types';

const Tag = styled.span<ITag>`
    border-radius: 30px;
    background-image: ${props =>
        `linear-gradient(to right bottom, ${
            props.theme.turqoise
        }, #88dac8, #b3e6d1, #d8f2e1, ${props.theme.cream})`};
    color: ${props => lighten(0.3, props.theme.black)};
    box-shadow: ${props => `0 0 5px 0 ${rgba(props.theme.black, 0.2)}`};
    padding: 4px 15px;
    font-weight: 700;
    font-size: 0.875em;
    user-select: none;
    transition: all 150ms ease;
    transform: scale(1), rotate(0deg);
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    a {
        text-decoration: none;
        color: inherit;
    }

    &:hover {
        transform: scale(1.1) rotate(-5deg);
    }
`;

export default Tag;
