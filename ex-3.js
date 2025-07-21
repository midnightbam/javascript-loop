// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let i =0;i<scores.length;i++){
  if (minScore===undefined||minScore>scores[i]){
    minScore =scores[i];
  }
  
}
console.log(minScore);
