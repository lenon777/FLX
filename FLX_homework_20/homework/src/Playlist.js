import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Song } from './Song';
import { Filter } from './Filter';



class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isLoaded: false,
    };
    this.newData = this.newData.bind(this);
  }


  componentDidMount() {
    fetch('https://fl-homework-api.firebaseio.com/mozart.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          songs: json,
        });
      });
  }

  newData(value) {
    this.props.getSong(value);
  }

  render() {
    const { isLoaded, songs } = this.state;
    if (!isLoaded) {
      return (
        <p>Loading tracks...</p>
      );
    }
    return (
      <div className="playlist">
        <h2>Playlist</h2>
        <Filter/>
        <ul className="songs">
          { songs.map(song => (
            <li key={song.id}>
              <Song
                newData={this.newData}
                author={song.author}
                poster={song.poster}
                title={song.title}
                mp3={song.mp3}
              />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

Playlist.propTypes = {
getSong: PropTypes.func.isRequired,
};

export { Playlist };