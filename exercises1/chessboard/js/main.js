function logChessboard(width, heigth) {

  let str1 = "";
  let str2 = "";
  for (let i = 1; i <= width; i++) {
    if (i % 2) {
      str1 += " #";
    } else {
      str2 += "# ";
    }
  }

  for (let i = 1; i <= heigth / 2; i++) {
    console.log(str1);
    console.log(str2);
  }
}
