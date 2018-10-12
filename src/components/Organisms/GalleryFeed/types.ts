import { IFlickrPhotoSearchPhoto } from '../../../typings/iflickrApi';

export interface IInjectedProps {
    galleryFeed: IGalleryFeedProps['galleryFeed'];
    isFetching: IGalleryFeedState['isFetching'];
}

export interface IGalleryFeedProps {
    children: (data: IInjectedProps) => JSX.Element | string;
    tags?: string;
    text?: string;
    galleryFeed?: IFlickrPhotoSearchPhoto[];
}

export interface IGalleryFeedState {
    galleryFeed: IFlickrPhotoSearchPhoto[];
    isFetching: boolean;
}
