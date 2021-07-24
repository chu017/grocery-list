import React from 'react';
import GroceryHeader from './GroceryHeader.jsx';
import GroceryForm from './GroceryForm.jsx';
import GroceryList from './GroceryList.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceryList: []
    }

    this.addToGroceryList = this.addToGroceryList.bind(this);
    this.editGroceryList = this.editGroceryList.bind(this);
    this.deleteGroceryList = this.deleteGroceryList.bind(this);
  }

  componentDidMount() {
    this.getRequest();
  }

  getRequest() {
    $.ajax({
      url: "http://localhost:3000/groceries",
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: groceryList => this.setState({groceryList}),
      error: e => console.log(e)
    });
  }

  addToGroceryList(grocery) {
    $.ajax({
      url: "http://localhost:3000/groceries",
      type: 'POST',
      data: grocery,
      success: () => this.getRequest(),
      error: e => console.log(e)
    });
  }

  editGroceryList(grocery) {
    $.ajax({
      url: "http://localhost:3000/groceries/:id",
      type: 'PATCH',
      data: grocery,
      success: () => this.getRequest(),
      error: e => console.log(e)
    });
  }

  deleteGroceryList(groceryId) {
    $.ajax({
      url: `http://localhost:3000/groceries/${groceryId}`,
      type: 'DELETE',
      success: (e) => this.getRequest(e),
      error: e => console.log(e)
    });
  }

  render() {

    return (
    <div>
      <GroceryHeader />
      <GroceryForm
        addToGroceryList={this.addToGroceryList}
        />
      <GroceryList
        groceryList={this.state.groceryList}
        editGroceryList={this.editGroceryList}
        deleteGroceryList={this.deleteGroceryList}
        />

    </div>
    )
  }
}

export default App;