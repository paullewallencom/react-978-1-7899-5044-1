import React from 'react';
import MyHOC from '../hoc/MyHoc';

class MyComponent extends React.Component {
  render() {
    let { location } = this.props;
    let { match } = this.props;
    let { value } = this.props;
    return (
      <div>
        <p>{location.pathName}</p>
        <p>{match.url}</p>
        <p>{value}</p>
      </div>
    );
  }
}

export default MyHOC(MyComponent);
