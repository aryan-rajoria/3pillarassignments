 var form=document.getElementById("forms");
 form.addEventListener('submit',function(event){
    event.preventDefault();
 });

function add_to_list(){
  event.preventDefault();
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["lname"].value;
  var w = document.forms["myForm"]["country"].value;
  var z= document.forms["myForm"]["score"].value;
  var t = validateForm();
  if(t){
    var lists = document.getElementById('lists');
    var node = document.createElement('li');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var p4 = document.createElement('p');
    var textnode1 = document.createTextNode(x);
    var textnode2 = document.createTextNode(y);
    var textnode3 = document.createTextNode(w);
    var textnode4 = document.createTextNode(z);
    p1.appendChild(textnode1);
    p2.appendChild(textnode2);
    p3.appendChild(textnode3);
    p4.appendChild(textnode4);
    node.appendChild(p1);
    node.appendChild(p2);
    node.appendChild(p3);
    node.appendChild(p4);
    lists.appendChild(node);
  }
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var w = document.forms["myForm"]["country"].value;
    var z= document.forms["myForm"]["score"].value;
    if (x == "" || y=="") {
      document.getElementById("alert").style.display="inline-block";
      return false;
    }

    if (z == "" || w=="") {
        document.getElementById("alert").style.display="inline-block";
        return false;
      }
    return true;
    
  }