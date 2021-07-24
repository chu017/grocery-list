import React from 'react';
import App from './App.jsx';

class GroceryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      quantity: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target);
    // alert('Add ' + this.state.quantity + ' ' + this.state.item);
    const grocery = this.state;
    // console.log(this.state);
    this.props.addToGroceryList(grocery);
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item
          <input
            name="item"
            value={this.state.item}
            onChange={this.changeHandler}/>
        </label>
        <label>
          Quantity
        <input
            name="quantity"
            value={this.state.quantity}
            onChange={this.changeHandler}/>
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}

export default GroceryForm;