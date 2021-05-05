var listpizza=[
"mixedvegpizza","peperonnipizza","chickenpizza", "cheesepizza"
]
function showmenu(){
    var htmldata;
    htmldata= "<ol class='menulist'>"
  listpizza.sort();
  for (var i = 0; i < listpizza.length; i++) {
       htmldata=htmldata+ '<li>' +listpizza[i] +'</li>'
      
  }  
  htmldata=htmldata+ "</ol>"
  document.getElementById("display").innerHTML = htmldata; 
}
function add_item(){
    var htmldata
    var item=document.getElementById("add_item").value
    listpizza.push(item);
    listpizza.sort();
    htmldata= "<section class='cards'>"
  for (var i = 0; i < listpizza.length; i++) {
       htmldata=htmldata+ '<div class="card">' + '<img src= "images/pizzaImg.png"/>'+ listpizza[i] +'</div>'
      
  }  
  htmldata=htmldata+ "</section>"
  document.getElementById("displayaddmenu").innerHTML = htmldata; 
} 