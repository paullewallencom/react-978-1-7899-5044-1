import React from 'react';
import MyComponent from './components/MyComponent';

class Main extends React.Component {
  render() {
    return <MyComponent value={1 + 2} />;
  }
}
export default Main;
