import React, { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditAuthor = props => {
  const { id } = props;
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

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/authors/' + id)
      .then(res => {
        setAuthor(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const submitData = () => {
    axios
      .put('http://localhost:8000/api/authors/' + id, author)
      .then(res => {
        if (res.data.message === 'success') {
          console.log(res);
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
    <Container>
      <Row>
        <h1>Editing {author.name}</h1>
      </Row>
      <Row>
        <AuthorForm
          data={author}
          setData={setAuthor}
          submitData={submitData}
          errors={errors}
          onChangeHandler={onChangeHandler}
        />
      </Row>
      <Row>
        <Col sm='5'>
          <Link to='/'>
            <Button className='btn-secondary btn-sm'>Cancel</Button>
          </Link>
        </Col>
        <Col sm='5'>
          <DeleteButton />
        </Col>
      </Row>
    </Container>
  );
};

export default EditAuthor;
