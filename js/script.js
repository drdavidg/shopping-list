$(document).ready(function(){

  //Cross out the text of items with the checkbox selected
  $('ul').on('click', 'i', function() {
    $( this ).toggleClass('fa-check-square').toggleClass('fa-square');
    $( this ).closest('li').find('div.lined-box div.todo-item span').toggleClass('has-line');
  });


  //REMOVE TO DO ITEM
  $('body').on('click', 'ul li.line-item .lined-box .button-error', function( event ) {
    console.log( event.target );
    $( event.target ).closest('li.line-item').slideUp(function () {
      $( this ).remove();

    });


    });

   //input validation
   $('body').on('click', '.button-success', function() {
     var inputVal = $('.lined-box-first .todo-item > input').val();
     if (inputVal == "") {
      $('div.validation').text("please enter some text!");
     }
     else {
       $('div.validation').css('display', 'none');
       //ADD TO DO ITEMS

         var itemValue = $('.lined-box-first .todo-item > input').val();
         $('li.template')
           .clone()
           .appendTo('body ul')
           .removeClass('template')
           .find('span').text( itemValue);

       $('body ul').sortable();

     }


   });

  //select all
  $('body').on('click', '.selectall', function() {
    $('li i').removeClass('fa-square').addClass('fa-check-square');
    $('li.template i ').removeClass('fa-check-square').addClass('fa-square');  //uncheck the template li so that future todo items aren't checked by default
    $( this ).prop("checked", false);  //uncheck the check all checbox itself
  });
  //unselect all
  $('body').on('click', '.unselectall', function() {
    $('li i').removeClass('fa-check-square').addClass('fa-square');
    $( this ).prop("checked", false);
  });



// $('body div.line-item').sortable();

});
