// let effectIndex = [0, 1, 2, 3];
// let tagLines = [
//   "Blurred Vision",
//   "Anxiety",
//   "Infertility",
//   "Erectile Dysfunction",
// ];
let data = [
  { title: "Blurred Vision", tags: "" },
  { title: "Anxiety", tags: `<img src="./doodle.png">` },
  { title: "Infertility", tags: `<img src="./fertilize-clinic.png">` },
  { title: "Erectile Dysfunction", tags: `<img src="./banana.png">` },
];
let i = 0;
let changeBox = document.querySelector(".word");
let changeLetter = document.querySelector(".change");
let tagLineBox = document.querySelector(".tagline");

changeFunction();

function changeFunction() {
  changeBox.style.opacity = "1";
  console.log(i);
  switch (i) {
    case 0:
      changeLetter.innerHTML = "I";
      changeBox.classList.add("blurEffect");
      tagLineBox.innerHTML = data[i].title;
      setTimeout(() => {
        i = i + 1;
        transiton();
      }, 2000);
      break;
    case 1:
      changeLetter.innerHTML = data[i].tags;
      tagLineBox.innerHTML = data[i].title;
      changeBox.classList.remove("blurEffect");
      setTimeout(() => {
        i = i + 1;
        transiton();
      }, 2000);
      break;
    case 2:
      changeLetter.innerHTML = data[i].tags;
      tagLineBox.innerHTML = data[i].title;
      setTimeout(() => {
        i = i + 1;
        transiton();
      }, 2000);
      break;
    case 3:
      changeLetter.innerHTML = data[i].tags;
      tagLineBox.innerHTML = data[i].title;
      setTimeout(() => {
        i = 0;
        transiton();
      }, 2000);
      break;

    default:
      break;
  }
}

function transiton() {
  changeBox.style.opacity = "0";
  setTimeout(() => {
    changeFunction();
  }, 500);
}
