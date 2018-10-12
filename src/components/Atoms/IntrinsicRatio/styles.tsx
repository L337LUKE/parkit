import styled from 'styled-components';
import { IRatio } from './types';
import { compose, toPercentage, toRatio } from '../../../utils';

export const OuterDiv = styled.div<IRatio>`
    position: relative;
    height: 0;
    overflow: hidden;
    padding-top: ${props =>
        compose(
            toPercentage,
            toRatio
        )(props.ratioWidth || 1, props.ratioHeight || 1)};
`;

export const InnerDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
