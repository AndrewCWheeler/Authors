import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Router, Link } from '@reach/router';
import AuthorList from './AuthorList';
import CreateAuthor from './CreateAuthor';
import EditAuthor from './EditAuthor';

const Main = () => {
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    axios
      .get('http://localhost:8000/api')
      .then(res => setMessage(res.data.message));
  }, []);

  return (
    <Container>
      <p>Message from backend: {message} </p>
      <nav>
        <h1>Favorite Authors</h1>
        <Link to='/'>Dashboard</Link> |&nbsp;
        <Link to='/authors/new'>Add Author</Link>
      </nav>
      <Router>
        <AuthorList path='/' default />
        <CreateAuthor path='/authors/new' />
        <EditAuthor path='/authors/:id/edit' />
      </Router>
    </Container>
  );
};

export default Main;
