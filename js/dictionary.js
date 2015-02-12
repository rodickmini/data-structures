/**
 * Created by rodick on 15-2-11.
 */
function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

/**
 * 添加一个键值对
 * @param key
 * @param value
 */
function add(key, value) {
    this.datastore[key] = value;
}

/**
 * 查找键key对应的值
 * @param key
 * @returns {*}
 */
function find(key) {
    return this.datastore[key];
}

/**
 * 移除键key对应的键值对
 * @param key
 */
function remove(key) {
    delete this.datastore[key];
}

/**
 * 遍历输出字典
 */
function showAll() {
    for(var key in this.datastore) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

/**
 * 获取字典长度
 * @returns {number}
 */
function count() {
    var n = 0;
    for(var key in this.datastore) {
        ++n;
    }
    return n;
}

/**
 * 移除所有的键值对
 */
function clear() {
    for(var key in this.datastore) {
        delete this.datastore[key];
    }
}