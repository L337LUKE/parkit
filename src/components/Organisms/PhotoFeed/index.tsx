import { Component } from 'react';
import { getPublicFeed } from '../../../services/flickr';

interface IInjectedProps {
    photoFeed: IPhotoFeedProps['photoFeed'];
}

interface IPhotoFeedProps {
    children: (data: IInjectedProps) => JSX.Element;
    photoFeed?: any[];
}

interface IPhotoFeedState {
    photoFeed: any[];
    isFetching: boolean;
}

class PhotoFeed extends Component<IPhotoFeedProps, IPhotoFeedState> {
    state = {
        photoFeed: [],
        isFetching: false
    };

    getPhotoFeed = async () => {
        this.setState(() => ({ isFetching: true }));
        // const { items } = await getPublicFeed();
        // this.setState(() => ({ photoFeed: items && items }));
    };

    componentDidMount() {
        this.getPhotoFeed();
    }

    getMethodsPropsState = () => {
        return {
            photoFeed: this.state.photoFeed,
            isFetching: this.state.isFetching
        };
    };

    render() {
        return this.props.children(this.getMethodsPropsState());
    }
}

export default PhotoFeed;
