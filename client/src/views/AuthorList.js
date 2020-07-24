import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import { Container, Card, Row, Button } from 'react-bootstrap';
import DeleteButton from '../components/DeleteButton';

const AuthorList = props => {
  const [allAuthors, setAllAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors').then(res => {
      let currAuthors = res.data.results;
      console.log(currAuthors);
      currAuthors.sort((a, b) => (a.name < b.name ? -1 : 1));
      setAllAuthors(currAuthors);
    });
  }, []);
  const removeFromDom = authorId => {
    setAllAuthors(allAuthors.filter(author => author._id !== authorId));
  };

  return (
    <Container>
      <h1>Author List View</h1>
      {allAuthors.map((author, i) => (
        <Card className='col-sm-6 mb-2' key={i}>
          <Card.Header className='bg-dark text-white'>
            {author.name}
          </Card.Header>
          <Card.Body>
            <p>{author.quote}</p>
            <Row>
              <Link
                className='col-sm-2 mx-2'
                to={`/authors/${author._id}/edit`}
              >
                <Button className='btn-primary btn-sm'>Edit</Button>
              </Link>
              <DeleteButton
                className='col-sm-2 mx-2'
                successCallback={() => removeFromDom(author._id)}
              />
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AuthorList;
