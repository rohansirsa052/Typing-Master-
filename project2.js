const array = [
  "Hugo told me once that fall was his favorite time of the year. Told me to hold leaves as delicate as you would a pretty girl’s hand. His teeth would then spread wide across his face. Pallid and flaked with brown. Rows of sweet tooth that hadn’t been cleared of duff.",
  "On his days off we’d go hunting for mushrooms in the forest behind our house. “It’s hard to tell which mushrooms are edible,” Hugo would say. Always said, giddy over the possibility of the inedible as he led me through the forest. My studies turned to what you can eat. It didn't matter if it were safe or not.",
  "That day, Hugo pulled me along— his meaty fingers pressed white hot divots into my skin. I followed as quickly as I could, but Hugo was excited, alcohol and smoke wafting off him in ribbons. My shoes filled with filth.",
  "Hugo yanked me forward, grip turning tighter. I tripped and he laughed, still dragging me along over root and rock until we hit a clearing with one solitary tree sitting in its center. Its trunk was devoid of a small swath of bark, smooth even at a distance.",
  "Bark and mush fell haphazard atop a corpse—a fox—carpeted in what looked like to be more mushrooms. They bisected its torso. The mound of mushrooms, which looked like nothing I'd ever seen in Hugo's many, many books, stemmed like a dress from its waist, draping the rest of its body in its fungal carpet. Only its feet were left uncovered. But they were not bare, frost had started its seasonal creep, transforming the Foxes’ paws into glass slippers. Winter’s supine approach had begun, starting with her. I hadn’t realized it when we first arrived. This was a birthplace; a death, anchoring itself to the forest.",
];
const msg = document.getElementById("msg");
const textArea = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;
textArea.disabled = true;
const playGame = () => {
  const randomNumber = Math.floor(Math.random() * array.length);
  msg.innerHTML = array[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerHTML = "Done";
};
const endGame = () => {
  if (textArea.value == "") {
    alert("Please Type Something");
    textArea.disabled = false;
  } else {
    let date = new Date();
    endTime = date.getTime();
    const totalTime = (endTime - startTime) / 1000;
    btn.innerHTML = "Start";
    let totalWords = textArea.value;
    const totalCount = totalWords.split(" ").length;
    const speed = Math.round((totalCount / totalTime) * 60);
    const finalMsg = "Your typing spped is " + speed + " word per minitue ";
    let errors = errorCount(msg.innerHTML, totalWords);
    msg.innerHTML = finalMsg + errors;
    textArea.value = "";
  }
};

errorCount = (str1, str2) => {
  const words1 = str1.split(" ");
  const words2 = str2.split(" ");
  let count = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      count++;
    }
  });
  let errorWords = words2.length - count;

  return (
    count +
    " correct out of " +
    words2.length +
    " words and the total number of errors are " +
    errorWords +
    "."
  );
};

btn.addEventListener("click", function () {
  if (btn.innerHTML == "Start") {
    textArea.disabled = false;
    playGame();
  } else if (btn.innerHTML == "Done") {
    textArea.disabled = true;
    endGame();
  }
});
