function getKey()  
{ 
    if(event.keyCode==13){  
        AddEvent();
        reset();
    }     
}  

function AddEvent(){
    var x=document.getElementById("ToDo").value;
    if(x!=""){
        var newthing=document.createElement("li");
        var event=document.getElementById("List");
        event.appendChild(newthing);
        newthing.setAttribute("class", "event");
        newthing.innerHTML = x;
    }

    // var par=document.createElement("div");
    // event.lastChild.appendChild(par);
    // par.setAttribute("class", "modify");
    
    var del=document.createElement("button");
    del.appendChild(document.createTextNode("—"));

    event.lastChild.appendChild(del);
    del.onclick=function(){
        del.parentNode.parentNode.removeChild(del.parentNode);
    }
    
    del.setAttribute("class", "del");

    newthing.onclick=function(){
        alert(hh);
    }

}



function reset(){
    document.getElementById("ToDo").value="";
}
