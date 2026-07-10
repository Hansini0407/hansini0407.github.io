var users=[
    {name: "John Doe", gender: "Male", image: "john.png"},
    {name:"Jane Doe", gender: "Female", image: "jane.png"},
    {name:"Hansini", gender: "Female", image: "hansini.png"}
];
var curSelectedIdx=0;
var btnToggle = document.getElementById("btn-toggle")
var userImage = document.getElementById("user-image")
var userName = document.getElementById("user-name")
var userGender = document.getElementById("user-gender")

btnToggle.addEventListener("click", function(){
    // curSelectedIdx=1-curSelectedIdx;
    curSelectedIdx = (curSelectedIdx + 1) % users.length;
    var curObj= users[curSelectedIdx];
    userImage.src=curObj.image;
    userName.textContent=curObj.name;
    userGender.textContent=curObj.gender;
});

