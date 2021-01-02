import React from 'react';

function User({ match }) {
  return <div>{match.params.user}</div>;
}
export default User;
