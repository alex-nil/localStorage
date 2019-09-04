
//Hämta Id för knapp
let myBtn = document.getElementById("myBtn");

//Hämta input för text och spara i localstorage 
document.getElementById("usrName").value = localStorage.getItem("name");
//Eventlistener som återskapar användares senaste sparade uppgifter
myBtn.addEventListener("click", skapaLs);

if (document.getElementById("usrName").value) { //Om det finns value i localstorage så kommer allt skrivas ut på sidan.
    skapaLs(); //hämtar funktionen som skapar div och skriver ut localstorage "name"
}


function skapaLs () {
    let usrIn = document.getElementById("usrName").value; //Hämtar value från input
    localStorage.setItem("name", usrIn);                //Sparar i localstorage
    let div = document.createElement("div");            //Skapar div med id"div1"
    div.setAttribute("id", "div1");
    document.body.appendChild(div);

    //Lägger till namn i div
    let para = localStorage.getItem("name")
    div1.innerHTML = para;

    //Skapar en knapp som återställer/raderar
    let erase = document.createElement("button");
    erase.setAttribute("id", "erase");
    div.appendChild(erase).innerHTML = "Radera";
    
    //Radera localstorage med raderaknapp
    let radera = document.getElementById("erase");
    radera.addEventListener("click", raderaLs);
    function raderaLs() {
        document.getElementById("usrName").value = "";  //Återställer input text
        localStorage.removeItem("name");                //Tar bort value från localstorage
        let ersDiv = document.getElementById("div1").remove();  //Tar bort div från sidan
    }
}