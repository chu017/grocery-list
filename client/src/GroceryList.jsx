import React from 'react';
import GroceryItem from './GroceryItem.jsx';


class GroceryList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul className="groceries">

          {this.props.groceryList.map((grocery, i) =>
            <GroceryItem grocery={grocery} key={i}
                editGroceryList={this.props.editGroceryList}
                deleteGroceryList={this.props.deleteGroceryList}
            />
            )}

        </ul>
      </div>
    )
  }
}

export default GroceryList;

