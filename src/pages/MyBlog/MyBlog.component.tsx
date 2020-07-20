import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface PathParamsProps {
  id: string;
}

const MyBlog = ({ match, location }: RouteComponentProps<PathParamsProps>) => {
  const { params } = match;
  console.log('hello');
  console.log(params);
  return <div>asdfa</div>;
};

export default MyBlog;
