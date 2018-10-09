import styled from 'styled-components';
import { rgba } from 'polished';
import { colors, media } from '../../../theme';
import { IBoxProps } from './types';

export default styled.div<IBoxProps>`
    background-color: ${colors.white};
    box-shadow: 0 0 10px 3px ${rgba(colors.black, 0.2)};
    padding: 0.625em 0.9375em;
    transition: padding 150ms ease;

    @media only screen and (min-width: ${media.small}) {
        .box {
            padding: 0.625em 1.5625em;
        }
    }
`;
