class OneWayLinked {
  constructor() {
    this.head = null; // 链表的指针
    this.length = 0; // 链表的长度
  }
  // 链表的节点类
  _node(data) {
    this.data = data;
    this.next = null;
  }
  // 添加方法
  append(data) {
    const newNode = new _node(data);
    // 如何是第一个元素之间添加
    if (this.length === 0) {
      this.head = newNode;
    } else {
      // 否则找到最好一个元素,然后吧节点追加到后面
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.length++;
  }
  //   插入方法,可插入待到任何地方

  insert(position, data) {
    // 边界判断
    if (position < 0 || position > this.length) return false;
    const newNode = new _node(data);
    if (position === 0) {
      newNode.next = this.head;
    }
  }
}
