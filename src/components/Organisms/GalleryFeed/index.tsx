import { Component } from 'react';
import { photoSearch } from '../../../services/flickr';
import { IFlickrPhotoSearchPhoto } from '../../../typings/iflickrApi';

interface IInjectedProps {
    galleryFeed: IGalleryFeedProps['galleryFeed'];
    isFetching: IGalleryFeedState['isFetching'];
}

interface IGalleryFeedProps {
    children: (data: IInjectedProps) => JSX.Element | string;
    tags?: string;
    galleryFeed?: IFlickrPhotoSearchPhoto[];
}

interface IGalleryFeedState {
    galleryFeed: IFlickrPhotoSearchPhoto[];
    isFetching: boolean;
}

class GalleryFeed extends Component<IGalleryFeedProps, IGalleryFeedState> {
    state = {
        galleryFeed: [],
        isFetching: false
    };

    constructor(props) {
        super(props);
        this.getFeed = this.getFeed.bind(this);
    }

    async getFeed(): Promise<void> {
        const { tags } = this.props;

        this.setState(() => ({ isFetching: true }));

        try {
            await photoSearch({});

            const data = await photoSearch({
                tags: tags && tags
            });

            if (!data || data.photos.photo.length <= 0)
                throw new Error('no Data');

            this.setState(() => ({
                galleryFeed: data.photos.photo,
                isFetching: false
            }));
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getFeed();
    }

    getMethodsPropsState = (): IInjectedProps => ({
        galleryFeed: this.state.galleryFeed,
        isFetching: this.state.isFetching
    });

    render() {
        return this.props.children(this.getMethodsPropsState());
    }
}

export default GalleryFeed;
