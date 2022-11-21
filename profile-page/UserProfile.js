let arrayOfLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
let currentUser = JSON.parse(localStorage.getItem('current-user'));

if (currentUser.email == 'Alaa.amayreh2022@yahoo.com'){
    document.getElementById("profile=pic").src = "https://media-exp1.licdn.com/dms/image/C4E03AQFO1f75-n-0Xg/profile-displayphoto-shrink_800_800/0/1656781140615?e=1674086400&v=beta&t=oeJn8JyhW-MtKCxoq6qFg9VPgS5fh1ts2Wi6l_YWGxU"
    document.getElementById("image-of-user-A").src = "https://media-exp1.licdn.com/dms/image/C4E03AQFO1f75-n-0Xg/profile-displayphoto-shrink_800_800/0/1656781140615?e=1674086400&v=beta&t=oeJn8JyhW-MtKCxoq6qFg9VPgS5fh1ts2Wi6l_YWGxU"
    document.getElementById("user-name-home").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("name-of-user").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("email-of-user").innerHTML = currentUser.email
    document.getElementById("email-of-user11").innerHTML = currentUser.email
    document.getElementById("mobile-of-user").innerHTML = currentUser.number
    document.getElementById("coach-bio").innerHTML = currentUser.coachBio || "Write something here"
    document.getElementById("twitterIcon").href = "https://www.linkedin.com/in/ala%E2%80%99a-amayreh-8797a5176/"
    document.getElementById("githubIcon").href = "https://www.linkedin.com/in/ala%E2%80%99a-amayreh-8797a5176/"
    document.getElementById("linkedinIcon").href = "https://www.linkedin.com/in/ala%E2%80%99a-amayreh-8797a5176/"

} else if (currentUser.email == 'mona.salih@yahoo.com') {
    document.getElementById("profile=pic").src = "https://pps.whatsapp.net/v/t61.24694-24/174570944_302804968719494_5668236056779515453_n.jpg?ccb=11-4&oh=01_AdTRWcuJHJNWTd2a26nWslmv1XTH3e93fpRRorvrebYlCA&oe=63878EB1"
    document.getElementById("image-of-user-M").src = "https://pps.whatsapp.net/v/t61.24694-24/174570944_302804968719494_5668236056779515453_n.jpg?ccb=11-4&oh=01_AdTRWcuJHJNWTd2a26nWslmv1XTH3e93fpRRorvrebYlCA&oe=63878EB1"
    document.getElementById("user-name-home").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("name-of-user").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("email-of-user").innerHTML = currentUser.email
    document.getElementById("email-of-user11").innerHTML = currentUser.email
    document.getElementById("mobile-of-user").innerHTML = currentUser.number
    document.getElementById("coach-bio").innerHTML = currentUser.coachBio || "Write something here"
    document.getElementById("twitterIcon").href = "https://www.linkedin.com/in/mona-al-obisat/"
    document.getElementById("githubIcon").href = "https://github.com/monaSalih"
    document.getElementById("linkedinIcon").href = "https://www.linkedin.com/in/mona-al-obisat/"

} else {
    document.getElementById("profile=pic").src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
    document.getElementById("user-name-home").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("name-of-user").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("email-of-user").innerHTML = currentUser.email
    document.getElementById("email-of-user11").innerHTML = currentUser.email
    document.getElementById("mobile-of-user").innerHTML = currentUser.number
    document.getElementById("coach-bio").innerHTML = currentUser.coachBio || "Write something here"
}
function openTxtArea() {
    document.getElementById("addTxtBio").style.display = 'block'
    document.getElementById("clickToEditBio").style.display = 'none'
}
function editTxtBio(){
    let newBio = document.getElementById("writeBioHere").value
    document.getElementById("coach-bio").innerHTML = newBio
    document.getElementById("writeBioHere").value = ""
    document.getElementById("addTxtBio").style.display = 'none'
    document.getElementById("clickToEditBio").style.display = 'block'
    currentUser['coachBio'] = newBio
    arrayOfLocalStorage[knowingIndex()]['coachBio'] = newBio
    localStorage.setItem("current-user", JSON.stringify(currentUser))
    arrayOfLocalStorage['coachBio'] = newBio
    localStorage.setItem("userInfo", JSON.stringify(arrayOfLocalStorage))
}
function knowingIndex(){
    for ( i=0 ; i<arrayOfLocalStorage.length ; i++ ){
        if (currentUser.email == arrayOfLocalStorage[i].email){
            return i
        }
    }
}
function goToLanding(){
    window.location.href = "../landing-page/landing-page.html"
}
