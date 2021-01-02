import React from 'react';

const MyHOC = ComposedComponent =>
  class extends React.Component {
    state = {
      location: { pathName: '/' },
      history: { push: {} },
      match: { url: '/' }
    };
    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  };
export default MyHOC;
