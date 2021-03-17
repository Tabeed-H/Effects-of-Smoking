"use strict";
let data = [
  {
    title: "Blurred Vision",
    tags: "I",
    link:
      "https://www.everydayhealth.com/vision-center/the-aging-eye/tips/smoking-ups-risk-for-age-related-vision-loss.aspx#:~:text=As%20the%20macula%20wears%20out,the%20cells%20of%20the%20macula.",
  },
  {
    title: "Anxiety",
    tags: `<img src="./doodle.png">`,
    link:
      "https://smokefree.gov/challenges-when-quitting/cravings-triggers/anxiety-smoking",
  },
  {
    title: "Infertility",
    tags: `<img src="./fertilize-clinic.png">`,
    link:
      "https://www.reproductivefacts.org/news-and-publications/patient-fact-sheets-and-booklets/documents/fact-sheets-and-info-booklets/smoking-and-infertility/",
  },
  {
    title: "Erectile Dysfunction",
    tags: `<img src="./banana.png">`,
    link:
      "https://www.healthline.com/health/erectile-dysfunction/impotence-and-smoking",
  },
];
let i = 0;
let container = document.querySelector(".container");
let changeBox = document.querySelector(".word");
let changeLetter = document.querySelector(".change");
let tagLineBox = document.querySelector(".tagline");
let btn = document.querySelector(".link");

window.onload = changeFunction;

function changeFunction() {
  container.style.opacity = "1";

  if (i == 0) {
    changeBox.classList.add("blurEffect");
  } else {
    changeBox.classList.remove("blurEffect");
  }

  changeLetter.innerHTML = data[i].tags;
  tagLineBox.innerHTML = data[i].title;
  btn.href = data[i].link;

  if (i < 3) {
    i = i + 1;
  } else {
    i = 0;
  }

  setTimeout(() => {
    transiton();
  }, 3000);
}

function transiton() {
  container.style.opacity = "0";
  setTimeout(() => {
    changeFunction();
  }, 1000);
}
