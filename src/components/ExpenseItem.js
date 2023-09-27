import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(20021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.57;
  return (
    <div className='expense-item'>
      <div>March 28th 2021</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>$294.81</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
