export interface IInjectedGallerySearchProps {
    searchTerm: IGallerySearchState['searchTerm'];
    searchValue: IGallerySearchState['searchValue'];
    handleChange(e?: React.ChangeEvent<HTMLInputElement>): void;
    handleSubmit(e?: React.FormEvent): void;
}

export interface IGallerySearchProps {
    children(data: IInjectedGallerySearchProps): JSX.Element;
}

export interface IGallerySearchState {
    searchTerm: string;
    searchValue: string;
}
