import React from 'react';
import styled from 'styled-components';
import { A } from 'theme/Components';

const Post = styled.p`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
`;
const Posts = styled.p`
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
`;

const Name = styled.p`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  margin-left: 10px;
`;

const Span = styled.span`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  margin-left: 5px;
`;

const Head = styled.p`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
`;

const Upperlines = ({ post, name }) => (
  <div>
    <Post> {post} </Post>
    <Name> {name} </Name>
  </div>
);

const Department = styled.div`
  margin: 5px;
  margin-bottom: 50px;
`;

const Lowerlines = ({ departName, post, name, link, facility }) => (
  <Department>
    <Posts>{departName} </Posts>
    <Head> {post}</Head>
    <Span> {name}</Span>
    <A padding="0px" href={link} target="_blank">
      View
    </A>
    <div>
      <Head> Faculty </Head>
      {facility.map((item, i = 0) => <Name key={i++}> {item} </Name>)}
    </div>
  </Department>
);

module.exports = {
  Upperlines,
  Lowerlines,
};
