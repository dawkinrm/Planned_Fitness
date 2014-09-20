function validateFormL() {
	var a = document.forms["login"]["email"].value;
	var atpos = a.indexOf("@");
	var dotpos = a.lastIndexOf(".");
	var b = document.forms["login"]["pass"].value;
	
	var x = a.search(/\s/);
	
	if (a == null || a == "") {
		alert("E-mail is required.");
		return false;
	}
	
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length || x > -1) {
  		alert("Not a valid e-mail address");
  		return false;
	}
	
	if (b == null || b == "") {
		alert("A password is required to log in.");
		return false;
	}
}

function validateFormR()
{
var a=document.forms["register"]["firstname"].value;
var b=document.forms["register"]["lastname"].value;
var c=document.forms["register"]["email"].value;
var atpos=c.indexOf("@");
var dotpos=c.lastIndexOf(".");
var d=document.forms["register"]["pass"].value;
var e=document.forms["register"]["passconfirm"].value;


var x=a.search(/\s/);
var y=b.search(/\s/);
var z=c.search(/\s/);

if (a==null || a=="")
	{
		alert("First name is required!");
		return false;
	}
	
if (x > -1)
	{
		alert("Not a valid first name!");
		return false;
	}
  
if (b==null || b=="")
	{
  		alert ("Last name is required");
  		return false;
	}
	
if (y > -1)
	{
		alert("Not a valid last name!");
		return false;
	}
	
if (c==null || c=="")
	{
		alert ("E-mail is required!");
		return false;
	}	
  
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length || z > -1)
	{
  		alert("Not a valid e-mail address");
  		return false;
	}

if (d==null || d=="")
	{
  		alert ("Password is required!");
  		return false;
	}
	
if (e == null || e == "" || e != d)
	{
		alert ("Passwords do not match!");
		return false;
	}
}