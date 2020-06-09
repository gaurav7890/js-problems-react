class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new BinarySearchTreeNode(value);
    console.log(this, 'in main');
    
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      this.insertNode(this.root, newNode);
    }

  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {      
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else if (newNode.value >= node.value) {
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }
}
