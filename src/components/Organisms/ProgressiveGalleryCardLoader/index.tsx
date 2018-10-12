import React from 'react';
import { IntrinsicRatio } from '../../Atoms';
import { StyledCard, StyledContent } from '../GalleryCard/styles';
import {
    FlexContainer,
    StyledLoadingBackgroundImage,
    StyledLoadingTitle,
    StyledLoadingAuthor,
    StyledLoadingDescription,
    StyledLoadingTag
} from './styles';

const ProgressiveGalleryCardLoader = () => (
    <StyledCard>
        <IntrinsicRatio ratioWidth={1} ratioHeight={1}>
            <StyledLoadingBackgroundImage />
        </IntrinsicRatio>
        <StyledContent>
            <FlexContainer>
                <StyledLoadingTitle />
                <StyledLoadingAuthor />
            </FlexContainer>
            <FlexContainer>
                <StyledLoadingDescription />
                <StyledLoadingDescription />
                <StyledLoadingDescription />
            </FlexContainer>
            <FlexContainer>
                <StyledLoadingTag />
                <StyledLoadingTag />
            </FlexContainer>
        </StyledContent>
    </StyledCard>
);

export default ProgressiveGalleryCardLoader;
