import { Tag } from '../../Atoms';
import styled from 'styled-components';

export const StyledTag = styled(Tag)`
    margin-bottom: 0.357142857em;

    & + & {
        margin-left: 10px;
    }
`;

export const TagLine = styled.span`
    vertical-align: top;
    margin-right: 0.714285714em;
    font-size: 0.875em;
`;
