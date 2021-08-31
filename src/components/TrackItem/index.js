import {Component} from 'react'

import './index.css'

class TrackItem extends Component {
  render() {
    const {trackInfo} = this.props
    const {artist, name, description, source} = trackInfo
    return (
      <>
        <div className="track-details">
          <h1>Artist :- {artist}</h1>
          <p>
            <span className="span-element">Name :- </span>
            {name}
          </p>
          <p>
            <span className="span-element">Description :- </span>
            {description}
          </p>
        </div>
        <div className="similar-block">
          <p className="similar-heading">Similar Artists</p>
          <div className="similar-bg-container">
            <div className="similar-artist-block">
              <img
                className="similar-artist-img"
                alt="similar-artist"
                src="https://irshad-github.github.io/static/4.jpg"
              />
              <p>Grandson</p>
            </div>
            <div className="similar-artist-block">
              <img
                className="similar-artist-img"
                alt="similar-artist"
                src="https://irshad-github.github.io/static/5v.jpg"
              />
              <p>Bernos</p>
            </div>
            <div className="similar-artist-block">
              <img
                className="similar-artist-img"
                alt="similar-artist"
                src="https://irshad-github.github.io/static/3.jpg"
              />
              <p>Norm Ender</p>
            </div>
            <div className="similar-artist-block">
              <img
                className="similar-artist-img"
                alt="similar-artist"
                src="https://irshad-github.github.io/static/1.jpeg"
              />
              <p>The Stark Palace</p>
            </div>
          </div>
        </div>
        <div className="audio-controls-block">
          <audio controls src={source}>
            <track default kind="captions" src={source} />
            {description}
          </audio>
        </div>
      </>
    )
  }
}
export default TrackItem
