var strCompress = () => {
  var str = "aabcccccaaa";
  var i = 0;
  var res = "";
  while (i < str.length) {
    var curr = str[i];
    var count = 0;
    while (curr == str[i]) {
      count++;
      i++;
    }
    res += curr;
    res += count;
  }
  if (res.length > str.length) {
    console.log("compressed str longer");
    return str;
  } else {
    console.log(res);
    return res;
  }
};

strCompress();
