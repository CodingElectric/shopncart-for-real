import React, { Component } from 'react';

//total() {
    //return this.props.items.reduce((total, item) => {
        //return total + item[1]
    //}, 0)
//}

class Cart extends Component {
    render() {
        if (this.props.items.length === 0) {
            return <div className='main cart cart-image'>
                <div className="cart-title">
                    Your Cart
                </div>
                <div className="cart-title">
                    Cart is empty
                </div>
            </div>
        }
        return <div className='main cart-image'>
            <div className='cart'>
            <table className="cart-tbl">
                <tbody>
                <tr className="item-details">
                    <th className='item-padding'>Item Name</th>
                    <th className='item-padding'>Item Price</th>
                    <th></th>
                </tr>
                {this.props.items.map((item, index) => {
                    return <tr key={index}>
                        <td className={item[2]}>
                        {item[0]}</td>
                        <td className={item[2]}>
                        {item[1].toFixed(2)}</td>
                        <td>
                            <button 
                                onClick={() => this.props.removeFromCart(item, index)}
                                className="remove-btn">
                                Remove from cart
                            </button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            <div className="centers cart-title">
            <p>
                Total: ${this.props.dollarAmount.toFixed(2)}
            </p>
            <button 
              onClick={this.props.checkoutReady}
              className="add-btn margin10">
                Check Out
            </button>
            <button
              onClick={this.props.emptyCart}
              className="remove-btn margin10">
                Empty Cart
            </button>
            </div>
            </div>
        </div>
    }
}
export default Cart;