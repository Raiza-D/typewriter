// const sentence = "hello there from lighthouse labs";

const typewriter = (sentence) => {
  let delay = 0;
  for (const char of sentence) {
  delay += 90;
  setTimeout(() => {
    process.stdout.write(char)
  }, delay);
 } 

  setTimeout(() => {
    console.log("");
  }, delay);  
};

typewriter("hello there from lighthouse labs");
