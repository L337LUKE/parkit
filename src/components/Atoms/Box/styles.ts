import css from 'styled-jsx/css';
import { rgba } from 'polished';
import { colors, media } from '../../../theme';

export default css`
    .box {
        background-color: ${colors.white};
        box-shadow: 0 0 10px 3px ${rgba(colors.black, 0.2)};
        padding: 0.625em 0.9375em;
        transition: padding 150ms ease;
    }

    @media only screen and (min-width: ${media.small}) {
        .box {
            padding: 0.625em 1.5625em;
        }
    }
`;
