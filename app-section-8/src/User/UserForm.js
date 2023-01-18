import { useState } from 'react';
import Card from './../UI/Card';

const UserForm = ({ addUser }) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameHandler = event => setUsername(event.target.value);
    const ageHandler = event => setAge(event.target.value);

    const submitData = event => {
        event.preventDefault();

        const user = {
            username: username,
            age: age
        };

        addUser(user);

        setUsername('');
        setAge('');
    };

    return (
        <Card>
            <form onSubmit={submitData}>
                <div className="user-form">
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={usernameHandler}
                    />
                    <br />
                    <label>Age (Years)</label>
                    <br />
                    <input
                        type="text"
                        value={age}
                        onChange={ageHandler}
                    />
                    <br />
                    <button type="submit">Add User</button>
                </div>
            </form>
        </Card>
    );
};

export default UserForm;
