import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

const Expenses = ({ items }) => {
  const [year, setYear] = useState('2022');

  const yearFilterHandler = selectedYear => setYear(selectedYear);

  const filteredExpensesByYear = items.filter(
    item => item.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onFilterYear={yearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpensesByYear} />
        <ExpensesList items={filteredExpensesByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
