import User from './User';
import './UserList.css';

const UserList = ({ users }) => {
    return (
        <ul className="user-list">
            {users.map(user => (
                <User key={Math.random().toString()} username={user.username} age={user.age} />
            ))}
        </ul>
    );
};

export default UserList;
