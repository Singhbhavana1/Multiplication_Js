function getTable() {
    try {
      const number = document.getElementById("number").value;
      const tableData = document.getElementById("tableData");
  
      tableData.innerHTML = "";
  
      if (number === "") {
        tableData.innerHTML = `<p>Please Enter a Number</p>`;
        return;
      }
  
      let tableHTML = "<table>";
  
      for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
      }
  
      tableHTML += `</table>`;
      tableData.innerHTML = tableHTML;
    } catch (e) {
      tableHTML = "Error";
    }
  }
  