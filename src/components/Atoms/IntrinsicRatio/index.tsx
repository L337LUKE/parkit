import React, { SFC } from 'react';
import render from 'react-dom';
import styled from 'styled-components';
import { compose, toPercentage, toRatio } from '../../../utils';

interface IRatio {
    ratioWidth: number;
    ratioHeight: number;
}

type IIntrinsicRatio = IRatio & {
    children: JSX.Element;
};

const OuterDiv = styled.div<IRatio>`
    position: relative;
    height: 0;
    overflow: hidden;
    padding-top: ${props =>
        compose(
            toPercentage,
            toRatio
        )(props.ratioWidth || 1, props.ratioHeight || 1)};
`;

const InnerDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const IntrinsicRatio: SFC<IIntrinsicRatio> = ({
    children,
    ratioWidth,
    ratioHeight
}) => (
    <OuterDiv ratioWidth={ratioWidth} ratioHeight={ratioHeight}>
        <InnerDiv>{children && children}</InnerDiv>
    </OuterDiv>
);

export default IntrinsicRatio;
