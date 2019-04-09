import React, { Component } from 'react';
import { Playlist } from './Playlist';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSong = this.getSong.bind(this);
  }

  getSong(value) {
    const {
      author, mp3, poster, title,
    } = value.props;
    this.setState({
      author,
      mp3,
      poster,
      title,
    });
  }

  render() {
    const {
      author, mp3, poster, title,
    } = this.state;
    return (
      <div className="wrapper">
        <div>
          <h2>Now playing</h2>
          <div className="player">
            <audio autoPlay src={mp3} />
            <div className="song-description">
              <img src={poster} alt="Mozart img " />
              <div className="author">{author}</div>
              <div className="name">{title}</div>
            </div>
            <div className="controls">
              <div className="progress">
                <div className="progress-line" />
              </div>
              <div className="buttons">
                <i className="material-icons prev">skip_previous</i>
                <i className="material-icons stop">play_arrow</i>
                <i className="material-icons next">skip_next</i>
              </div>
            </div>
          </div>
        </div>
        <Playlist getSong={this.getSong} />
      </div>
    );
  }
}


export { Player };