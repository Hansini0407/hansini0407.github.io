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
var btnrandomuser = document.getElementById("btn-random-user")

btnToggle.addEventListener("click", function(){
    // curSelectedIdx=1-curSelectedIdx;
    curSelectedIdx = (curSelectedIdx + 1) % users.length;
    var curObj= users[curSelectedIdx];
    userImage.src=curObj.image;
    userName.textContent=curObj.name;
    userGender.textContent=curObj.gender;
});
btnrandomuser= document.getElementById("btn-random-user");
btnrandomuser.addEventListener("click",function(){
    fetch("https://randomuser.me/api/")
    .then(function (data){
        return data.json();
    })
    .then (function(jsonResponse){
        var curUserobject=jsonResponse.results[0]
        userImage.src=curUserobject.picture.medium;
        userName.textContent=curUserobject.name.title+" "+curUserobject.name.first+" "+curUserobject.name.last;
        userGender.textContent=curUserobject.gender;

    });

});


