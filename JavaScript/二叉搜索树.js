/**
 * javascript 实现二叉树
 *
 * 特点: 每个节点都有left和right
 * left小于right
 * 整个树中, 最小值在left,最大值在right
 */

function searchTree() {
  // 树的节点
  function Node(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }

  this.root = null;

  searchTree.prototype.inster = function (key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insterNode(this.root, newNode);
    }
  };

  searchTree.prototype.insterNode = function (node, newNode) {
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
  // 前序遍历
  searchTree.prototype.Preorder = function (handler) {
    this.preOrderNode(this.root, handler);
  };
  // 中序遍历
  searchTree.prototype.Middle = function (handler) {
    this.preOrderNode(this.root, handler);
  };
  // 后序遍历
  searchTree.prototype.After = function (handler) {
    this.preOrderNode(this.root, handler);
  };

  //寻找最大值
  searchTree.prototype.max = function () {
    //1.获取根节点
    let node = this.root;
    //2.定义key保存节点值
    let key = null;
    //3.依次向右不断查找，直到节点为null
    while (node != null) {
      key = node.key;
      node = node.right;
    }
    return key;
  };

  //寻找最小值
  searchTree.prototype.min = function () {
    //1.获取根节点
    let node = this.root;
    //2.定义key保存节点值
    let key = null;
    //3.依次向左不断查找，直到节点为null
    while (node != null) {
      key = node.key;
      node = node.left;
    }
    return key;
  };
  //查找特定的key
  searchTree.prototype.search = function (key) {
    //1.获取根节点
    let node = this.root;

    //2.循环搜索key
    while (node != null) {
      if (key < node.key) {
        //小于根(父)节点就往左边找
        node = node.left;
        //大于根(父)节点就往右边找
      } else if (key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  };

  //四.删除节点
  searchTree.prototype.remove = function (key) {
    /*------------------------------1.寻找要删除的节点---------------------------------*/
    //1.1.定义变量current保存删除的节点，parent保存它的父节点。isLeftChild保存current是否为parent的左节点
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    //1.2.开始寻找删除的节点
    while (current.key != key) {
      parent = current;
      // 小于则往左查找
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      //找到最后依然没有找到相等的节点
      if (current == null) {
        return false;
      }
    }
    //结束while循环后：current.key = key

    /*------------------------------2.根据对应情况删除节点------------------------------*/
    //情况1：删除的是叶子节点(没有子节点)
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    //情况2：删除的节点有一个子节点
    //当current存在左子节点时
    else if (current.right == null) {
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
      //当current存在右子节点时
    } else if (current.left == null) {
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }
    //情况3：删除的节点有两个子节点
    else {
      //1.获取后继节点
      let successor = this.getSuccessor(current);

      //2.判断是否根节点
      if (current == this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }

      //3.将后继的左子节点改为被删除节点的左子节点
      successor.left = current.left;
    }
  };

  searchTree.prototype.preOrderNode = function (node, handler) {
    if (node != null) {
      this.preOrderNode(node.left, handler);
      handler(node.key);
      this.preOrderNode(node.right, handler);
    }
  };
  searchTree.prototype.MiddleNode = function (node, handler) {
    if (node != null) {
      this.preOrderNode(node.left, handler);
      handler(node.key); // 中序
      this.preOrderNode(node.right, handler);
    }
  };
  searchTree.prototype.AfterNode = function (node, handler) {
    if (node != null) {
      this.preOrderNode(node.left, handler);
      this.preOrderNode(node.right, handler);
      handler(node.key); // 后序
    }
  };
}

let s = new searchTree();
s.inster(10);
s.inster(8);
s.inster(7);
s.inster(6);
s.inster(12);
s.inster(14);

s.xianxu(function (val) {
  console.log(val);
});
console.log(s);
