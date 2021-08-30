import React from 'react';
import { useState } from 'react';
import './App.css';
import SubmitButton from './Components/SubmitButton';
import UserList from "./Components/UserList";

const App = () => {

  const [NameAgeArray, setNameAgeArray] = useState([]);

  const addUserHandler =(u_name,u_age)=>{
      setNameAgeArray((prevlist)=>{
        return  [...prevlist,
                  {Name : u_name, Age:u_age , unique_id : Math.random().toString()}
                ];
      });

  };


  return (
      <div className = "main-div">
          <SubmitButton onAddingUser = {addUserHandler}></SubmitButton>
          <UserList name_age_array = {NameAgeArray}></UserList>
      </div>
      
  );
};

export default App;
