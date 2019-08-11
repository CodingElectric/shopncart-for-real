import React, { Component } from 'react';

class Groceries extends Component {
  constructor(props) {
    super(props)
      this.state = {
        groceryItems: this.props.groceryItems
      }
  }
  render() {
    return (
      <div className="main grocery-background">
            <table className="tbl">
            <tbody>
                <tr className="item-details">
                    <th className='item-padding'>Groceries</th>
                    <th className='item-padding'>Price</th>
                    <th></th>
                </tr>
                {this.state.groceryItems.map((item, index) => {
                    return <tr key={index}>
                        <td className={item[2]}>
                            {item[0]}</td>
                        <td className={item[2]}>
                            {item[1].toFixed(2)}</td>
                        <td>
                            <button 
                                onClick={() => this.props.addToCart(item)}
                                className="add-btn">
                                Add to cart
                            </button>
                        </td>
                    </tr>
                })}
            </tbody>
            </table>
            </div>
    )
  }
}
export default Groceries;