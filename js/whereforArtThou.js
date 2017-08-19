function whatIsInAName(collection, source) {
 var arr = [];
 // Only change code below this line
  var collectionObj = new Object(collection);
  var sourceObj = source;
  // Get all keys from collection
  var collectKeys = Object.keys(collectionObj);
  //get all the keys 
  var sourceKeys = Object.keys(sourceObj);
  console.log(sourceKeys[0]);
  for(var t=0; t < sourceKeys.length; t++) { 
    // Get the first key
    var sourceProp = sourceKeys[t];
//     console.log(sourceProp);
    for(var i = 0; i < collectKeys.length; i++) {
      // make a new object from the first index of collection ** CAN contain multiple!
      var insideArr = new Object(collectionObj[i]);
//      console.log(insideArr[sourceProp]);
//     Check to see if the property exists AND if it matches the value of source.prop
    // ** This is where the bug is AND can prob use .hasOwnProperty here instead.
//      console.log(insideArr[sourceProp]);
      if((insideArr[sourceProp]) && 
             (insideArr[sourceProp] ===                                 
                      sourceObj[sourceProp])) {
                          arr.push(insideArr);
                      	 // del 
//                           break;
      }
      else continue;
    }
  }
  console.log(arr);
  return arr;
    }
  
  // Only change code above this line
//   return arr;


whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });