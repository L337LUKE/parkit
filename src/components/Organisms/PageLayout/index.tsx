import React, { SFC, Fragment } from 'react';
import { IPageLayout } from './types';
import { SkipLink } from '../../Atoms';
import { Header, Footer } from '../../Molecules';

const PageLayout: SFC<IPageLayout> = ({ children }) => (
    <Fragment>
        <SkipLink id="#main" />
        <Header />
        <main id="main">{children && children}</main>
        <Footer />
    </Fragment>
);

export default PageLayout;
