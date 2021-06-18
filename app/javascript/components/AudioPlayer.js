import React from 'react'

class AudioPlayer extends React.Component {
  render() {
    let rootUrl = `public/uploads/event/background_music/${this.props.currentEvent.id}/`
    let audioUrl = this.props.currentEvent.background_music.url
    return (
      <div>
        <iframe
          className="background-music"
          width="100%"
          height="500"
          src={audioUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
        <audio id="player" autoPlay loop>
            <source src={audioUrl} />
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
