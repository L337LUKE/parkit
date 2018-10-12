import React, { SFC } from 'react';
import { IIntrinsicRatio } from './types';
import { OuterDiv, InnerDiv } from './styles';

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
