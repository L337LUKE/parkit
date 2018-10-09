import axios from 'axios';
import { CORS_ANYWHERE, FLICKR_API } from '../config/api';

interface IFlickrPublicFeed {}

export const getPublicFeed = async () => {
    try {
        const response = await axios.get(
            `${CORS_ANYWHERE}/${FLICKR_API}/feeds/photos_public.gne?tagmode=any&format=json&nojsoncallback=1`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
