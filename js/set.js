/**
 * Created by rodick on 15-2-12.
 */
function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.contains = contains;
    this.union = union;
    this.show = show;
    this.intersect = intersect;
    this.size = size;
    this.subset = subset;
    this.difference = difference;
}

/**
 * 将data加入集合
 * @param data
 * @returns {boolean}
 */
function add(data) {
    if(this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }else {
        return false;
    }
}

/**
 * 将data移除集合
 * @param data
 * @returns {boolean}
 */
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if(pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }else {
        return false;
    }
}

/**
 * 返回集合数组
 * @returns {Array}
 */
function show() {
    return this.dataStore;
}

/**
 * 检测集合中是否存在data
 * @param data
 * @returns {boolean}
 */
function contains(data) {
    return this.dataStore.indexOf(data) > -1;
}

/**
 * 与集合set求并，并将结果返回
 * @param set
 */
function union(set) {
    var tempSet = new Set();
    for(var i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for(i = 0; i < set.dataStore.length; i++) {
        tempSet.add(set.dataStore[i]);
    }
    return tempSet;
}

/**
 * 与集合set求交，并将结果返回
 * @param set
 */
function intersect(set) {
    var tempSet = new Set();
    for(var i = 0; i < set.dataStore.length; i++) {
        if(this.contains(set.dataStore[i])) {
            tempSet.add(set.dataStore[i]);
        }
    }
    return tempSet;
}

/**
 * 返回该集合的大小
 * @returns {Number}
 */
function size() {
    return this.dataStore.length;
}

/**
 * 判断该集合是否为set的子集，若是，返回true，否则，返回false
 * @param set
 * @returns {boolean}
 */
function subset(set) {
    if(this.size() > set.size()) {
        return false;
    }else {
        for(var i = 0; i < this.dataStore.length; i++) {
            if(!set.contains(this.dataStore[i])) {
                return false;
            }
        }
        return true;
    }
}

/**
 * 返回本集合剔除set中所有元素后的集合
 * @param set
 * @returns {Set}
 */
function difference(set) {
    var tempSet = new Set();
    for(var i = 0; i < this.dataStore.length; i++) {
        if(!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}