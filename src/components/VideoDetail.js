import React from 'react';

const VideoDetail = ({ video, onChannelNameClick }) => {

    if(!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video-player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header" dangerouslySetInnerHTML={{__html: video.snippet.title}}></h4>
                <div dangerouslySetInnerHTML={{__html: video.snippet.description}} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">From {video.snippet.channelTitle}</h4>
                <p onClick={()=> onChannelNameClick(video.snippet.channelId)} style={{cursor: 'pointer', color: '#06bcf9'}}>More from {video.snippet.channelTitle}</p>
            </div>
        </div>
    );
}

export default VideoDetail;