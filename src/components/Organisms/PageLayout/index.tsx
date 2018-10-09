import React, { SFC, Fragment } from 'react';
import { IPageLayout } from './types';
import { Header, Footer } from '../../Molecules';

const PageLayout: SFC<IPageLayout> = ({ children }) => (
    <Fragment>
        <Header />
        <main>{children && children}</main>
        <Footer />
    </Fragment>
);

export default PageLayout;
