import React from 'react';
import { Layout } from '../src/components/Templates';
import { PageProvider } from '../src/components/Organisms';

const IndexPage = () => (
    <PageProvider>
        <Layout>Some kind of text</Layout>
    </PageProvider>
);

export default IndexPage;
