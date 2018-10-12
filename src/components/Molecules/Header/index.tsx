import React from 'react';
import Link from 'next/link';
import { HeaderBar, Title, Ul, A } from './styles';

const Header = () => (
    <HeaderBar>
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
    </HeaderBar>
);

export default Header;
