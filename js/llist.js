/**
 * Created by rodick on 15-2-9.
 */

/**
 * Node类
 *
 * @param element
 * @constructor
 */
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

/**
 * 双向链表类
 * @constructor
 */
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findLast = findLast;
    this.remove = remove;
    this.display = display;
    this.dispReverse = dispReverse;
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
    newNode.previous = current;
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
 * 删除元素为item的节点
 * @param item
 */
function remove(item) {
    var currNode = this.find(item);
    if(currNode.next !== null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

/**
 * 查找最后一个结点
 * @returns {Node|*}
 */
function findLast() {
    var currNode = this.head;
    while(!(currNode.next === null)) {
        currNode = currNode.next;
    }
    return currNode;
}

/**
 * 逆向显示
 */
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous === null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}