 function Validation()
 {
	 var Name = document.getElementById("NameId").value;
	 if	(Name.length < 3)
	 {
		 window.alert("too short")
		 return false;
	 }
	 else{
		 return true;
	 }
 }
 
 function Valid( Word)
 {
	 var Name = Word.length;
	 return Name;
 }