import React, { PureComponent } from 'react';
import {
    IInjectedGallerySearchProps,
    IGallerySearchProps,
    IGallerySearchState
} from './types';

class SearchFormController extends PureComponent<
    IGallerySearchProps,
    IGallerySearchState
> {
    state = {
        searchTerm: null,
        searchValue: null
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            searchValue: e.target.value
        });
    }

    handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        this.setState({
            searchTerm: this.state.searchValue
        });
    }

    getStatePropsAndMethods = (): IInjectedGallerySearchProps => ({
        searchTerm: this.state.searchTerm,
        searchValue: this.state.searchValue,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
    })

    render() {
        return this.props.children(this.getStatePropsAndMethods());
    }
}

export default SearchFormController;
