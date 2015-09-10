/**
 * Created by rodick on 15-2-4.
 */
/**
 * 栈
 * @constructor
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

/**
 * 元素element入栈
 * @param element
 */
function push(element) {
    this.dataStore[this.top++] = element;
}

/**
 * 弹出栈顶元素，并返回
 * @returns {*}
 */
function pop() {
    return this.dataStore[--this.top];
}



/**
 * 返回当前栈顶元素
 * @returns {*}
 */
function peek() {
    return this.dataStore[this.top - 1];
}

/**
 * 返回当前栈中元素个数
 * @returns {Number|CSSStyleDeclaration.top|*|number|window}
 */
function length() {
    return this.top;
}

/**
 * 清空栈
 */
function clear() {
    this.top = 0;
}