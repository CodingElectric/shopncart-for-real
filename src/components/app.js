import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Welcome from './welcome';
import Groceries from './groceries';
import Appliances from './appliances';
import Cart from './cart';
import Footer from './footer';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checkoutVisible: false,
      yourCart: [],
      cartCount: 0,
      dollarAmount: 0,
      allShopItems: [
        [" Bread ", 3.00, "grocery"],
        [" Pasta ", 2.00, "grocery"],
        [" Apples ", 4.00, "grocery"],
        [" Spinach ", 3.50, "grocery"],
        [" Potatoes", 5.00, "grocery"],
        [" Milk ", 3.00, "grocery"],
        [" Ground Beef ", 6.00, "grocery"],
        [" Fried Chicken ", 5.50, "grocery"],
        [" Refrigerator ", 599.99, "appliance"],
        [" Freezer ", 249.99, "appliance"],
        [" Washer ", 499.99, "appliance"],
        [" Dryer ", 599.99, "appliance"],
        [" Oven ", 1999.99, "appliance"],
        [" Stove-Top ", 399.99, "appliance"],
        [" Microwave ", 99.99, "appliance"]
      ]
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.checkoutReady = this.checkoutReady.bind(this);
    this.checkoutComplete = this.checkoutComplete.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }
  addToCart(item) {
    const yourCart = [...this.state.yourCart, item]
    const dollarAmount = this.state.dollarAmount + item[1]
    this.setState({dollarAmount})
    this.setState({yourCart})
    this.setState({ cartCount: this.state.cartCount + 1 })
  }
  removeFromCart(item, index) {
    const yourCart = [...this.state.yourCart]
    yourCart.splice(index, 1)
    const dollarAmount = this.state.dollarAmount - item[1]
    this.setState({dollarAmount})
    this.setState({yourCart})
    this.setState({ cartCount: this.state.cartCount - 1 })
  }
  checkoutReady = () => {
    this.setState({ checkoutVisible: true })
  }
  checkoutComplete = () => {
    this.setState({ checkoutVisible: false, 
                    yourCart: [],
                    dollarAmount: 0, 
                    cartCount: 0 })
  }
  emptyCart = () => {
    this.setState({ yourCart: [], 
      dollarAmount: 0,
      cartCount: 0 })
  }

  render() {
    return (

      <div className='app'>

<div className={this.state.checkoutVisible ? 
        'checkout-display' : 
        'checkout-hidden'}
        onClick={this.checkoutComplete}>
          <div className='checkout-message'>
          <div>Thank you for your purchase  
            of {this.state.cartCount} items for 
            ${this.state.dollarAmount.toFixed(2)}. Enjoy!</div>
          <div className='close'>X</div>
          </div>
          </div>

        <Header cartCount={this.state.cartCount} />
        <Route exact path='/' component={Welcome} />
        <Route path='/groceries' 
            render={()=> <Groceries 
              addToCart={this.addToCart}
              groceryItems={this.state.allShopItems.filter(
              (item) => item[2] == "grocery")}/>}
          />
        <Route path='/appliances' 
            render={()=> <Appliances 
              addToCart={this.addToCart}
              applianceItems={this.state.allShopItems.filter(
              (item) => item[2] == "appliance")}/>}
          />
        <Route path='/cart' 
            render={()=> <Cart
              items={this.state.yourCart}
              dollarAmount={this.state.dollarAmount}
              removeFromCart={this.removeFromCart} 
              checkoutReady={this.checkoutReady}
              emptyCart={this.emptyCart} />}
          />
        <Footer />
      </div>
    );
  }
}
