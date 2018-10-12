import React, { SFC } from 'react';
import {
    FormContainer,
    StyledSubmit,
    StyledInput,
    StyledLabel
} from './styles';
import { ISearchForm } from './types';

const SearchForm: SFC<ISearchForm> = ({
    handleSubmit,
    handleChange,
    searchValue
}) => (
    <form onSubmit={handleSubmit}>
        <FormContainer>
            <StyledLabel id="formLabel" htmlFor="photoSearch">
                Search For Something...
            </StyledLabel>
            <StyledInput
                id="photoSearch"
                name="photoSearch"
                type="text"
                autoComplete="off"
                value={searchValue ? searchValue : ''}
                onChange={handleChange}
                aria-labelledby={'formLabel'}
            />

            <StyledSubmit type="submit" value="Submit" role="submit" />
        </FormContainer>
    </form>
);

export default SearchForm;
