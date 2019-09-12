function categorySuggestions(categories, projects, k) {
  var categoriesList = parseCategories(categories);
  var state = [];
  var result = [];

  projects.forEach(project => {
    //Add each new project to the state w/ relevance of 1
    state = addToState(state, project, 1, k);

    //Search list for matching categories
    for (var i = 0; i < categoriesList.length; i++) {
      if (categoriesList[i].includes(project)) {
        var complement = getComplement(categoriesList[i], project);
        var relevance = categoriesList[i][2];
        //Get the relevance of the matching category and attempt to add
        state = addToState(state, complement, relevance, k);
      }
    }

    //Sort the state before pushing
    state.sort(sortByRel);
    //Create an array with the current state category names
    var current = [];
    for (i = 0; i < state.length; i++) {
      current.push(state[i][0]);
    }
    //Add current array to result array
    result.push(current);
  });

  return result;
}

//Function that converts a list of comma separated strings into a list of arrays
var parseCategories = categories => {
  var list = [];
  for (var i = 0; i < categories.length; i++) {
    list.push(categories[i].split(","));
  }
  return list;
};

//returns the complementary category for a project
var getComplement = (arr, project) => {
  if (arr[0] == project) return arr[1];
  if (arr[1] == project) return arr[0];
};

//Function that attempts to add a new project to the state
//Parameters: state array, project name, relevance score, k
var addToState = (arr, project, relevance, k) => {
  //Check for duplicate, replace if higher relevance
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == project) {
      if (arr[i][1] < relevance) {
        arr.splice(i, 1);
        arr.push([project, relevance]);
        return arr;
      } else {
        return arr;
      }
    }
  }

  //If no duplicates, and state is less than k, push new project
  if (arr.length < k) {
    arr.push([project, relevance]);
    return arr;
  }

  //Replace if there is a lower relevance item in the state
  arr = findMinAndReplace(arr, project, relevance);
  return arr;
};

//Function that, given a 2-D array, finds the element with the min relevance
//and replaces it with given project & relevance if its relevance > min.
var findMinAndReplace = (arr, project, relevance) => {
  var min = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] < min) {
      min = arr[i][1];
    }
  }

  //Find the minimum relevance item and replace it
  if (min < relevance) {
    //Sort and iterate through backwards, so we replace the correct item
    arr = arr.sort(sortByRel);
    for (i = arr.length - 1; i >= 0; i--) {
      if (arr[i][1] === min) {
        arr.splice(i, 1);
        arr.push([project, relevance]);
      }
    }
    //If the relevance scores are equal, compare names
  } else if (min == relevance) {
    arr = arr.sort(sortByRel);
    for (i = arr.length - 1; i >= 0; i--) {
      if (arr[i][0].localeCompare(project) == 1) {
        arr.splice(i, 1);
        arr.push([project, relevance]);
      }
    }
  }
  return arr;
};

//Sort function based on relevance, if equal, sort by name
const sortByRel = (a, b) => {
  if (b[1] > a[1]) {
    return 1;
  } else if (b[1] < a[1]) {
    return -1;
  } else {
    var a = a[0].toUpperCase();
    var b = b[0].toUpperCase();
    return a < b ? -1 : a > b ? 1 : 0;
  }
};
