function whatIsInAName(collection, source) {
	var arr = [];
	var src = new Object(source);
	var srcKeys = Object.keys(src);
	var collect = new Object(collection);
	var collectKeys = Object.keys(collect);
	var matched = null;
	// src loop, will continue on first match and push to arr on last.
	for(var i = 0; i < srcKeys.length; i++) {
		var prop = srcKeys[i];
		/*
		 1. Collect keys - INDEX of array of objects collect[index] is an object.
		 2. The inner loop is going through the whole collection, OBJ by OBJ
		*/
		for(var j = 0; j < collectKeys.length; j++) {
			if(!collect[j].hasOwnProperty(prop) || (collect[j][prop] !== src[prop])){
				// found match, only need 1, break out
				// matched = collect[j];
				// arr.push(matched);
					// matched = null;
					continue;

			}
			else arr.push(collect[j]); //else keep looking for a match


		}
		// if(matched !== null) arr.push(matched);
		// matched = null;


	}
console.log(arr);
return arr;

	// return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
//should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) 
//should return [{ "a": 1, "b": 2, "c": 2 }].1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });