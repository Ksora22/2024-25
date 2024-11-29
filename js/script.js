let IDtr = 1;

function getTableBody() {
    return document.querySelector('#tbody');
}

function createDeleteButton(rowid) {
    const btn = document.createElement('button');
    btn.innerHTML = "Удалить"; 
    btn.setAttribute("class", "button blue");
    btn.addEventListener("click", function() { deleteRow(rowid); });

    return btn;
}

function createCell(cellText) {
    const td = document.createElement('td');
    const cellElement = document.createTextNode(cellText);

    td.prepend(cellElement); 
    return td;  
}

function addRow() {
    
    let input = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    if (input.value === "" || input2.value === "" ) {
alert('Поле пустое');
}
else {
   
    const tbody = getTableBody();
    const tr = tbody.insertRow(0);
    const rowid = 'row_' + (++IDtr);
    tr.setAttribute('id', rowid);
    const td = document.createElement('td');
    tr.prepend(td);
    const btn = createDeleteButton(rowid);
        // btn.onclick = function(){
        //     deleteRow(rowId);
        // };
        
    td.prepend(btn);
   
    //tr.prepend(createDeleteButtonCell(rowid));

    //const tdc = createCell(input2.value);
    tr.prepend(createCell(input2.value)/*tdc*/);
    tr.prepend(createCell(input.value));

    table.prepend(tr);
}
}
//document.addEventListener("click", myDeleteFunction);
//function myDeleteFunction() {
//    document.getElementById("table").deleteRow(0);



// function myFunction(x) { 
//     alert("Row index is: " + x.rowIndex);}


function deleteRow(rowid) {

    if (confirm("are you sure?")) {
        const table = document.getElementById('table');
        const deletingRow = document.getElementById(rowid);
        table.deleteRow(deletingRow.rowIndex);
        // getTableBody().parentNode.deleteRow(document.getElementById(rowid).rowIndex);
    }
}







