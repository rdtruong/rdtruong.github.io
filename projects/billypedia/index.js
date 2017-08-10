/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
////////////////////////////////////////////////////////////////////////////////  
///////////////////////style////////////////////////////////////    
////////////////////////////////////////////////////////////////////////////////    
        $('#section-bio')
        .css('border-radius', '4px');
        
        $('#section-quotes')
        .css('border-radius', '4px');
/////////////////////////////////////////////////////////////////////////////////       
////////////////////top rated list///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        var topRatedList=_.map(topRated, function(album, i, a){
           var $list= $('<li>');
           $list.text(album.title);
           
           return $list;
           //var $ltr = $('#list-top-rated')
           //$list.appendTo($ltr);
        });
        $('#list-top-rated').append(topRatedList);


///////////////////////////////////////////////////////////////////////////////
////////////////////////////sidebar-section-recording//////////////////////////
///////////////////////////////////////////////////////////////////////////////

        $('#sidebar').append($('<section>').attr('id', 'section-recordings'));
        $('#section-recordings').append($('<header>')
            .attr('id', 'header-recordings')
            .attr('class', 'header')
            .text('Other Recordings'));
        $('#section-recordings').append($('<ul>')
            .attr('id', 'list-recordings'));
            
            
        var recordings = data.discography.recordings;
       
        let listRecordings = _.map(recordings, function (recordings){
            return $('<li>').attr('class', 'recording')
            
                .append($('<div>')
                .attr('class', 'title')
                .text(recordings.title)
                
                );
            });
        $('#list-recordings').append(listRecordings);
        
////////////////////////////////////////////////////////////////////////////////       
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
        $('#header-recordings').append($('<div>')
            .attr('id', 'image-container-recordings')
            .attr('class', 'image-container'));
        $('#image-container-recordings').append($('<img>')
            .attr('src', 'images/album/eastern-rebellion.jpg')
            .attr('class', 'image')
            .attr('id', 'image-recordings'));
        
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
///////////////////////////////////////////////////////////////////////////  
///////////////////billy picture change///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


 $('#image-billy').on('click', function(event) {
                
                let elem = $(event.currentTarget);
                let i = elem.attr('i');
                if (i < data.images.billy.length - 1) {
                    var src = data.images.billy[i++];
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-" + i + ".jpg")
                            .attr('i', i);
                    }).fadeIn('fast');
                }
                else {
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-0.jpg")
                            .attr('i', '0');
                    }).fadeIn('fast');
                }
            });
///////////////////////////////////////////////////////////////////////////
///////////////recording picture change//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
       
        
    //     $('.recording').on('click', function (event){
    //         // console.log(event)
    //         // //use each function
    //         // var recordingpic=data.recordings[index].art
    //         // $('#image-container-recordings')
    //         //data.discography.recordings.art
            
    //         //1.access the image ($('image-container-recordings')).attr($(img src))
    //         //2. change the img src on click to data.discography.recordings.art
            
    //     var billyimage = data.images.billy;
    //     var billypic = $('#image-billy').attr("src");
    //     var billyindex = _.indexOf(billyimage, billypic);
        
            
    //   console.log(event);
    //         if(billyindex === billyimage.length-1)
    //   $('#image-billy').attr('src', billyimage[billyindex +1]);
       
  
// console.log("must change image");
// alert('image change');
// });


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


