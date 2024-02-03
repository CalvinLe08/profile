import '../App.css';
import EditPage from './EditPage';
import BasicTabs from './ProfileBody';
import Header from './ProfileHeader';
import * as React from 'react';
import { useState } from 'react';


const Profile = () => {
  const [isEdit, setEdit] = useState(false);

  return (
    <>
      {isEdit ? <EditPage setEdit={setEdit}/> : <Header setEdit={setEdit} />}
      <BasicTabs/>
    </>
  );
};

export default Profile;
