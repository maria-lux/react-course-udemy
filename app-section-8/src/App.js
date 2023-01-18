import UserForm from './User/UserForm';
import UserList from './User/UserList';
import ErrorModal from './Error/ErrorModal';
import { useState } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const addUser = user => {
        if (user.username === '' || user.age === '') {
            setError(true);
            setErrorMessage(
                'Please enter a valid name and age (non-empty values).'
            );
        }
        if (parseInt(user.age) < 1) {
            setError(true);
            setErrorMessage('Please enter a valid age (> 0)');
        }
        if (user.username !== '' && parseInt(user.age) > 0) {
            setUsers(prev => [user, ...prev]);
        }
    };

    const closeModal = () => setError(false);

    return (
        <div className="App">
            {error && (
                <ErrorModal
                    errorMessage={errorMessage}
                    closeModal={closeModal}
                />
            )}
            {!error && (
                <div>
                    <UserForm addUser={addUser} />
                    <UserList users={users} />
                </div>
            )}
        </div>
    );
}

export default App;
