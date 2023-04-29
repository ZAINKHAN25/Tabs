function declare(){
var description1 = document.getElementById("description1");
// console.log(description1);
var description2 = document.getElementById("description2");
var description3 = document.getElementById("description3");
}

var historyid = document.getElementById("historyid")
// console.log(historyid);
var visionid = document.getElementById("visionid")
var goalsid = document.getElementById("goalsid")

historyid.addEventListener('click',()=>{
  historyid.classList.add('active')
  declare();
  visionid.classList.remove("active")
  goalsid.classList.remove("active")
  // console.log(description1)
  description1.style.display = "block";
  description2.style.display = "none";
  description3.style.display = "none";
})
visionid.addEventListener('click',()=>{
  visionid.classList.add('active')
  declare();
  historyid.classList.remove("active")
  goalsid.classList.remove("active")
  description1.style.display = "none";
  description2.style.display = "block";
  description3.style.display = "none";
})
goalsid.addEventListener('click',()=>{
  goalsid.classList.add('active')
  declare();
  historyid.classList.remove("active")
  visionid.classList.remove("active")
  description1.style.display = "none";
  description2.style.display = "none";
  description3.style.display = "block";
})