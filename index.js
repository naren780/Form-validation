
        //  var ischebox    =  false;
        //  var isEmail     =  false;
        //  var isName      =  false;
        //  var isMobile    =  false;
         var selectRow   =  null;
 document.getElementById('submit').onclick=function(a)
{
         a.preventDefault();
        
         onbox();
      
          
           
            

     if(selectRow===null)
    {
                var table          = document.getElementById("table");
                var row            = table.insertRow(-1);  
                var name           = row.insertCell(0);
                var email          = row.insertCell(1);
                var mobile         = row.insertCell(2);
                var country        = row.insertCell(3);
                var state          = row.insertCell(4);
                var distict        = row.insertCell(5);
                var edu            = row.insertCell(6); 

              
                name.innerHTML     = document.getElementById("fullname").value;
                email.innerHTML    = document.getElementById("email").value;
                mobile.innerHTML   = document.getElementById("mbno").value;
                country.innerHTML  = document.getElementById("select1").value;
                state.innerHTML    = document.getElementById("select2").value;
                distict.innerHTML  = document.getElementById("select3").value;
                edu.innerHTML      = `<button type="button" class="btn btn-info"onclick="onEdit(this)">Edit</button>
                                    <button type="button"  class="btn btn-danger"onclick="myFunction(this)" >Delete</button>`;
               
            
        return false;
    }
    else
    {
         onUpdate();
             
    }

}
        
                   


//edit//
function onEdit(td)
{
       selectRow = td.parentElement.parentElement;
   
       document.getElementById("fullname").value = selectRow.cells[0].innerHTML;
       document.getElementById("email").value    = selectRow.cells[1].innerHTML;
       document.getElementById("mbno").value     =  selectRow.cells[2].innerHTML;
       document.getElementById("select1").value  =  selectRow.cells[3].innerHTML;
       document.getElementById("select2").value  =  selectRow.cells[4].innerHTML;
       document.getElementById("select3").value  =  selectRow.cells[5].innerHTML;

}
//update
function onUpdate()
{
       selectRow.cells[0].innerHTML              =   document.getElementById("fullname").value;
       selectRow.cells[1].innerHTML              =   document.getElementById("email").value;
       selectRow.cells[2].innerHTML              =   document.getElementById("mbno").value;
       selectRow.cells[3].innerHTML              =   document.getElementById("select1").value;
       selectRow.cells[4].innerHTM               =   document.getElementById("select2").value;
       selectRow.cells[5].innerHTML              =   document.getElementById("select3").value;
}
//Delete
function myFunction(r)
{

    if(confirm("Do you want delete"))
    {  
        

        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("table").deleteRow(i); 
    }     
    
 }


//Name validation

    
document.getElementById('fullname').addEventListener('keydown', function checkName(evt)
{
        var textCode= evt.textCode?evt.textCode: evt.which;

        if(
         !(textCode<48||textCode>57))

          evt.preventDefault();
 });
    
  
    //phone validation
    

    
document.getElementById('mbno').addEventListener('keydown', function mobileValidation(e)
{
         var key   = e.keyCode ? e.keyCode : e.which;
       
    
        if (key!=8&&( key<48||key>57))
           
             
         e.preventDefault();
 });

//email
function emailvalid(){
    
        var email1 = document.getElementById('email').value;
        var mailrex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email1.match(mailrex))
    { 
        document.querySelector('#email').style.border='2px solid green';
        
        // return true;
        isEmail = true;
    }
    else
    {
        document.querySelector('#email').style.border='2px solid red';
       
        // return false;
        isEmail =false;
    }

}

//checkbox
function onbox()
{
        let chkbox = document.querySelector(".checkbox");
    if(!chkbox.checked)
    {
        alert("select check box");
        ischebox   = false;
      
       
    }
    else
    {
       ischebox   = true;
      
    }
}

//Date
        const present = new Date();
function presentDate()
{
   
        document.getElementById("olddate").innerHTML = (present.getDate()<10?"0":"")+present.getDate()+"/"+(present.getMonth()<10?"0":"")+(present.getMonth()+1)+"/"+present.getFullYear();
}

//Time
function presentTime()
{
       
      
           document.getElementById("oldTime").innerHTML =(present.getHours()<10?"0":"")+ present.getHours()+":"+(present.getMinutes()<10?"0":"")+present.getMinutes()+" " +(present.getHours() < 12 ? "am":"pm");


}




