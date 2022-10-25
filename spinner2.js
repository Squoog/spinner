let delay = 0;
let spinArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < spinArray.length*5; i++) {
  for (let j = 0; j < 4; j++) {
    setTimeout(() => {
      process.stdout.write(spinArray[j]);
    }, delay);
  delay += 100;
  }
}