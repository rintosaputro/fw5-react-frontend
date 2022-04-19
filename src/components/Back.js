/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { IoChevronBack } from 'react-icons/io5';

// eslint-disable-next-line react/prefer-stateless-function
export default class Back extends Component {
  render() {
    return (
      <div className="d-flex flex-row head">
        <a href="/more-detail.html" className="back d-flex mb-5">
          <IoChevronBack className="me-5" />
        </a>
        <span>{this.props.page}</span>
      </div>
    );
  }
}
