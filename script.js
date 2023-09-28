function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
	let myrow =	table.insertRow(0);  

	let cell1 = myrow.insertCell(0);
	cell1.textContent = "New Cell1";
	let cell2 = myrow.insertCell(1);
	cell2.textContent = "New Cell2";
}
