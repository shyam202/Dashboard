import React, { useState } from "react";
import UsersList from "./UsersList";
import "./Users.css";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/core';



const Users = () =>{

    const [inputList, setInputList] = useState("");
    const [Users, setUsers] = useState([]);

    const itemEvent = (event) =>{
       setInputList(event.target.value);
    };

    const listOfUsers = () => { 
        setUsers((oldUsers) => {
            return [...oldUsers, inputList];
        });

        setInputList("");
    };

    const deleteUsers = (id) => {
        setUsers((oldUsers) => {
            return oldUsers.filter((arrElem, index) => {
            return index !== id;

           })
        })
    };



    return(
    <>
    <div className="main_div">
    <div className="center_div">
    <br />
    <h1>Customers List</h1>
    <br />
    <input type = "text" placeholder = "Add Your Customers" value = {inputList} onChange = {itemEvent} />
    <button onClick={listOfUsers}> + </button>
        
    <ol>
        {Users.map((itemval, index) => {
          return (<UsersList key = {index} id = {index} text = {itemval} onSelect = {deleteUsers} />);
        })}
    </ol>
    </div>     
    </div>

    </>
    )
};


export default Users;
