import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      author: this.props.author,
      title: this.props.title,
      isPlaying: false,
    };
  }

  isFavotire() {
    this.setState(prevstate => ({
      isFavorite: !prevstate.isFavorite,
    }));
  }

  handleIsPlaying() {
    this.setState(prevstate => ({
      isPlaying: !prevstate.isPlaying,
    }));
  }

  render() {
    const {
      isFavorite, author, title, isPlaying,
    } = this.state;
    return (
      <div role="button" className="song" onClick={() => { this.props.newData(this); }}>
        <i role="button"  onClick={this.handleIsPlaying.bind(this)} className="material-icons">{ isPlaying ? 'pause' : 'play_arrow' }</i>
        <div className="description">
          <span className="description-title">{ title }</span>
          <span className="description-author">{ author }</span>
        </div>
        <button type="button" onClick={this.isFavotire.bind(this)} className="material-icons isFavorite">{ isFavorite ? 'favorite' : 'favorite_border'}</button>
      </div>
    );
  }
}

Song.propTypes = {
  newData: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { Song };