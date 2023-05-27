// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactions, deleteTransaction} = props
  const {title, amount, type, id} = transactions

  const onDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <div className="transation-items-container">
        <div className="list">
          <p className="title">{title}</p>
          <p className="title">{amount}</p>
          <p className="title">{type}</p>
        </div>
        <button
          data-testid=" delete"
          type="button"
          className="custom-btn"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
