import React from 'react';
import { useParams } from 'react-router-dom';

interface IProfileParam {
  id: string;
}

const Profile = () => {
  const { id } = useParams<IProfileParam>();
  return <div>{id}</div>;
};

export default Profile;
