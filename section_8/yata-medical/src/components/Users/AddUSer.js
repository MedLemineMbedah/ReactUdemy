import React ,{useState,useRef}from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Warpper from '../Helpers/Warpper';


const AddUser = props =>{
    const nameInputRef=useRef();
    const ageInputRef=useRef();

    // const [entredUsername, setEnteredUsername] = useState('');
    // const [entredAge, setEnteredAge] = useState('');

    const [error, setError] = useState('');

    const addUserHandler = (event)=>{
        event.preventDefault();
        console.log(nameInputRef.current.value);
        const enteredName =nameInputRef.current.value;
        const entredUserAge =ageInputRef.current.value;

        if(enteredName.trim().length ===0 || entredUserAge.trim().length ===0){
            setError({
                title :'Invalid input',
                message : 'Please enter a valid name and age (non-empty values).'

            });
            return;
        }
        if(+entredUserAge < 1){ //+entredAge for convert entredAge to number 
            setError({
                title :'Invalid Age',
                message : 'Please enter a valid age ( > 0).'

            });
            return;
        }
        props.onAddUser(enteredName, entredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value ='';

        // setEnteredUsername('');
        // setEnteredAge('');
    };

    // const usernameChangeHandler = (event) =>{
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) =>{
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Warpper>
           {error && 
            <ErrorModal 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler}
                />
            }
            <Card className ={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                       // value={entredUsername} 
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Year)</label>
                    <input 
                        id="age" 
                        type="number" 
                       // value={entredAge} 
                       // onChange={ageChangeHandler}
                        ref = {ageInputRef} 
                    />
                    <Button type="submit">AddUser</Button>
                </form>
            </Card>
        </Warpper>
    );
};

export default AddUser;