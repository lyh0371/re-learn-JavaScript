function BinSer() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  // 属性
  this.root = null;
  // 方法
  // 插入数据
  BinSer.prototype.insert = function (key) {
    // 1.创建一个节点
    var newNode = new Node(key);
    // 2.判断根节点是否有值
    if (this.root == null) {
      this.root = newNode;
    } else {
      // 有根节点
      this.insertNode(this.root, newNode);
    }
  };

  BinSer.prototype.insertNode = function (node, newNode) {
    // node 被比较的节点
    if (newNode.key < node.key) {
      // 向左查找
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 向右查找
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  // 先序遍历
  BinSer.prototype.preOrder = function (handler) {
    this.preOrderNode(this.root, handler);
  };
  BinSer.prototype.preOrderNode = function (node, handler) {
    if (node != null) {
      handler(node.key);
      this.preOrderNode(node.left, handler);
      this.preOrderNode(node.right, handler);
    }
  };
  BinSer.prototype.max = function () {
    var node = this.root;
    var key = null;
    while (node != null) {
      node = node.right;
      key = node.right;
    }
    return key;
  };
  BinSer.prototype.min = function () {
    var node = this.root;
    var key = null;

    while (node != null) {
      node = node.left;
      key = node.left;
    }
    return key;
  };
}

const bin = new BinSer();

bin.insert(9);
bin.insert(8);
bin.insert(6);
bin.insert(7);

console.log(bin);
