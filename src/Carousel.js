import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = [
      "http://placecorgi.com/600/600",
      "http://placecorgi.com/500/500"
    ];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              key={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
