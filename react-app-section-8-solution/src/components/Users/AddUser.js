import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if (!username || !age) {
            setError({
                title: 'Invalid input',
                message: 'Please enter'
            });
            setUsername('');
            setAge('');
            return;
        }
        if (+age < 1) {
            setError(true);
            setUsername('');
            setAge('');
            return;
        }
        onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    const usernameHandler = event => setUsername(event.target.value);
    const ageHandler = event => setAge(event.target.value);

    return (
        <div>
            {error && <ErrorModal
                title="An error occurred"
                message="Something went wrong"
            />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={usernameHandler}
                    ></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={age}
                        onChange={ageHandler}
                    ></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
