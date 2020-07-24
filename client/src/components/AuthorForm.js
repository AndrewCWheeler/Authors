import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AuthorForm = props => {
  const { data, setData, submitData, errors, onChangeHandler } = props;

  const onSubmitHandler = e => {
    e.preventDefault();
    submitData();
  };

  return (
    <Container>
      <Form className='my-4' onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label className='col-form-label'>Author's Name:</Form.Label>
          <Form.Control
            className='col-sm-6 form-control-lg'
            type='text'
            name='name'
            onChange={e => {
              onChangeHandler(e);
            }}
            value={data.name}
          />
          {errors.name ? <p className='text-danger'>{errors.name}</p> : ''}
        </Form.Group>
        <Form.Group>
          <Form.Label>Quote:</Form.Label>
          <Form.Control
            className='col-sm-6 form-control-lg'
            type='text'
            name='quote'
            onChange={e => {
              onChangeHandler(e);
            }}
            value={data.quote}
          />
          {errors.quote ? <p className='text-danger'>{errors.quote}</p> : ''}
        </Form.Group>
        <Button
          className='col-sm-6 my-4 btn-primary btn-block btn-lg'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AuthorForm;
