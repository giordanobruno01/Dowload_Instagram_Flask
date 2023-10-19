function test1() {
  var numbers = [1, 2, 3, 4, 5];
  var c = 0;
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] < numbers[i]) {
      c++;
    }
  }
  if (numbers.length - 1 == c) {
    return true;
  } else {
    return false;
  }
}
function test2() {
  seconds = 61;
  bill = 0;

  for (var i = 1; i <= seconds; i = i = i + 60) {
    if (i <= 60) {
      bill = 4;
    } else if (i <= 300) {
      bill = bill + 4;
    } else {
      bill = bill + 3;
    }
  }
  return bill;
}
function test3() {
  string = "LWWW";
  var c = 0;
  for (var i = 0; i < string.length - 1; i++) {
    if (string[i] == "W" && string[i + 1] == "W") {
      c++;
    }
  }
  //   if (string[string.length - 1] == "L") {
  //     console.log(string[string.length - 1]);
  //     c++;
  //   } else if (string[string.length - 1] == "W") {
  //     c++;
  //   }
  c++;
  return c;
}

console.log(test3());
