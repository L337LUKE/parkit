import { Component } from 'react';
import { photoSearch } from '../../../services/flickr';
import { IInjectedProps, IGalleryFeedProps, IGalleryFeedState } from './types';

class GalleryFeed extends Component<IGalleryFeedProps, IGalleryFeedState> {
    state = {
        galleryFeed: [],
        isFetching: false,
        hasError: false
    };

    getFeed = async ({
        tags,
        text
    }: {
        tags?: string;
        text?: string;
    }): Promise<void> => {
        this.setState(() => ({ isFetching: true, hasError: false }));
        try {
            const data = await photoSearch({
                tags: tags && tags,
                text: text && text
            });

            if (!data || data.photos.photo.length <= 0)
                throw new Error('no Data');

            this.setState(() => ({
                galleryFeed: data.photos.photo,
                isFetching: false
            }));
        } catch (error) {
            this.setState({
                isFetching: false,
                hasError: true
            });
        }
    };

    componentDidUpdate(prevProps) {
        if (this.props.text !== prevProps.text && !this.state.isFetching) {
            this.getFeed({
                text: this.props.text
            });
        }

        if (this.props.tags !== prevProps.tags && !this.state.isFetching) {
            this.getFeed({
                tags: this.props.tags
            });
        }
    }

    componentDidMount() {
        this.getFeed({
            tags: this.props.tags,
            text: this.props.text
        });
    }

    getMethodsPropsState = (): IInjectedProps => ({
        galleryFeed: this.state.galleryFeed,
        isFetching: this.state.isFetching,
        hasError: this.state.hasError
    });

    render() {
        return this.props.children(this.getMethodsPropsState());
    }
}

export default GalleryFeed;
