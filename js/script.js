let IDtr = 1;
function myFunction() {
    
    let input = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    if (input.value === "" || input2.value === "" ) {
alert('Поле пустое');
}
else {
   
    let tbody = document.querySelector('#tbody');
    let tr = tbody.insertRow(0);
    tr.setAttribute('id', ++IDtr);
        let td = document.createElement('td');
        tr.prepend(td);
       let trIndex = tr.rowIndex;
        const btn = document.createElement('button');
        btn.innerHTML = 'Удалить'; 
        document.getElementById('button').appendChild(btn);
        btn.onclick = function(){
            tbody.deleteRow(trIndex)
        //alert ("Номер " + trIndex)
        //     //confirm('Are you sure?')
           
        };
        td.prepend(btn);
   

    let td2 = document.createElement('td');
        tr.prepend(td2);
        let cellText2 = document.createTextNode(input2.value);
    td2.prepend(cellText2);

    let td3 = document.createElement('td');
    tr.prepend(td3);
    let cellText3 = document.createTextNode(input.value);
td3.prepend(cellText3);
table.prepend(tr);
}
}
//document.addEventListener("click", myDeleteFunction);
//function myDeleteFunction() {
//    document.getElementById("table").deleteRow(0);



// function myFunction(x) { 
//     alert("Row index is: " + x.rowIndex);}


// function deleteRow(rowid) {
//     var row = document.getElementById(rowid);
//     if (row) {
//        row.parentNode.removeChild(row);
//     }
//  }







