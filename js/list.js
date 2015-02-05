/**
 * Created by rodick on 15-2-4.
 */
/**
 * 列表
 * @constructor
 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

/**
 * 列表末尾追加
 * @param element
 */
function append(element) {
    this.dataStore[this.listSize++] = element;
}

/**
 * 查找元素，返回下标
 * @param element
 * @returns {number}
 */
function find(element) {
    for(var i=0; i<this.dataStore.length; i++) {
        if(this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

/**
 * 删除元素，成功返回true，失败返回false
 * @param element
 * @returns {boolean}
 */
function remove(element) {
    var foundAt = this.find(element);
    if(foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

/**
 * 获取列表长度
 * @returns {number}
 */
function length() {
    return this.listSize;
}

/**
 * 获取当前列表
 * @returns {Array}
 */
function toString() {
    return this.dataStore;
}

/**
 * 在元素after之后插入元素element
 * @param element
 * @param after
 * @returns {boolean}
 */
function insert(element, after) {
    var afterAt = this.find(after);
    if(afterAt > -1) {
        this.dataStore.splice(afterAt+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

/**
 * 清空列表
 */
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

/**
 * 判断element是否在列表中，在则返回true，不在则返回false
 * @param element
 * @returns {boolean}
 */
function contains(element) {
    for(var i=0; i<this.listSize; i++) {
        if(this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}

/**
 * 将指针挪到最前
 */
function front() {
    this.pos = 0;
}

/**
 * 将指针挪到最后
 */
function end() {
    this.pos = this.listSize - 1;
}

/**
 * 指针向前挪一位
 */
function prev() {
    if(this.pos > 0) {
        --this.pos;
    }
}

/**
 * 指针向后挪一位
 */
function next() {
    if(this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

/**
 * 获取当前位置
 * @returns {number|*}
 */
function currPos() {
    return this.pos;
}

/**
 * 将指针挪到相应位置
 * @param postion
 */
function moveTo(postion) {
    this.pos = postion;
}

/**
 * 获取当前元素
 * @returns {*}
 */
function getElement() {
    return this.dataStore[this.pos];
}