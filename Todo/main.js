function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;

    // Create a new row and cells
    const table = document.getElementById('userTable');
    const newRow = table.insertRow();
    const cellName = newRow.insertCell(0);
    const cellAge = newRow.insertCell(1);
    const cellGender = newRow.insertCell(2);
    const cellAddress = newRow.insertCell(3);
    const cellAction = newRow.insertCell(4);

    // Fill cells with form data
    cellName.textContent = name;
    cellAge.textContent = age;
    cellGender.textContent = gender;
    cellAddress.textContent = address;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex);
    };
    cellAction.appendChild(deleteButton);

    // Clear form
    document.getElementById('userForm').reset();
}
