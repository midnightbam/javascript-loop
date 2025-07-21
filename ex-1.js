// Exercise #1: Decrease the Student Scores
let studentScores = [89, 70, 60, 50, 100, 71];
let scores = [];
// Start coding here
for (let i = 0; i < studentScores.length; i++) {
  scores.push(studentScores[i] - 10);
};
console.log(scores);