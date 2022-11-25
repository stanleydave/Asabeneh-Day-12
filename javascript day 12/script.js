// level 1
// que 1
let text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let regex = /\d+/g;
let money = text.match(regex);
for (let i = 0; i < money.length; i++) {
  money[i] = parseInt(money[i]);
}
let total = money.reduce((sum, num) => {
  return (sum += num);
});
console.log(total);

// que 2
console.log("\n");
let pointsText =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
let pointsRegex = /-?\d+/g;
let points = pointsText.match(pointsRegex);
for (let i = 0; i < points.length; i++) {
  points[i] = parseInt(points[i]);
}
let sort = points.sort((a, b) => a - b);
let distance = sort[sort.length - 1] - sort[0];
console.log(distance);

// que 3
console.log("\n");
function is_valid_variable(name) {
  let regex = /^first_?name$/i;
  return regex.test(name);
}
console.log(is_valid_variable("first/name"));
console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));

// level 2
let sentence =
  "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.";
function tenMostFrequentWords(sentence, num) {
  let regex = /\w+/g;
  let array = sentence.match(regex);
  const arraySet = new Set(array);
  const counts = [];
  for (const w of arraySet) {
    const filteredArray = array.filter((words) => words === w);
    counts.push({ word: w, count: filteredArray.length });
  }

  counts.sort(function (a, b) {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });
  return counts.slice(0, num);
}
console.log(tenMostFrequentWords(sentence, 3));

// level 3
// que 1
console.log("\n");
function cleanText(textC) {
  let regex = /[^a-z0-9\s]/gi;
  let edit = textC.replace(regex, "");
  return tenMostFrequentWords(edit, 3);
}
let textC = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(textC));