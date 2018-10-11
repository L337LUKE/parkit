import jsonpP from 'jsonp-p';
import { FLICKR_API, FLICKR_KEY } from '../config/api';
import { IFlickrPhotoSearch } from '../typings/iflickrApi';

interface IPhotoSearch {
    tags?: string;
    per_page?: number;
    page?: number;
}

export const photoSearch = async ({
    tags = '',
    per_page = 12,
    page = 1
}: IPhotoSearch): Promise<IFlickrPhotoSearch> => {
    const urlParams = '&format=json'
        .concat('&privacy_filter=1')
        .concat('&safe_search=1')
        .concat('&content_type=6')
        .concat('&extras=description,owner_name,tags,url_m')
        .concat(`&tags=${tags ? tags : ''}`)
        .concat(`&api_key=${FLICKR_KEY}`)
        .concat(`&per_page=${per_page}`)
        .concat(`&page=${page}`);

    try {
        return await jsonpP(
            `${FLICKR_API}/rest/?method=flickr.photos.getRecent${urlParams}`,
            { name: 'jsonFlickrApi' }
        ).promise;
    } catch (error) {
        console.error(error);
    }
};
