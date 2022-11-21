let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) 
let currentUser = JSON.parse(localStorage.getItem("current-user"));

if(currentUser.email == 'mona.salih@yahoo.com'){
    document.getElementById("image-of-user-M").src = "../image/mona.jpg"   
} else if (currentUser.email == 'Alaa.amayreh2022@yahoo.com') {
    document.getElementById("image-of-user-A").style.display = 'block'
    document.getElementById("image-of-user-M").style.display = 'none'
    document.getElementById("image-of-user-A").src = "https://media-exp1.licdn.com/dms/image/C4E03AQFO1f75-n-0Xg/profile-displayphoto-shrink_800_800/0/1656781140615?e=1674086400&v=beta&t=oeJn8JyhW-MtKCxoq6qFg9VPgS5fh1ts2Wi6l_YWGxU"
}

document.getElementById("user-name-home").innerHTML = currentUser.firstName + " " + currentUser.lastName
document.getElementById("email-of-user").innerHTML = currentUser.email

function goToProfile(){
    window.location.href = "../profile-page/profileUser.html"
}
function goToStudent(){
    window.location.href = "../table-page/LastPage.html"
}
function logout(){
    window.location.href = "../index.html"
}
function goToHome(){
    window.location.href = "../landing-page/landing-page.html" 
}