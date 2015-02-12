/**
 * Created by rodick on 15-2-12.
 */
function HashTable() {
    this.table = new Array(137);
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
    this.buildChains = buildChains;//开链法
}

function betterHash(data) {
    const H = 37;
    var total = 0;
    for(var i = 0; i < data.length; ++i) {
        total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0) {
        total += this.table.length - 1;
    }
    console.log("Hash value: " + data + " -> " + parseInt(total));
    return parseInt(total);
}

function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if(this.table[pos][index] === undefined) {
        this.table[pos][index] = key;
        this.table[pos][index + 1] = data;
    }else {
        while(this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index] = key;
        this.table[pos][index + 1] = data;
    }
}

function get(key) {
    var index = 0;
    var pos = this.betterHash(key);
    if(this.table[pos][index] === key) {
        return this.table[pos][index + 1];
    }else {
        index += 2;
        while(this.table[pos][index] != key && this.table[pos][index] != undefined) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }
}

function buildChains() {
    for(var i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
    }
}

function showDistro() {
    for(var i = 0; i < this.table.length; ++i) {
        if(!(this.table[i][0] === undefined)) {
            console.log(i + ": " + this.table[i]);
        }
    }
}