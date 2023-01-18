import Card from './../UI/Card';

const User = ({ username, age }) => {
    return (
        <li>
            <Card>
                <div className="user">{`${username} (${age})`}</div>
            </Card>
        </li>
    );
};

export default User;
