// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses, total} = props

  return (
    <div className="middle-section-container">
      <div className="balance-container">
        <img
          className="balance-logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="card-heading">Your Balance</p>
          <p className="card-heading amount" data-testid="balanceAmount">
            Rs {total}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          className="income-logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="card-heading">Your Income</p>
          <p className="card-heading amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          className="expense-logo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="card-heading">Your Expenses</p>
          <p className="card-heading amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
