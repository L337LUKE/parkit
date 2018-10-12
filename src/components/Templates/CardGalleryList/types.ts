import { IFlickrPhotoSearchPhoto } from '../../../typings/iflickrApi';

export interface ICardGalleryList {
    galleryItems: IFlickrPhotoSearchPhoto[];
    isFetching: boolean;
}
