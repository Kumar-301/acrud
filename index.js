var selectRow = null;

function onformSubmit(){
    var formData = readFormData();
    if(selectRow==null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
        
    }
    resetForm();
    
    
}
function readFormData(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["desigination"]=document.getElementById("desigination").value;
    formData["salary"]=document.getElementById("salary").value;
    return formData;

}
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.desigination;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a href="#" onClick="onEdit(this)">Edit</a>
    <a href="#" onClick="onDelete(this)">Delete</a>`
}

function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("desigination").value="";
    document.getElementById("salary").value="";
    selectRow=null;

}
function onEdit(td){
    selectRow = td.parentElement.parentElement;
    document.getElementById("name").value= selectRow.cells[0].innerHTML;
    document.getElementById("desigination").value= selectRow.cells[1].innerHTML;
    document.getElementById("salary").value= selectRow.cells[2].innerHTML;

}
function updateRecord(formData){
    selectRow.cells[0].innerHTML = formData.name;
    selectRow.cells[1].innerHTML = formData.desigination;
    selectRow.cells[2].innerHTML = formData.salary;

}
function onDelete(td){
    if(confirm('Are you sure want to delete this record')){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
    }
} 
 