function myfunc(topNumber){
var array = [];
  for (var index = 0; index <= topNumber; index ++){
    array.push[index];
}

  return topNumber;
}



$(function(){
  $("#numbers").submit(function(event){

    var input = $("#one").val();
    var answer = myfunc(input)
    $(".count").append("<li>"  + answer + "</li>");

    event.preventDefault();

  });
});

//
//     var total = 0;
//     for (var startingNumber = 0; startingNumber <= 30; startingNumber += 5){
//
//       if (startingNumber <= 30){
//
//
//         $(".count").append("<li>" + startingNumber + "</li>");
//       }
//     }
// var total = 0
// for ( var newnumber = 0; newnumber<=49; newnumber += 7){
//   if (newnumber <= 49){
//     $(".count2").append("<li>" + newnumber + "</li>");
//   }
// }
