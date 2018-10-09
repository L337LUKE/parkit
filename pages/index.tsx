import React from 'react';
import { CardGalleryList } from '../src/components/Templates';
import { PageLayout, PageProvider } from '../src/components/Organisms';
import { MaxWidthContainer } from '../src/components/Atoms';

const IndexPage = () => (
    <PageProvider>
        <PageLayout>
            <MaxWidthContainer>
                <h2>Flickr Photo Stream</h2>
                <CardGalleryList />
            </MaxWidthContainer>
        </PageLayout>
    </PageProvider>
);

export default IndexPage;
