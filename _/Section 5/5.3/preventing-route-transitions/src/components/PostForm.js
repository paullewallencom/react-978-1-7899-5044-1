import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class PostForm extends Component {
  state = { isBlocking: false };

  render() {
    let { isBlocking } = this.state;

    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          this.setState({
            isBlocking: false
          });
        }}
      >
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />

        <p>
          Blocking?{' '}
          {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
        </p>

        <p>
          <input
            size="50"
            placeholder="enter post title"
            onChange={event => {
              this.setState({
                isBlocking: event.target.value.length > 0
              });
            }}
          />
        </p>

        <p>
          <button>Submit</button>
        </p>
      </form>
    );
  }
}
export default PostForm;
