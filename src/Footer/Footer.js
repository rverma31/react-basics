import React, { Component } from 'react';
import FooterTop from './FooterTop';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5, 6],
      cart: {
        items: {
          quantity: 10,
          product: 'shampoo',
        },
      },
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.state.cart.items && this.state.arr.length !== 0) {
      this.handleChange();
    }
  }

  handleChange() {
    var x = (a) => {
      return 1 ? 2 : 3;
    };
    x();
    var a, b, c;
    var foo = a || (b && c);
    this.getMoreValue(foo);
    if (a) {
      return 2;
    }
  }

  getMoreValue(arg) {}

  render() {
    return (
      <div>
        <footer>
          <div className="footer-wrapper">
            <div className="inner-footer">
              <h3>Inner Footer</h3>
            </div>
            <FooterTop></FooterTop>
            <div>
              kjdajkkjfankjnfknakfnkaf anfknakjfsnkvjnakfjsnv jnakjnvkanfknv
              nvkjnakvfn nsafkvnkfanv
            </div>
            <h2>Footer Heading</h2>
            <p>footer description</p>
            <h2 className="title">footer component</h2>
            <div className="footer-content">
              this is nvjahvbjfbvjfdjbvjfbvjfjvbjfbvvbfj
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
