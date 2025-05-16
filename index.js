


const mycheckbox = document.getElementById ("mycheckbox");
const myairtelmoney = document.getElementById ("myairtelmoney");
const mycard = document.getElementById ("mycard");
const mpesa = document.getElementById ("mpesa");

const myresult = document.getElementById ("myresult");
const subresult = document.getElementById ("subresult");
const mybutton = document.getElementById ("mybutton");



mybutton.onclick = function () {

if (mycheckbox.checked) {
    myresult.textContent = (` You have money!`);}

    else {
        myresult.textContent = (`Please indicate Paid or Not!`);
    }

if (myairtelmoney.checked) {
    subresult.textContent = (`You are using Airtel Money!`);}
 else if (mycard.checked) {
    subresult.textContent = (`You are using a card!`);}
else if (mpesa.checked) {
    subresult.textContent = (`You are using M-Pesa!`);}
}


