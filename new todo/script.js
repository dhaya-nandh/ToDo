
var displayTable=document.querySelector(".displayTable")
function dhaya(){
    event.preventDefault()

    var name=document.getElementById("name").value;
    var course=document.getElementById("course").value;
    var gender=document.querySelector("input[name='gender']:checked").value;
    
    var newrow=displayTable.insertRow();
    var cell1=newrow.insertCell(0)
    var cell2=newrow.insertCell(1)
    var cell3=newrow.insertCell(2)
    var cell4=newrow.insertCell(3)

    cell1.textContent=name
    cell2.textContent=course
    cell3.textContent=gender
    

    var button=document.createElement("button")
    button.textContent="Delete"
    button.style.background="red"
    button.onclick=()=>{
    displayTable.deleteRow(newrow.rowIndex)
     }
    cell4.appendChild(button)
 



    
}