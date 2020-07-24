import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreateAuthor = props => {
  const [author, setAuthor] = useState({
    name: '',
    quote: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    quote: '',
  });

  const onChangeHandler = e => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };
  console.log(author);

  const submitData = () => {
    axios
      .post('http://localhost:8000/api/authors', author)
      .then(res => {
        if (res.data.message === 'success') {
          setAuthor({
            name: '',
            quote: '',
          });
          navigate('/');
        } else {
          console.log(res.data.results);
          const { ...currErrors } = errors;
          if (res.data.results.errors.name) {
            currErrors.name = res.data.results.errors.name.properties.message;
          } else {
            currErrors.name = '';
          }
          if (res.data.results.errors.quote) {
            currErrors.quote = res.data.results.errors.quote.properties.message;
          } else {
            currErrors.quote = '';
          }
          setErrors(currErrors);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Create Author View</h1>
      <AuthorForm
        data={author}
        setData={setAuthor}
        submitData={submitData}
        errors={errors}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
};

export default CreateAuthor;
