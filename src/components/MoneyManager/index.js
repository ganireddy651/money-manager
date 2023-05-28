import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactions: [],
    income: 0,
    total: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'Income',
  }

  onTitleChange = event => this.setState({title: event.target.value})

  onAmountChange = event => this.setState({amount: event.target.value})

  onOptionChanged = event => this.setState({type: event.target.value})

  onClickDisplayAmount = event => {
    event.preventDefault()

    const {type, title, amount} = this.state
    const transactionObj = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(preState => ({
      transactions: [...preState.transactions, transactionObj],
    }))
    if (type === 'Income') {
      this.setState(preState => ({
        total: preState.total + parseInt(preState.amount),
        income: preState.income + parseInt(preState.amount),
      }))
    } else {
      this.setState(preState => ({
        total: preState.total - parseInt(preState.amount),
        expenses: preState.expenses + parseInt(preState.amount),
      }))
    }
    this.setState({title: '', amount: ''})
  }

  deleteTransaction = id => {
    const {transactions} = this.state
    const filterData = transactions.filter(each => each.id !== id)
    console.log(filterData)
    const filterAmount = transactions.filter(each => each.id === id)
    console.log(filterAmount)

    const {amount, type} = filterAmount[0]

    this.setState({transactions: filterData})
    if (type === 'Income') {
      this.setState(preState => ({
        total: preState.total - parseInt(amount),
        income: preState.income - parseInt(amount),
      }))
    } else {
      this.setState(preState => ({
        total: preState.total + parseInt(amount),
        expenses: preState.expenses - parseInt(amount),
      }))
    }
  }

  render() {
    const {transactions, income, expenses, total, title, amount} = this.state

    return (
      <div className="app-money-manager">
        <div className="customer-container">
          <h1 className="main-heading">Hi, Richard</h1>
          <p className="top-sec-para">
            Welcome back to your
            <span className="span-text"> Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails income={income} expenses={expenses} total={total} />
        </div>
        <div className="bottom-section">
          <form className="form-container" onSubmit={this.onClickDisplayAmount}>
            <div>
              <h1 className="add-trans-heading">Add Transaction</h1>
            </div>
            <div className="input-container">
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                id="title"
                className="input"
                type="text"
                placeholder="TITLE"
                value={title}
                onChange={this.onTitleChange}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input
                id="amount"
                className="input"
                type="text"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.onAmountChange}
              />
            </div>
            <label className="label" htmlFor="type">
              TYPE
            </label>
            <br />
            <div className="money-details-container">
              <select
                className="input-container input"
                onChange={this.onOptionChanged}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="list-container">
              <p className="history-sub-heading">Title</p>
              <p className="history-sub-heading">Amount</p>
              <p className="history-sub-heading">Type</p>
            </div>
            <ul className="transation-container">
              {transactions.map(each => (
                <TransactionItem
                  transactions={each}
                  key={each.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
