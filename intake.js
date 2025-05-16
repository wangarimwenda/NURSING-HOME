const mymonday = document.getElementById ("mymonday");
const myteusday = document.getElementById ("myteusday");
const mywednesday = document.getElementById ("mywednesday");    
const mythursday = document.getElementById ("mythursday");
const myfriday = document.getElementById ("myfriday");
const mysaturday = document.getElementById ("mysaturday");
const mysunday = document.getElementById ("mysunday");
const mysubmit = document.getElementById ("mysubmit");
const myresult = document.getElementById ("myresult");
const subresult = document.getElementById ("subresult");


mysubmit. onclick = function () {

if (mymonday.checked) {
    myresult.textContent = (`You have selected Monday!`);}
else if (myteusday.checked) {
    myresult.textContent = (`You have selected Tuesday!`);}
else if (mywednesday.checked) {
    myresult.textContent = (`You have selected Wednesday!`);}   
else if (mythursday.checked) {
    myresult.textContent = (`You have selected Thursday!`);}
else if (myfriday.celecthecked) {
    myresult.textContent = (`You have selected Friday!`);}
else if (mysaturday.checked) {
    myresult.textContent = (`You have selected Saturday!`);}
else if (mysunday.checked) {
    myresult.textContent = (`You have selected Sunday!`);}
else {
    myresult.textContent = (`Please select a day!`);
};

}

