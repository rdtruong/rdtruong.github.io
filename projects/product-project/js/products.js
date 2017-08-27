/* global $ */
$(document).ready(function() {
    // ALL YOUR CODE GOES BELOW HERE //
 $.getJSON('data/product.json', function (product) {
////////////////////////////////////////////////////////////////////
////////////////////show item on page/////////////////////////
////////////////////////////////////////////////////////////////////
    $('main').attr('id', 'mainContent').append($('<div>').attr('id','imageContainerThumb'));
        _.map(product, function (e, i, a){

            var divlist=$('<li>')
                .attr('class', 'product');
                //.append($('<img>').attr('src', 'img/product/thumbs/' + e.image).attr('id', 'image'));

            $('#imageContainerThumb').append($(divlist));
             //   divlist.append($('<a>').attr('href', 'img/product/' + e.image).append($('<img>').attr('src', 'img/product/' + e.image).attr('class', 'imageFullsize')));
                divlist.append($('<img>').attr('src', 'img/product/thumbs/' + e.image).attr('class', 'image').attr('href', 'img/product/' + e.image));
                divlist.append($('<div>').attr('class', 'type').text("type: " + e.type).css({fontWeight: 'bold',
                                                                                                fontSize: '20px'}));
                divlist.append($('<div>').attr('class', 'desc').text("desc: " + e.desc).css({fontSize:'20px'}));
                divlist.append($('<div>').attr('class', 'specs').text("specs: " + e.specs));
                divlist.append($('<div>').attr('class', 'availableColors').text("availableColors: " + e.availableColors).css({fontWeight:'bold'}));
                divlist.append($('<div>').attr('class', 'price').text("price: $" + e.price).css({color: 'red',
                                                                                                    fontSize: '25px'}));
                divlist.append($('<div>').attr('class','textremove').text(e.image).hide());
                
   
    

});

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////modal on img click/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

$('img').on('click', function(){
    var src= $(this).attr('href');
    //alert (src)
    $('.imagetesting123').remove();
    ($('#myModal').modal('show'));
    $('.modal-body').append(($('<img>').attr("src", src).attr('class', 'imagetesting123').attr("width", 350)));
    
    
});


////////////////////////////////////////////////////////////////////////////////
/////////////////////<!-- Trigger the modal with a button -->///////////////////
////////////////////////////////////////////////////////////////////////////////
$('main').append($('<button>').attr('type' ,'button')
                                .attr('class','"btn btn-info btn-lg"')
                                .attr('data-toggle','modal')
                                .attr('data-target','#myModal'));
///////////////////<!-- Modal -->//////////////////////////////////////////////
$('main').append($('<div>')
                    .attr('id', 'myModal')
                    .attr('class','modal fade')
                    .attr('role', 'dialog'));
    $('#myModal').append($('<div>').attr('class', 'modal-dialog'));
///////////////////<!-- Modal content-->////////////////////////////////////////
        $('.modal-dialog').append($('<div>').attr('class','modal-content'));
            $('.modal-content').append($('<div>').attr('class','modal-header'));
                $('.modal-header').append($('<button>')
                                            .attr('class','close')
                                            .attr('data-dismiss','modal')
                                            .text('close'));
                $('.modal-header').append($('<h4>').attr('class','modal-title').text('not actual size').css({color: 'red',
                                                                                                            fontSize: '30px'
                }));
            $('.modal-content').append($('<div>').attr('class','modal-body'));
                // $('.modal-body').text('product goes here')
                //                 .append($('<img>').attr('src',''));
            $('.modal-content').append($('<div>').attr('class','modal-footer'));
            
                // $('.modal-footer').append($('<button>').attr('class', 'btn btn-default')
                //                                         .attr('data-dismiss','modal')
                //                                         .text('close bottom right'));
////////////////////////////////////////////////////////////////////////////////////////////
/////////////nav bar///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
 $('nav').append($('<section>').attr('id', 'navbar').append($('<div>').attr('class','dropdown')));
        
        $('.dropdown').append($('<button>').attr('onclick','myFunction()').attr('class','dropbtn').text('Menu'));
        $('.dropdown').append($('<div>').attr('id','type').attr('class','dropdown-content'));
            $('#type').append(' <a href="#">PHONE</a>');
            $('#type').append(' <a href="#">CASE</a>');
            $('#type').append(' <a href="data/product.json">json</a>');
////////////////////////////////////////////////////////////////////////
////////////////search function//////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
       
        // $('#navbar').append($('<button>').attr('type', 'text').attr('id','search').text('SEARCH'));
        
        
        
        
        $('#navbar').append($('<input>').attr('type', 'text')
                                        .attr('id','query'))
                                        .append($('<button>')
                                                    .attr('type', 'submit')
                                                    .attr('id','search')
                                                    .attr('value', 'Search')
                                                    .text('SEARCHing'));

//   <input type="text" id="link-box"/>
//  <input type="button" id="search-button" value="Search" 
//         onclick="window.location = document.getElementById('.product').value;"/>
//////////////////////////////////////////////
  ////////////////working search///////////////
  ///////////////////////////////////////////////
//   $('#navbar').append($('<input>').attr('type', 'text')
//                                      .attr('id','query')
//                                      .attr('placeholder', 'enter search here'));
            // function contains(text_one, text_two) {
            //     if(text_one.indexOf(text_two) != -1)
            //         return true;
            // }
            // $('#query').keyup(function(){
            //      var query = $('#query').val().toLowerCase();
            //     $('div li').each(function(){
            //         if(!contains($(this).text().toLowerCase(), query))
            //             $(this).hide();
            //         else
            //             $(this).show();
            //     });;
            // });

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////search recursion///////////////////////////
////////////////////////////////////////////////////////////////
$('#search').on('click',function(){
    var input = $('#query').val().toLowerCase();
    $('.product').each(function(){
    var searched = $(this).text().toLowerCase();
    $(this).closest('.product')[searched.indexOf(input) !== -1 ?'show': 'remove']();
 });
});
$('#query').keypress(function(e){
    if(e.which == -1){
        $('#search').click();
    }
});











/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
 }); //end of $.getJson

});

