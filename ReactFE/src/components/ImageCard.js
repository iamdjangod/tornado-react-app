import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const imageHeight = this.imageRef.current.clientHeight;
    const imageSpans = Math.ceil(imageHeight / 10);
    this.setState({
      spans: imageSpans
    });
  };

  render() {
    const { id, description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          key={id}
          src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;
