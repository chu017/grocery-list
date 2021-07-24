import React from 'react';

class GroceryItem extends React.Component {
  constructor(props) {
    super(props)

     this.item = this.props.grocery.item;
     this.quantity = this.props.grocery.quantity;

     this.handleDelete = this.handleDelete.bind(this);
     // this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    // console.log(this.props.grocery.id);


    const groceryId = this.props.grocery.id;
    console.log(groceryId);
    this.props.deleteGroceryList(groceryId);
  }

  // handleEdit(event) {
  //   event.preventDefault();
  //   // console.log(event.target);

  //   const {id} = event.target;
  //   this.setState({
  //     [name]: value
  //   })

  //   const grocery = this.state;
  //   // console.log(this.state);
  //   this.props.editGroceryList(grocery);

  // }

  render() {
    return (
      <div>
        <li>
          <span onClick={this.handleDelete}>
            {this.item}
          </span>

          <span>
            {this.quantity}
          </span>

          <button> edit </button>
        </li>
      </div>
    )
  }

};

export default GroceryItem;