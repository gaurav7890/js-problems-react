import React, { Component } from 'react';
import './FirstPage.scss'
import BinarySearchTree from '../problems/BinarySearchTree';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), bst: ''};
  }
  render() {
    return (
      <div className="main-page"> 
        It is 
        <strong>
          {this.state.bst}
        </strong>
      </div>
    );
  }

  componentDidMount() {
    let bst = new BinarySearchTree();
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(8);
    console.log(bst, 'here');
    
    this.setState({bst: JSON.stringify(bst)});
  }
}
