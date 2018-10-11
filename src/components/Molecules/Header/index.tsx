import React from 'react';
import Link from 'next/link';
import { LinkTag } from '../../Atoms';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    padding: 0.625em 0.9375em;
    background-color: ${props => props.theme.turqoise};
    @media only screen and (min-width: 36.25em) {
        padding: 0.9375em 3.125em;
    }
`;

const Title = styled.h1`
    font-size: 1.414em;
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
`;

const Ul = styled.ul`
    flex: 1 0 auto;
    justify-self: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;

    li {
        display: inline-block;
    }

    li + li {
        margin-left: 1.25em;
    }
`;

const A = styled(LinkTag)`
    color: black;
    font-weight: 700;
`;

export default () => (
    <Header>
        <Title>
            <Link href="/">
                <a>Technical Test</a>
            </Link>
        </Title>
        <Ul>
            <li>
                <Link href="/" passHref>
                    <A>Latest</A>
                </Link>
            </li>
            <li>
                <Link href="/search" passHref>
                    <A>Search</A>
                </Link>
            </li>
        </Ul>
    </Header>
);
