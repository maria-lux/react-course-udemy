import './ErrorModal.css';

const ErrorModal = ({ errorMessage, closeModal }) => {
    return (
        <div className="error-modal">
            <h3>Invalid input</h3>
            <div>{errorMessage}</div>
            <button type="button" onClick={closeModal}>Okay</button>
        </div>
    );
};

export default ErrorModal;
