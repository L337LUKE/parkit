import { Component } from 'react';
import { getPublicFeed } from '../../../services/flickr';

interface IInjectedProps {
    galleryFeed: IGalleryFeedProps['galleryFeed'];
    isFetching: IGalleryFeedState['isFetching'];
}

interface IGalleryFeedProps {
    children: (data: IInjectedProps) => JSX.Element | string;
    galleryFeed?: any[];
}

interface IGalleryFeedState {
    galleryFeed: any[];
    isFetching: boolean;
}

class GalleryFeed extends Component<IGalleryFeedProps, IGalleryFeedState> {
    state = {
        galleryFeed: [],
        isFetching: false
    };

    getFeed = async (): Promise<void> => {
        this.setState(() => ({ isFetching: true }));
        // const { items } = await getPublicFeed();
        // this.setState(() => ({ galleryFeed: items && items }));
    };

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
