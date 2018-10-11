export interface IFlickrPhotoSearchPhoto {
    description: {
        _content: string;
    };
    farm: number;
    height_m: string;
    id: string;
    isfamily: number;
    isfriend: number;
    ispublic: number;
    owner: string;
    ownername: string;
    secret: string;
    server: string;
    tags: string;
    title: string;
    url_m: string;
    width_m: string;
}

export interface IFlickrPhotoSearchPhotos {
    page: number;
    pages: number;
    perPage: number;
    photo: IFlickrPhotoSearchPhoto[];
    total: number;
}

export interface IFlickrPhotoSearch {
    photos: IFlickrPhotoSearchPhotos;
    stat: string;
}
