let myForm = document.getElementById("transactionForm");
myForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    let formData = new FormData(event.target);
    let myTable = document.getElementById("mytable");
    let tableLength = myTable.rows.length-1;
    var row = myTable.insertRow(tableLength);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = new Date().toLocaleDateString();
    cell2.innerHTML = formData.get("reason");
    cell3.innerHTML = formData.get("type");
    cell4.innerHTML = formData.get("amount");
})

