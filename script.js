class Render {
  newDiv;
  newText;
  newClassName;
  newBtnDiv;
  constructor(newDivInput, newTextInput, newClassNameInput, newBtnDivInput) {
    this.newDiv = newDivInput;
    this.newText = newTextInput;
    this.newClassName = newClassNameInput;
    this.newBtnDiv = newBtnDivInput;
  }
  print() {
    let newDiv1 = document.createElement(this.newDiv);
    newDiv1.setAttribute("class", "div1");
    let newText1 = document.createTextNode(this.newText);
    newDiv1.appendChild(newText1);
    document.body.appendChild(newDiv1);
  }
  addEvent() {
    let div = document.getElementsByClassName(this.newClassName)[0];
    let newBtn = document.createElement("button");
    newBtn.innerText = this.newBtnDiv;
    newBtn.createTextNode(this.newBtnDiv);
    div.appendChild(newBtn);
    document.body.appendChild(div);
    div.addEventListener("click", () => {
      alert("heloo");
    });
  }
}
let newRender = new Render("div", "heloo", "div1", "ALERT");
newRender.print();
newRender.addEvent();

////////////////////////////////////////////////////////////////////////////////////////////////////////

class newComputer {
  cpu;
  DisplayCard;
  Memory;
  HardDisk;
  DisplayName;
  CumputerName;
  constructor(
    CInput,
    DisplayCardInput,
    MemoryInput,
    HardDiskInput,
    DisplayNameInput,
    CumputerNameInput
  ) {
    this.cpu = CInput;
    this.DisplayCard = DisplayCardInput;
    this.Memory = MemoryInput;
    this.HardDisk = HardDiskInput;
    this.DisplayName = DisplayNameInput;
    this.CumputerName = CumputerNameInput;
  }
}

let newComputer1 = new newComputer(
  "intel",
  "Radeon",
  "8RM",
  "4.4RM",
  "70GB",
  "Sony",
  "YOAV1"
);
let newComputer2 = new newComputer(
  "intel",
  "Geforce",
  "16RAM",
  "2.2G",
  "55GB",
  "JBX",
  "YOAV2"
);
let newComputer3 = new newComputer(
  "AMD",
  "Geforce",
  "32RAM",
  "8G",
  "55GB",
  "LG",
  "YOAV3"
);
console.log(newComputer1);
console.log(newComputer2);
console.log(newComputer3);

class Render {
  newComputer;
  newDiv;
  className;
  BtnDiv;
  newObjects = [];
  constructor(newComputerInput, newDivInput, classNameInput, BtnDivInput) {
    this.newComputer = newComputerInput;
    this.newDiv = newDivInput;
    this.className = classNameInput;
    this.BtnDiv = BtnDivInput;
  }
  addComputers(someComputers) {
    this.newObjects.push(someComputers);
  }
  print() {
    this.newObjects.forEach((newObjects) => {
      let newDiv = document.createElement(this.newDiv);
      newDiv.setAttribute("class", "div");
      let newText = document.createTextNode(this.newObjects);
      newDiv.appendChild(newText);
      document.body.appendChild(newDiv);
      console.log(`this are your computers  ${this.newObjects}`);
    });
  }
  addEvent() {
    let div1 = document.getElementsByClassName(this.ClassName)[0];
    let newBtn = document.createElement("button");
    newBtn.innerText = this.BtnDiv;
    // newBtn.createTextNode(this.newBtnDiv);
    div.appendChild(newBtn);
    document.body.appendChild(div);
    div.addEventListener("click", () => {
      alert("heloo");
    });
  }
}

let newComputer4 = new Render("Yoav1");
newComputer4.addComputers();
newComputer4.print();
let newComputer5 = new Render("Yoav2");
newComputer5.addComputers();
newComputer5.print();
let newComputer6 = new Render("Yoav3");
newComputer6.addComputers();
newComputer6.print();
