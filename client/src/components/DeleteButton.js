import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const DeleteButton = props => {
  const { authorId, successCallback } = props;

  const deleteAuthor = e => {
    axios.delete('http://localhost:8000/api/authors/' + authorId).then(res => {
      successCallback();
    });
  };

  return (
    <div>
      <Button className='btn-danger btn-sm' onClick={deleteAuthor}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
