import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MaxWidthContainer } from '../src/components/Atoms';
import {
    PageProvider,
    GallerySearch,
    SearchForm
} from '../src/components/Organisms';
import { SearchListing } from '../src/components/Templates';

const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    flex-flow: column wrap;
`;

const SearchContainer = styled.div`
    margin-top: 3.125em;
`;

const IndexPage = () => (
    <PageProvider>
        <StyledMaxWidthContainer>
            <h2>Search</h2>
            <GallerySearch>
                {({ searchTerm, searchValue, handleChange, handleSubmit }) => (
                    <Fragment>
                        <SearchForm
                            searchValue={searchValue}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                        />
                        {searchTerm && (
                            <SearchContainer>
                                <SearchListing searchTerm={searchTerm} />
                            </SearchContainer>
                        )}
                    </Fragment>
                )}
            </GallerySearch>
        </StyledMaxWidthContainer>
    </PageProvider>
);

export default IndexPage;
