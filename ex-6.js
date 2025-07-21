// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i = companyName.length - 1; i >= 0; i=i-1) {
  reversedCompanyName = reversedCompanyName + companyName[i]; // เอาตัวอักษรทีละตัวมาใส่ต่อท้าย
}
console.log(reversedCompanyName);
