import { ProgressiveLoader } from '../../Atoms';
import styled from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;

    & + & {
        margin-top: 20px;
    }
`;

export const StyledLoadingBackgroundImage = styled(ProgressiveLoader)`
    height: 100%;
`;

export const StyledLoadingTitle = styled(ProgressiveLoader)`
    width: 55%;
    height: 20px;
`;

export const StyledLoadingAuthor = styled(ProgressiveLoader)`
    width: 40%;
    height: 20px;
    margin-left: 5%;
`;

export const StyledLoadingDescription = styled(ProgressiveLoader)`
    width: 100%;
    height: 10px;

    & + & {
        margin-top: 10px;
    }

    &:nth-of-type(1) {
        width: 70%;
    }

    &:nth-of-type(2) {
        width: 90%;
    }

    &:nth-of-type(3) {
        width: 65%;
    }
`;

export const StyledLoadingTag = styled(ProgressiveLoader)`
    flex: 0 1 ${100 / 3}%;
    height: 25px;

    & + & {
        margin-left: 10px;
    }
`;
