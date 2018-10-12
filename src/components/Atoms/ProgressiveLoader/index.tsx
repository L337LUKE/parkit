import styled from 'styled-components';
import { shade, lighten } from 'polished';

const ProgressiveLoader = styled.div`
    @keyframes loadingAnimation {
        0% {
            background-color: ${props => lighten(0.1, props.theme.grey)};
        }

        50% {
            background-color: ${props => lighten(0.7, props.theme.grey)};
        }

        100% {
            background-color: ${props => lighten(0.1, props.theme.grey)};
        }
    }

    animation-duration: 100ms;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background-size: 1000px 10px;
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 50%;
        z-index: 1;
        width: 500%;
        margin-left: -250%;
        animation: loadingAnimation 0.8s linear infinite;
    }
`;

export default ProgressiveLoader;
