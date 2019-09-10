import React, { Component } from 'react';

import Moment from 'react-moment';
import 'moment-timezone';

import { Card } from 'react-bootstrap';

class SearchCard extends Component {
  render() {
    const { title, url, thumbnail, published } = this.props.result;
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Published: <Moment format="YYYY-MM-DD HH:mm">{published}</Moment>
              </Card.Text>
            </Card.Body>
          </a>
        </Card>
      </div>
    );
  }
}

export default SearchCard;
