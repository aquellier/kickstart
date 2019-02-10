import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

// The head moves the link tag in the head of our HTML
// We can also use this for metatags
export default props => {
  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
      </Head>
      <Header/>
      {props.children}
    </Container>
  )
};
