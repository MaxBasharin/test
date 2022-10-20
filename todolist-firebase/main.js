var db = new Firebase("meal-planning-8a36f.firebaseio.com");

$(document).ready(function() {
  db.once("value", function(todosRef){
	  todosRef.forEach(function(todoRef){
      var todo = todoRef.val();
      var key = todoRef.key();
      var description = todo.description;
        $("ul").append("<li key='" + key + "'><span><i class='fa fa-trash'></i></span> " + description + "</li>");
    });
  });  
});



// when a li is clicked in a ul, run this code:
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  // the 1st "this" refers the span
  $(this).parent().fadeOut(500, function(){
    // the 2nd "this" refers to the li that is fading out
    $(this).remove();
  });
  event.stopPropagation(); //this prevents bubbling
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val(); // retrieves value from input
    $(this).val(""); // clears input
    var todoRef = db.push({
      description: todoText
    });
    console.log(todoRef.key(), todoRef);
    var key = todoRef.key();
    // creates new li in ul
    $("ul").append("<li key='" + key + "'><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-chevron-circle-down").click(function(){
  $("input[type='text']").fadeToggle();
});