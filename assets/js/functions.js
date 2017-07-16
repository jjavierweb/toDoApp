
//this files container the jquery code to make the actions on the todo app


//check off specific to do and pass line through 
$('ul').on('click', 'li', function(){
  //select the specific to do and toggle class selected
  $(this).toggleClass('selected');
});

//check if delete icon is clicked and remove the to do
$('ul').on('click','.delete', function(event){
 //grab the parent that encloses the element selected and fade it out and remove it
 //after half second
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });

   //stop event from propagate to the parent elements
  event.stopPropagation();
});

//check for a enter keypress on the input and add the new to do to the list
$('input[type="text"]').on('keypress',function(event){
  //checks if user press the enter key
  if(event.which === 13){
    //grabs the ul and inserts a new li with the value of the input as text
    $('ul').append('<li><span class="delete"><i class="fa fa-trash"></i></span> ' + $(this).val() + '</li>');
    //clear input
    $(this).val('');
  }
});

//check if the plus signal is click and show or hide the input
$('.fa-pencil-square-o').on('click',function(){
  //select input of type text and toggle class fadeIn and fadeOut
  $('input[type="text"]').fadeToggle('slow','linear');;
});