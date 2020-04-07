spinnerPositions = "| / - \\\n"
let time = 0;

for (let position of spinnerPositions) {

  setTimeout(() => {
    process.stdout.write('\r' + position + "   ");
  }, time += 200);

}