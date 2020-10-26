import React, { Component } from 'react';

class FooterTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footertop: 2,
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <div>FooterTop : {this.state.footertop}</div>;
  }
}

export default FooterTop;
