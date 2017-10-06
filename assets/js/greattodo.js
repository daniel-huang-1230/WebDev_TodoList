//check off specific todos by clicking

// *** "on" has to be called on already "existing" element so that it 
// can take effect on future added elements inside of it.
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");	

}); 


//click on X to delete Todo
$("ul").on("click", "span",function(event){
	//remove the div (which is the parent element)
	$(this).parent().fadeOut(500,function(){
		$(this).remove(); //call back func, "this" refers to the li
	}); 
	event.stopPropagation(); //prevent event from bubbling to parent classes
});


$("input[type=text]").keypress(function(event){
	if(event.which === 13){  //check for the enter key (code = 13)
		 var todoText = $(this).val(); //grab the input text

		 //clear the input text after hitting enter
		$(this).val("");
		//create a new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");
	}	
});


//toggle the form when clicking on the add icon

$(".fa-pencil-square-o").click(function(){
	$("input[type=text]").fadeToggle ();

});