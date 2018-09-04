import React, { Component } from 'react';

import { First } from '../components';

class Main extends Component {
  state = {
    page: 0,
  };

  nextPage = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  previousPage = (e) => {
    const { page } = this.state;
    this.setState({
      page: page - 1,
    });
    e.preventDefault();
    return false;
  };

  render() {
    const { page } = this.state;
    return (
      <div className="main" onClick={this.nextPage} onContextMenu={this.previousPage}>
        {page === 0 ? (
          <div>
            <First />
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default Main;
