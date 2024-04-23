let modalEl=document.getElementById("modal");
let cookieFormEl=document.getElementById("cookieForm");
let modalX=document.getElementById("modal-close-btn");
let formEl=document.getElementById("infoForm");
let buttonEl=document.getElementById("accept");
let modalText=document.getElementById("modal-text");
let declineBtn=document.getElementById("decline");
let buttons=document.getElementById("form-buttons")

setTimeout(() => {
    modalEl.style.display="inline"
}, 1500);

modalX.addEventListener("click", function(){
    modalEl.style.display="none"
})

declineBtn.addEventListener("mouseenter", function(ev){
    ev.preventDefault()
    console.log("delete button hovered")
    buttons.classList.toggle("reverse");
})

formEl.addEventListener("submit", function(ev){
    ev.preventDefault(); 

    modalText.innerHTML=`
    <div class="modal-inner-loading">
        <img src="./images/loading.svg" class="loading">
        <p id="uploadText">Uploading your data to dark web</p>
    </div>
    `

    setTimeout(() => {
        document.getElementById("uploadText").textContent="Selling your data";
    }, 1500);

    setTimeout(() => {
        modalX.disabled=false;
        formEl.style.display="none";
        document.getElementById("modal-inner").innerHTML=`
        <h2>Thanks  ${fullName} </h2>
        <p>We just sold the rights to your eternal soul</p>
        <div class="idiot-gif">
            <img src="images/laugh.gif">
        </div>
        `
    }, 3000);

    let data=new FormData(formEl);
    let fullName=data.get("name");
    console.log(fullName)

   
})