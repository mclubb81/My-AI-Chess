function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  tbl.setAttribute("id", "chessTable")
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 8; i > 0; i--) {
    // creates a table row
    var row = document.createElement("tr");
	
	var columnletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	
	var whitePieces = ["&#9817","&#9816","&#9815","&#9814","&#9813","&#9812"];
	var blackPieces = ["&#9823","&#9822","&#9821","&#9820","&#9819","&#9818"];
	
    for (var j = 0; j < 8; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("");
	  
	  // Conditions to alternate white and black squares
	  cell.setAttribute("id", i + columnletters[j]);
	  if(i%2 != 0 && j%2 ==0){
		cell.setAttribute("style", "background-color: brown;");  
	  }
	  if(i%2 == 0 && j%2 !=0){
		cell.setAttribute("style", "background-color: brown;");  
	  }
      cell.appendChild(cellText);
	  
	  //Placing pawns in initial cells
	  if(i == 2){
		cell.innerHTML = whitePieces[0];  
	  }
	  if(i == 7){
		cell.innerHTML = blackPieces[0];  
	  }
	  
	  //Placing castles in initial cells
	  if(i == 1 && (j == 0 || j == 7)){
		cell.innerHTML = whitePieces[3];  
	  }
	  if(i == 8 && (j == 0 || j == 7)){
		cell.innerHTML = blackPieces[3];  
	  }
	  
	  //Placing knights in initial cells
	  if(i == 1 && (j == 1 || j == 6)){
		cell.innerHTML = whitePieces[1];  
	  }
	  if(i == 8 && (j == 1 || j == 6)){
		cell.innerHTML = blackPieces[1];  
	  }
	  
	  //Placing rooks in initial cells
	  if(i == 1 && (j == 2 || j == 5)){
		cell.innerHTML = whitePieces[2];  
	  }
	  if(i == 8 && (j == 2 || j == 5)){
		cell.innerHTML = blackPieces[2];  
	  }
	  
	  //Placing queens in initial cells
	  if(i == 1 && j == 4){
		cell.innerHTML = whitePieces[4];  
	  }
	  if(i == 8 && j == 4){
		cell.innerHTML = blackPieces[4];  
	  }
	  
	  //Placing kings in initial cells
	  if(i == 1 && j == 3){
		cell.innerHTML = whitePieces[5];  
	  }
	  if(i == 8 && j == 3){
		cell.innerHTML = blackPieces[5];  
	  }
	  
	  
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}