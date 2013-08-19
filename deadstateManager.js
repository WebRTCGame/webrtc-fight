var State = function State() {
    Object.call(this);
    this.name;
    this.type;

};
State.prototype = Object.create(Object.prototype);
State.prototype.draw = function draw() {};
State.prototype.onEntry = function onEntry(){};
State.prototype.onUpdate = function onUpdate(){};
State.prototype.onRender = function onRender(){};
State.prototype.onExit = function onExit(){};
State.prototype.changeTo = function changeTo(otherState){
    this.onExit();
    stateManager.currentState = otherState;
    stateManager[otherState].onEntry();
};

function whateva(){
    Object.call(this);
    this.fun = "fun";
};
whateva.prototype = Object.create(Object.prototype, {
    booger : function() {
        console.log("booger");
    }
});
whateva.constructor = whateva;
whateva.prototype.add = function add(){
    console.log(this.fun);
};

var stateManager;
stateManager = Object.create(whateva.prototype);//new whateva();
//stateManager.prototype.currentState = "";
stateManager.add();
stateManager.booger();

//console.log(stateManager.get("key"));
/*
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    // get unprefixed rAF and cAF, if present
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;
    for (var x = 0; x < vendors.length; ++x) {
        if (requestAnimationFrame && cancelAnimationFrame) {
            break;
        }
        requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function(callback, element) {
            var currTime = Date.now();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

        cancelAnimationFrame = function(id) {
            window.clearTimeout(id);
        };
    }

    // put back in global namespace
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
}());
*/
console.log("Loaded hashmap.js");

function Hashmap() {
    Object.call(this);
    this.imap = {};

    this.hasProp = function hasProp(prop) {
        return Object.prototype.hasOwnProperty.call(this.imap, prop);
    };
}

Hashmap.prototype = Object.create({}, {
    add: function add(key, value) {
        if (!this.hasProp(key)) {
            this.imap[key] = value;
            return this.imap[key];
        }
        else {
            return this.imap[key];
        }
    },
    addUnSafe: function addUnSafe(key, value) {
        this.imap[key] = value;
        return this.imap[key];
    },
    change: function change(key, value) {
        if (this.hasProp(key)) {
            this.imap[key] = value;
            return this.imap[key];
        }
        else {
            return undefined;
        }
    },
    get: function get(key) {
        if (this.hasProp(key)) {
            return this.imap[key];
        }
        else {
            return undefined;
        }
    },
    keyByValue: function keyByValue(value) {
        for (var key in this.imap) {
            if (this.hasProp(key)) {
                if (this.imap[key] === value) {
                    return key;
                }
            }

        }
    },
    define: function define(key, _value, _writeable, _enumerable, _configurable) {
        if (!this.hasProp(key)) {
            Object.defineProperty(this.imap, key, {
                value: _value || undefined,
                writable: _writeable || true,
                enumerable: _enumerable || true,
                configurable: _configurable || true
            });
            return this.imap[key];
        }
        else {
            return undefined;
        }
    },
    cloneSafe: function cloneSafe(fromKey, toKey) {
        if (this.hasProp(fromKey)) {
            this.add(toKey, Object.clone(this.imap[fromKey]));
        }
    },
    cloneUnsafe: function cloneUnsafe(fromKey, toKey) {
        if (this.hasProp(fromKey)) {
            this.addUnSafe(toKey, Object.clone(this.imap[fromKey]));
        }
    },
    addWatch: function addWatch(key, watchName, callback) {

        if (this.hasProp(key)) {
            Object.defineProperty(this.imap, watchName, {
                get: function() {
                    return this.imap[key];
                },
                set: function(newValue) {
                    this.imap[key] = newValue;
                    callback();
                },
                enumerable: true,
                configurable: true
            });
        }
    },
    isEnumberable: function isEnumerable(key) {
        if (this.hasProp(key)) {
            return Object.getOwnPropertyDescriptor(this.imap, key).enumerable;
        }
    },
    enumerable: function enumerable(key, bool) {
        if (this.hasProp(key)) {
            Object.defineProperty(this.imap, key, {
                value: this.imap[key],
                enumerable: bool
            });
            return this.imap[key];
        }
        else {
            return undefined;
        }
    },
    isWriteable: function isWriteable(key) {
        if (this.hasProp(key)) {
            return Object.getOwnPropertyDescriptor(this.imap, key).writeable;
        }
    },
    writeable: function writeable(key, bool) {
        if (this.hasProp(key)) {
            Object.defineProperty(this.imap, key, {
                value: this.imap[key],
                writable: bool
            });
            return this.imap[key];
        }
        else {
            return undefined;
        }
    },
    isConfigurable: function isConfigurable(key) {
        if (this.hasProp(key)) {
            return Object.getOwnPropertyDescriptor(this.imap, key).configurable;
        }
    },
    configurable: function configurable(key, bool) {
        if (this.hasProp(key)) {
            Object.defineProperty(this.imap, key, {
                value: this.imap[key],
                configurable: bool
            });
            return this.imap[key];
        }
        else {
            return undefined;
        }
    },
    exists: function exists(key) {
        return this.hasProp(key);
    },
    remove: function remove(key) {
        if (this.hasProp(key)) {
            delete this.imap[key];
        }
        return undefined;
    },
    removeValue: function removeValue(key) {
        if (this.hasProp(key)) {
            this.imap[key] = undefined;
            return this.imap[key];
        }
        else {
            return undefined;
        }
    },
    raw: function raw() {
        return this.imap;
    },
    keys: function keys() {
        return Object.keys(this.imap);
    },
    swap: function swap(key1, key2) {
        var temp1, temp2;
        if (this.hasProp(key1)) {
            if (this.hasProp(key2)) {
                temp1 = Object.clone(this.imap[key1]);
                temp2 = Object.clone(this.imap[key2]);
                this.imap[key1] = temp2;
                this.imap[key2] = temp1;
            }
        }
    },
    clear: function clear() {
        this.imap = {};
    },
    getByIndex: function getByIndex(index) {
        if (this.keys.length > 0) {
            return this.keys(index);
        }
    },
    indexByValue: function indexByValue() {},

    index: function index(key) {},

    removeByValue: function(value) {
        for (var key in this.imap) {
            if (this.hasProp(key)) {
                if (this.imap[key] === value) {
                    delete this.imap[key];
                }
            }

        }
    },

    toArray: function toArray() {
        return this.toString();
    },
    descriptor: function descriptor(key) {
        if (this.hasProp(key)) {
            return Object.getOwnPropertyDescriptor(this.imap, key);
        }
        else {
            return undefined;
        }
    },
    keysToArray: function keysToArray() {
        return Object.keys(this.imap);
    },

    valsToArray: function valsToArray() {},

    toString: function toString() {
        return JSON.stringify(this.imap);
    },
    count: function count() {
        return this.keys.length;
    },
    length: function length() {
        return this.count();
    },
    each: function each(func) {
        for (var prop in this.imap) {
            if (this.hasProp(prop)) {
                func(this.imap[prop]);
            }
        }
    }
   
});
Hashmap.prototype.add = function add() {
    console.log("hashmap add");
};
Hashmap.constructor = Hashmap;