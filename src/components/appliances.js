import React, { Component } from 'react';

class Appliances extends Component {
  constructor(props) {
    super(props)
      this.state = {
        applianceItems: this.props.applianceItems
      }
  }
  render() {
    return (
      <div className="main appliance-background">
            <table className="tbl">
            <tbody>
                <tr className="item-details">
                    <th className='item-padding'>Appliances</th>
                    <th className='item-padding'>Price</th>
                    <th></th>
                </tr>
                {this.state.applianceItems.map((item, index) => {
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
export default Appliances;