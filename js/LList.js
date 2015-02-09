/**
 * Created by rodick on 15-2-9.
 */

/**
 * Node类
 * @param element
 * @constructor
 */
function Node(element) {
    this.element = element;
    this.next = null;
}

/**
 * 链表类
 * @constructor
 */
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}

/**
 * 查找元素为item的节点
 * @param item
 * @returns {Node|*}
 */
function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * 在元素为item的节点后插入元素为newElement的节点
 * @param newElement
 * @param item
 */
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

/**
 * 显示
 */
function display() {
    var currNode = this.head;
    while(currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

/**
 * 找到元素为item的前一个节点
 * @param item
 * @returns {Node|*}
 */
function findPrevious(item) {
    var currNode = this.head;
    while((currNode.next.element !== item) && (currNode.next !== null)) {
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * 删除元素为item的节点
 * @param item
 * @returns {boolean}
 */
function remove(item) {
    var prevNode = this.findPrevious(item);
    if(prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
        return true;
    }else {
        return false;
    }
}