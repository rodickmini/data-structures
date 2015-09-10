/**
 * Created by rodick on 15-2-5.
 */
/**
 * 队列
 * @constructor
 */
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.isEmpty = isEmpty;
}



/**
 * 入队
 * @param element
 */
function enqueue(element) {
    this.dataStore.push(element);
}

/**
 * 出队，返回出队元素
 * @returns {*}
 */
function dequeue() {
    return this.dataStore.shift();
}

/**
 * 获取队首元素
 * @returns {*}
 */
function front() {
    return this.dataStore[0];
}

/**
 * 获取队尾元素
 * @returns {*}
 */
function back() {
    return this.dataStore[this.dataStore.length - 1];
}

/**
 * 显示队内所有元素
 * @returns {string}
 */
function toString() {
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

/**
 * 判断队列是否为空
 * @returns {boolean}
 */
function isEmpty() {
    return this.dataStore.length === 0;
}