import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import TopBanner from './TopBanner';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('Youtube 2007');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term}
            });
        
        console.log(response);
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onChannelNameClick = async channelId => {
        const response = await youtube.get('/search', {
            params: {
                channelId: channelId
                }
            });

        console.log(response);
        
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
        <div className="ui container" style={{backgroundImage: `radial-gradient(white, #f1f1f1)`}}>
            <TopBanner />
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo} onChannelNameClick={this.onChannelNameClick} />
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;

// API key
// AIzaSyBMD8xa-7Fg2BWLqtzLDL-E6mzUHEUSBJ0