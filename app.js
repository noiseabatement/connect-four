const container = document.querySelector(".container");
const containerColumns = [...document.querySelector(".container").children];
const winner = document.querySelector("#winner");
const allDivs = [];
let timesClicked = 0;
let redNumbers = [];
let yellowNumbers = [];

containerColumns.forEach((e) => {
  allDivs.push(...e.children);
});

for (let i = 0; i < allDivs.length; i++) {
  allDivs[i].setAttribute("data-id", i);
}

const winningArray = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [6, 7, 8, 9],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [13, 14, 15, 16],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [19, 20, 21, 22],
  [20, 21, 22, 23],
  [24, 25, 26, 27],
  [25, 26, 27, 28],
  [26, 27, 28, 29],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [32, 33, 34, 35],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [0, 6, 12, 18],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [1, 7, 13, 19],
  [7, 13, 19, 25],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [2, 8, 14, 20],
  [8, 14, 20, 26],
  [14, 20, 26, 32],
  [20, 26, 32, 38],
  [3, 9, 15, 21],
  [9, 15, 21, 27],
  [15, 21, 27, 33],
  [21, 27, 33, 39],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [16, 22, 28, 34],
  [22, 28, 34, 40],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [23, 29, 35, 41],
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [2, 9, 16, 23],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [18, 25, 32, 39],
  [18, 13, 8, 3],
  [24, 19, 14, 9],
  [19, 14, 9, 4],
  [30, 25, 20, 15],
  [25, 20, 15, 10],
  [20, 15, 10, 5],
  [36, 31, 26, 21],
  [31, 26, 21, 16],
  [26, 21, 16, 11],
  [37, 32, 27, 22],
  [32, 27, 22, 17],
  [38, 33, 28, 23],
];

containerColumns.forEach((e) => {
  e.addEventListener("click", () => {
    const children = [...e.children];
    for (let i = 5; i >= 0; i--) {
      if (children[i].className !== "") {
        continue;
      } else {
        children[i].classList.add("clicked");
        const div = document.createElement("div");
        children[i].append(div);
        if (timesClicked % 2 == 0) {
          div.classList.add("red-box");
          redNumbers.push(+children[i].getAttribute("data-id"));
        } else if (timesClicked % 2 != 0) {
          div.classList.add("yellow-box");
          yellowNumbers.push(+children[i].getAttribute("data-id"));
        }
        timesClicked++;
        break;
      }
    }
    for (let i = 0; i < winningArray.length; i++) {
      if (winningArray[i].every((e) => redNumbers.includes(e))) {
        createButton();
        winner.textContent = "Red Wins!";
        container.classList.add("no-click");
        
      } else if (winningArray[i].every((e) => yellowNumbers.includes(e))) {
        createButton();
        winner.textContent = "Yellow Wins!";
        container.classList.add("no-click");
        
      }
    }
  });
});
function createButton() {
    const refresh = document.createElement("button");
    refresh.textContent = "Play Again";
    document.body.append(refresh);
    refresh.addEventListener("click", () => {
      location.reload();
    });
  }
  

