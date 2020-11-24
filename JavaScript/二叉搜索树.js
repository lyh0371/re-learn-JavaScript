/**
 * javascript 实现二叉树
 *
 * 特点: 每个节点都有left和right
 * left小于right
 * 整个树中, 最小值在left,最大值在right
 */

function Shu() {
  // 树的节点
  function Node(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }

  this.root = null;

  Shu.prototype.inster = function (key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insterNode(this.root, newNode);
    }
  };

  Sub.prototype.insterNode = function (node, newNode) {
    // todo 递归查找当前数据应该在的位置

    if (newNode.key > node.key) {
      // 把新节点放到最右边

      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insterNode(node.right, newNode);
      }
    } else {
      // 把新节点放到左端
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insterNode(node.left, newNode);
      }
    }
  };
}
