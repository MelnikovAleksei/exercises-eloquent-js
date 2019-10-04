  function logTriangleFor (heigth) {
    let part = ""
    for (let i = 0; i <= heigth; i++) {
      part += "#"
      console.log(part);
    }
  }
  function logTriangleDoWhile (heigth) {
    let part = "";
    do {
      part += "#";
      console.log(part);
    } while (part.length <= heigth)
  }
