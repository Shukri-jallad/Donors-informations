
let table = document.getElementById('tableOne');

let activ = [];

function Constructor (name,amount) {
 this.name = name;
 this.amount = amount;
 this.ageMin = 18;
 this.ageMax = 30;
 this.result = 0;

 Constructor.allfields.push(this);
 activ.push(this);
 
}

Constructor.allfields = [];

Constructor.prototype.agevalue = function(){
  this.result =  Math.random() * (this.ageMax - this.ageMin) + this.ageMin;
}

Constructor.prototype.render = function(){

    let x = document.createElement('tr');
    table.appendChild(x);

    let y = document.createElement('td');
    x.appendChild(y);
    y.textContent = this.name;

    let z = document.createElement('td');
    x.appendChild(z);
    z.textContent = this.result;
}

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate(event){

    let something = event.target.name.value;
    let second = event.target.amount.value

    new Constructor (something,second);

    savetoLs();

}

function savetoLs(){
   localStorage.setItem('firstItem', JSON.stringify(Constructor.allfields));
}

function getfromLs(){
    let n = localStorage.getItem('firstItem');
    let l = JSON.parse(n);

    if(l){
        l = Constructor.allfields

        new Constructor (l.name[i], l.amount[i]);
    }
}

getfromLs();


for (let i=0 ; i<activ.length ; i++){
    active[i].agevalue();
    active[i].render();
}
