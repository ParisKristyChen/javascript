let tool = "marker";

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool && tool || "pen";
if(tool){
  writingUtensil = tool;
} else {
  writingUtensil = "pen";
}
console.log(`The ${writingUtensil} is mightier than the sword.`);