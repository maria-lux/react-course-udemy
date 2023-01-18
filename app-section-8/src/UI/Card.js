import './Card.css';

const Card = ({ children, className }) => {
    const name = 'card ' + className;

    return <div className={name}>{children}</div>
};

export default Card;