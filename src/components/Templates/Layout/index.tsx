import React, { SFC, Fragment } from 'react';
import styles from './styles';
import { Header, Footer } from '../../Molecules';

interface IMainProps {
    children: (JSX.Element | string)[] | JSX.Element | string;
}

const Layout: SFC<IMainProps> = ({ children }) => (
    <Fragment>
        <Header />
        <main>{children && children}</main>
        <Footer />
    </Fragment>
);

export default Layout;
