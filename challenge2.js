function likes(names) {
  let arrayLength = names.length;

  if (arrayLength == 1) {
    return names[0] + " like this ";
  } else if (arrayLength == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (arrayLength == 3) {
    return names[0] + " , " + names[1] + "and " + names[2] + " like this";
  } else if (arrayLength >= 4) {
    return (
      names[0] +
      "," +
      names[1] +
      " and " +
      (arrayLength - 2) +
      " others like this"
    );
  } else {
    return "no one likes this";
  }
}

let names = ["john", "smith", "ryan", "mark"];

console.log(likes(names));
