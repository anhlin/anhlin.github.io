//This solution is O(n log n), since kMaxPairs() sorts an array of size n.
//All other functions are O(n).
function bestPros(pros, k) {
  //Create our hashtable. Key, value pairs will be {i, PMS(pros[i])}
  //for each index i.
  var hashTable = fillHashtable(pros);

  //Get the k highest PMS pairs sorted in descending order
  var pmsArray = kMaxPairs(hashTable, k);

  //Replace the values with their respective keys (their original indices)
  for (var i = 0; i < pmsArray.length; i++) {
    pmsArray[i] = pmsArray[i][0];
  }
  return pmsArray;
}

//Calculates the PMS of a pro given max distance, distance, and rating
var calcPMS = (maxDist, dist, rating) => {
  return (maxDist - dist) * rating;
};

//Function that returns the max distance,
//given a list of [distance, rating] tuples
var getMaxDist = pros => {
  var maxDist = 0;
  pros.forEach(pro => {
    if (pro[0] > maxDist) {
      maxDist = pro[0];
    }
  });
  return maxDist;
};

//Function to fill our HashTable.
var fillHashtable = pros => {
  var hashTable = {};
  //Get the max distance
  var maxDist = getMaxDist(pros);

  //Iterate through pros
  for (var i = 0; i < pros.length; i++) {
    let dist = pros[i][0];
    let rating = pros[i][1];

    //Calculate the PMS for the pro
    let pms = calcPMS(maxDist, dist, rating);

    //Put {i : PMS(pros[i])} pair in hashtable
    hashTable[i] = pms;
  }
  return hashTable;
};

//Function that returns a list of the k greatest value pairs in a hashtable
var kMaxPairs = (hashTable, k) => {
  var pairArray = [];

  //Push each pair into an array so we can sort it
  for (var key in hashTable) {
    pairArray.push([key, hashTable[key]]);
  }

  //Sort in descending order based on value
  //If there is a tie, sort ascending by key
  pairArray.sort((a, b) => {
    if (b[1] > a[1]) {
      return 1;
    } else if (b[1] < a[1]) {
      return -1;
    } else {
      return a[0] - b[0];
    }
  });

  //Return first k pairs (k highest values)
  return pairArray.slice(0, k);
};
