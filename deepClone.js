function cloneObj(obj) {
    if ("object" !== typeof (obj)) {
        return obj;
    }
    if ("object" === typeof (obj) && obj instanceof Array) {
        var clonedArray = [];
        obj.forEach((item) => clonedArray.push(cloneObj(item)));
        return clonedArray;
    }
    var cloned = {};
    for (let key in obj) {
        cloned[key] = cloneObj(obj[key]);
    }
    return cloned;
}

//-----unit test///
/*
var data = { a: 1, b: { name: "benjamin", age: 12, drinkable: true, belongs: ["wallet", "watch", { number: "18616894782", price: 11100 }] } };
var dataCopy = cloneObj(data);
console.log(">>>datacopy:", dataCopy);
console.log(">>>equal:", data.b === dataCopy.b); 
*/
