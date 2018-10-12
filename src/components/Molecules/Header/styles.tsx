import { LinkTag } from '../../Atoms';
import styled from 'styled-components';

export const HeaderBar = styled.header`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    padding: 0.625em 0.9375em;
    background-color: ${props => props.theme.turqoise};

    @media only screen and (min-width: ${props => props.theme.small}) {
        padding: 0.9375em 3.125em;
    }
`;

export const Title = styled.h1`
    font-size: 1.125em;
    font-weight: 700;
    border-bottom: 3px solid ${props => props.theme.white};
    color: ${props => props.theme.black};
    margin: 0;

    a {
        text-decoration: none;

        &:hover,
        &:visited,
        &:focus {
            color: ${props => props.theme.black};
        }
    }

    @media only screen and (min-width: ${props => props.theme.small}) {
        font-size: 1.414em;
    }
`;

export const Ul = styled.ul`
    flex: 1 0 auto;
    justify-self: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
    font-size: 0.875em;

    li {
        display: inline-block;
    }

    li + li {
        margin-left: 1.25em;
    }

    @media only screen and (min-width: ${props => props.theme.small}) {
        font-size: 1em;
    }
`;

export const A = styled(LinkTag)`
    && {
        color: ${props => props.theme.black};
        font-weight: 700;
    }
`;
