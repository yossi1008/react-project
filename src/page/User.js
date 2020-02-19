import React from 'react';
import {Link , useParams} from 'react-router-dom';

function User() {
  let {id} = useParams();
  return (
    <div>
      user: {id}
    </div>
  );
}

export default User;
