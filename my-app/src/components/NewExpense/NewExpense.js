import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        setShowForm(false);
    };

    const cancelAddExpense = () => setShowForm(false);

    const clickHandler = () => setShowForm(true);

    return (
        <div className="new-expense">
            {showForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelAddExpense}
                />
            )}
            {!showForm && (
                <button onClick={clickHandler}>
                    Add New Expense
                </button>
            )}
        </div>
    );
};

export default NewExpense;
