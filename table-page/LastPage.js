let abdAbsent = shimaaAbsent = tabarkAbsent = odayAbsent = amrooAbsent = abrarAbsent = ahmadAbsent = 1;
let abdTask = shimaaTask = tabarkTask = odayTask = abrarTask = ahmadTask = amrooTask = 10;
let abdSolvedTask = shimaaSolvedTask = tabarkSolvedTask = odaySolvedTask = abrarSolvedTask = amrooSolvedTask = ahmadSolvedTask = 9;
let flag = false;
// 

document.getElementById("image-of-user-M").style.display = 'none'
document.getElementById("image-of-user-A").style.display = 'block'

let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) 
let currentUser = JSON.parse(localStorage.getItem("current-user"));

let studentData = JSON.parse(localStorage.getItem('student-data')) || [
    {
        id : 1,
        name : 'Abdelmajied Abu Suliman',
        absent : abdAbsent,
        addTask : abdTask,
        solvedTask : abdSolvedTask,
        MFeedback : "...",
        Afeedback : "...",

    },
    {
        id : 2,
        name : 'Abrar Alhilawy',
        absent : abrarAbsent,
        addTask : abrarTask,
        solvedTask : abrarSolvedTask,
        MFeedback : "...",
        Afeedback : "...",

    },
    {
        id : 3,
        name : 'Ahmad Zytoon',
        absent : ahmadAbsent,
        addTask : ahmadTask,
        solvedTask : ahmadSolvedTask,
        MFeedback : "...",
        Afeedback : "...",

    },
    {
        id : 4,
        name : 'Amroo Al-Wageei',
        absent : amrooAbsent,
        addTask : amrooTask,
        solvedTask : amrooSolvedTask,
        MFeedback : "...",
        Afeedback : "...",
    },
    {
        id : 5,
        name : 'Shimaa Shlouh',
        absent : shimaaAbsent,
        addTask : shimaaTask,
        solvedTask : shimaaSolvedTask,
        MFeedback : "...",
        Afeedback : "...",
    },
    {
        id : 6,
        name : 'Tabark Alhawadi',
        absent : tabarkAbsent,
        addTask : tabarkTask,
        solvedTask : tabarkSolvedTask,
        MFeedback : "...",
        Afeedback : "...",
    },
    {
        id : 7,
        name : 'Oday Al-Ghoul',
        absent : odayAbsent,
        addTask : odayTask,
        solvedTask : odaySolvedTask,
        MFeedback : "...",
        Afeedback : "...",
    }
]

document.getElementById("you-can-change-M").style.display = 'none'
document.getElementById("you-can-change-A").style.display = 'none'

window.localStorage.setItem('student-data' , JSON.stringify(studentData))

let callDataFromLocal = JSON.parse(localStorage.getItem('student-data'))

document.getElementById("select").innerHTML = `<option value='first-select' selected>Select Developer</option>`
callDataFromLocal.forEach( function(element, index) {
    document.getElementById("select").innerHTML += `<option id='${index+1}' value='${index}' class='student'>ID ${index+1} : ${element.name}</option>`
});


function setData() {
        document.getElementById("tableForNew").style.display = 'none'
    
        callDataFromLocal = JSON.parse(localStorage.getItem('student-data'))

        let myValue = document.getElementById('select').value

        if ( myValue == 'first-select'){
            document.getElementById("you-can-change-M").style.display = 'none'
            document.getElementById("you-can-change-A").style.display = 'none'
            document.getElementById("tableContainer").style.setProperty("display", "none", "important") 
            document.getElementById("tableForNew").style.setProperty("display", "none", "important")
            showAllStudent()
            return myValue
        }
        document.getElementById("show-all-student").style.visibility = 'visible'
        if ( myValue != 'first-select'){
            if(currentUser.email == 'mona.salih@yahoo.com'){
                document.getElementById("you-can-change-A").style.display = 'none'
                document.getElementById("you-can-change-M").style.display = 'block'
                
            } else if (currentUser.email == 'Alaa.amayreh2022@yahoo.com') {
                document.getElementById("you-can-change-A").style.display = 'block'
                document.getElementById("you-can-change-M").style.display = 'none'
            }
        }
        document.getElementById("tableContainer").style.display = 'block'
        document.getElementById("tableForNew").style.setProperty("display", "none", "important")
        var html = "<table class='table1' style='width:100%'>";
      
        html += "<tr>" +  "<td>" + `  ID  `                     + "</td>" +    "<td class='center_table1'>" + callDataFromLocal[myValue].id + "</td>"  + "</tr>";
        html += "<tr>" +  "<td>" + `Student Name`               + "</td>" + "<td class='center_table1'>" + callDataFromLocal[myValue].name + "</td>"  + "</tr>";
        html += "<tr>" +  "<td>" + `Number of absent`           + "</td>" +   `<td id='AddAbsentHere' class='center_table1'> ${callDataFromLocal[myValue].absent}/180 <button id='clickToAddAbsent' onclick='increaseAbs(${callDataFromLocal[myValue].absent},${myValue})' > + </button>` + "</tr>";
        html += "<tr>" +  "<td>" + `Number of Total Task`       + "</td>" +  `<td id='AddTaskHere' class='center_table1'>  ${callDataFromLocal[myValue].addTask} <button id='clickToAddTask' onclick='increaseTask(${callDataFromLocal[myValue].addTask},${myValue})' > + </button>` + "</tr>";
        html += "<tr>" +  "<td>" + `Number of Task's Solved`    + "</td>" + `<td id='AddSolvedHere' class='center_table1'> ${callDataFromLocal[myValue].solvedTask} <button id='clickToAddSolved' onclick='increaseSolv(${callDataFromLocal[myValue].solvedTask},${myValue})' > + </button> ` + "</tr>";
        html += "<tr>" +  "<td>" + `Feedback from Coach Mona`   + "</td>" + `<td id='coach-mona-feedback' class='center_table1'> <p id='Mfeedbck'> ${callDataFromLocal[myValue].MFeedback} </p> </td>`  + "</tr>";
        html += "<tr>" +  "<td>" + `Feedback from Coach Alaa`   + "</td>" +  `<td id='coach-alaa-feedback' class='center_table1'> <p id='Afeedbck'> ${callDataFromLocal[myValue].Afeedback} </p> </td>` + "</tr>";
        html += "<tr>" +  "<td>" + `Delete Student`             + "</td>" +  `<td class='center_table1'> <button id='delete-student' class='trash' onclick='clickToRemoveStudent( ${myValue} )'> Remove <i class="fa-regular fa-trash-can"></i> </td> </button> ` + "</tr>"
        
        html += "</table>";
        document.getElementById("tableContainer").innerHTML = html;
}
function increaseAbs(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].absent = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
    document.getElementById("clickToAddAbsent").style.setProperty("display", "none", "important")
    flag = true;
}
function increaseTask(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].addTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
    if (flag == true){
        document.getElementById("clickToAddAbsent").style.setProperty("display", "none", "important")
        flag == false
    }
}
function increaseSolv(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].solvedTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
    if (flag == true){
        document.getElementById("clickToAddAbsent").style.setProperty("display", "none", "important")
        flag == false
    }
}
function sendMfeedback () {
    let myValue = document.getElementById("select").value
    let feedback = document.getElementById("M-give-me-feedback").value;
    callDataFromLocal[myValue].MFeedback = feedback;
    localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal));
    setData()
    document.getElementById("M-give-me-feedback").value = ""
}
function sendAfeedback () {
    let myValue = document.getElementById("select").value
    let feedback = document.getElementById("A-give-me-feedback").value;
    callDataFromLocal[myValue].Afeedback = feedback;
    localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal));
    setData()
    document.getElementById("A-give-me-feedback").value = ""
}
function addNewStudent() {
    document.getElementById("show-all-student").style.visibility = 'visible'
    document.getElementById("you-can-change-M").style.display = 'none'
    document.getElementById("you-can-change-A").style.display = 'none'
    document.getElementById("tableForNew").style.display = 'block'
    // document.getElementById("tableContainer").style.setProperty("display", "none", "important") 
    var addTable = "<table class='table2'  style='width:100%'>";  
    
    addTable += "<tr id='rowForId'>" + "<td>" + `ID for new Student`                         + "</td>" + `<td> ${callDataFromLocal.length + 1 || 1} </td>` + "</tr>";
    
    addTable += "</table>";

    addTable += `<table class='table3'>
                    <tr>
                        <td>
                            <label id='labelMustBeHidden'>Add New Name :</label>
                        </td>
                        <td>
                            <input type='text' id='NN' value=''> *
                        </td>
                    </tr>
                </table>`
    addTable += `<button id='clickToAdd' onclick='addNewData()'>Add Now</button>`
    addTable += `<p id="fill-txt" style="display:none; color:red; font-size:15px">Please fill all the fields</p>`
    document.getElementById("tableForNew").innerHTML = addTable;  
}
function addNewData(){
    newName = document.getElementById(`NN`).value;
    newAbssent = 0
    newTask = 0
    newSolve = 0

    if (newName != ""){
        document.getElementById("select").innerHTML += `<option id='${callDataFromLocal.length + 1}' value='${callDataFromLocal.length + 1}' class='student'>${newName}</option>`
        let newStu = {
        id : callDataFromLocal.length + 1,
        name : newName,
        absent : newAbssent,
        addTask : newTask,
        solvedTask : newSolve,
        MFeedback : "...",
        Afeedback : "...",
        }
        console.log(document.getElementById("select"));
        callDataFromLocal.push(newStu)
        console.log(callDataFromLocal);
        localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal));
        window.location.reload();
        document.getElementById("tableForNew").style.display = 'block'
    } else {
        document.getElementById("fill-txt").style.display = 'block'
    } 
}
function clickToRemoveStudent(index){
    var result = confirm(`Ara you sure that you want to delete ${callDataFromLocal[index].name} from you list ?`)
    if(result){
        console.log(`${callDataFromLocal[index].name} is deleted`);
        let lengthOfSelectOption = document.getElementById("select").length-2
        document.getElementById("tableContainer").style.setProperty("display", "none", "important")
        document.getElementById("select").innerHTML = `<option value='first-select'>Select</option>`
        for ( let i=0 ; i<(lengthOfSelectOption) ; i++ ){
            if (i != index){
            document.getElementById("select").innerHTML += `<option id='${i+1}' value='${i}' class='student'>ID ${i+1} : ${callDataFromLocal[i].name}</option>`
        }else {
            continue
        }}
        
        let removeFromSotre = callDataFromLocal.forEach(function(element, indexOfObj){
            if (indexOfObj == index){
                callDataFromLocal.splice(index, 1)
            }
            localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal))
        });
        document.getElementById("you-can-change-A").style.display = 'none'
        document.getElementById("you-can-change-M").style.display = 'none'
        showAllStudent()
        window.reload()
    }
}
function goToHome(){
    window.location.href = "../landing-page/landing-page.html"
}

function goToProfile(){
    window.location.href = "../profile-page/profileUser.html" 
}

function printAllStudent(){
        var fullTable = "<table class='allStudent' style='width:100%'>";
        fullTable += "<td style='text-align: center;'>" + `ID`                         + "</td>"
        fullTable += "<td style='text-align: center;'>" + `Developer Name`               + "</td>"
        fullTable += "<td style='text-align: center;'>" + `Number of absent/Total days`           + "</td>"
        fullTable += "<td style='text-align: center;'>" + `Number of Total Task`       + "</td>"
        fullTable += "<td style='text-align: center;'>" + `Number of Task's Solved`    + "</td>"
        callDataFromLocal.map(function (element){
            fullTable += "<tr>";
            fullTable += "<td style='text-align: center;'>" + element.id +  "</td>";
            fullTable += "<td style='text-align: center;'>" + element.name +  "</td>";
            fullTable += "<td style='text-align: center;'>" + element.absent + "/180" + "</td>";
            fullTable += "<td style='text-align: center;'>" + element.addTask + "</td>";
            fullTable += "<td style='text-align: center;'>" + element.solvedTask + "</td>";
          fullTable += "</tr>";
        })
        fullTable += "</table>";
        document.getElementById("tableContainer").innerHTML = fullTable;
}


function showAllStudent(){
    document.getElementById("you-can-change-M").style.display = 'none'
    document.getElementById("you-can-change-A").style.display = 'none'
    document.getElementById("tableForNew").style.setProperty("display", "none", "important")
    printAllStudent()
    document.getElementById("tableContainer").style.display = 'block'
    document.getElementById("show-all-student").style.visibility = 'hidden'
    document.getElementById('select').value = 'first-select'
    window.location.reload()
    
}

function clearAll(){
    studentData = {}
    window.localStorage.setItem('student-data' , JSON.stringify(studentData))
    document.getElementById("show-all-student").style.visibility = 'hidden'
    window.location.reload();
}


var fullTable = "<table class='allStudent' style='width:100%'>";
    fullTable += "<td style='text-align: center;'>" + `ID`                         + "</td>"
    fullTable += "<td style='text-align: center;'>" + `Developer Name`               + "</td>"
    fullTable += "<td style='text-align: center;'>" + `Number of absent/Total days`           + "</td>"
    fullTable += "<td style='text-align: center;'>" + `Number of Total Task`       + "</td>"
    fullTable += "<td style='text-align: center;'>" + `Number of Task's Solved`    + "</td>"
    callDataFromLocal.map(function (element){
        document.getElementById("show-all-student").style.visibility = 'hidden'
        fullTable += "<tr>";
        fullTable += "<td style='text-align: center;'>" + element.id +  "</td>";
        fullTable += "<td style='text-align: center;'>" + element.name +  "</td>";
        fullTable += "<td style='text-align: center;'>" + element.absent + "/180" + "</td>";
        fullTable += "<td style='text-align: center;'>" + element.addTask + "</td>";
        fullTable += "<td style='text-align: center;'>" + element.solvedTask + "</td>";
        fullTable += "</tr>";
    })
fullTable += "</table>";
document.getElementById("tableContainer").innerHTML = fullTable;

function goToLanding(){
    window.location.href = "../landing-page/landing-page.html"
}
function goToStudent(){
    window.location.href = "../table-page/LastPage.html"
}


if (currentUser.email == 'Alaa.amayreh2022@yahoo.com'){
    document.getElementById("image-of-user-A").src = "../image/mona.jpg"
    document.getElementById("user-name-home").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("image-of-user-M").style.display = 'none'
    document.getElementById("image-of-user-A").style.display = 'block'

} else if (currentUser.email == 'mona.salih@yahoo.com') {
    document.getElementById("image-of-user-M").src = "../image/mona.jpg"
    document.getElementById("user-name-home").innerHTML = currentUser.firstName + " " + currentUser.lastName
    document.getElementById("image-of-user-M").style.display = 'block'
    document.getElementById("image-of-user-A").style.display = 'none'

} else {
    document.getElementById("user-name-home").innerHTML = currentUser.firstName + " " + currentUser.lastName
}
function logOutNow(){
    window.location.href = "../index.html"
}
function confirmation(){
    var result = confirm("Are you sure to delete?");
    if(result){
      console.log("Deleted")
    }
}