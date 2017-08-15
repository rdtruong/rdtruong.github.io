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
            $('#sidebar')
                .append($('<section>')
                .attr('id', 'section-recordings'));
                    
            $('#section-recordings')
                .append($('<header>')
                    .attr('id', 'header-recordings')
                    .attr('class', 'header')
                    .text('Recordings'))
                .append($('<ul>')
                    .attr('id', 'list-recordings')
                );
                
            var recordings = data.discography.recordings;  
         _.map(recordings, function (e, i, a){
            
            var divlist=$('<li>').attr('class', 'recording').attr('src', data.discography.recordings[i].art);
            $('#list-recordings').append($(divlist));
                divlist.append($('<div>').attr('class', 'title').text("Title: " + e.title));
                divlist.append($('<div>').attr('class', 'artist').text("Artist: " + e.artist));
                divlist.append($('<div>').attr('class', 'release').text("Release: " + e.release));
                divlist.append($('<div>').attr('class', 'year').text("Year: " + e.year));
            });
            $('#list-recordings').append(recordings)
    
////////////////////////////////////////////////////////////////////////////////       
/////////////////section recording image/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
        $('#header-recordings').append($('<div>')
            .attr('id', 'image-container-recordings')
            .attr('class', 'image-container'));
        $('#image-container-recordings').append($('<img>')
            .attr('src', 'images/album/eastern-rebellion.jpg')
            .attr('class', 'image')
            .attr('id', 'image-recordings'));
        
        ///////////////////////////////////////////////////////////////////////////
///////////////recording picture change//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
          
            
            $('.recording').on('click', function(event) {
                _.each(recordings, function (e, i, a){
            var imgSrc = (data.discography.recordings[i].art).toLowerCase().replace(' ', '-');
            
                let elem = $(event.currentTarget);
                $('#image-recordings').fadeOut('fast', function() {
                    $('.recording').attr('src', imgSrc);
                }).fadeIn('fast');
            });
            })
//       $('.recording').on('click', function(event) {
//             console.log(event)
//         //     //use each function
//         //     var recordingpic=data.recordings[index].art
//         //     $('#image-container-recordings')
//         //     data.discography.recordings.art
            
//         //     1.access the image ($('image-container-recordings')).attr($(img src))
//         //     2. change the img src on click to data.discography.recordings.art
  
// console.log("must change image");
// alert('image change');
// });
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

/////////////////////////////////////////////////////////////////////////////////
//////////////////////// Billy's rider///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

            
            var createTable = function(equipment) {
                var createRow = function(instrument) {
                    var $row = $("<tr>");
                    var $type = $("<td>").text(instrument.type);
                    var $desc = $("<td>").text(instrument.desc)
                        .attr('class', 'instrument-desc');
                    $row.append($type);
                    $row.append($desc);
                    return $row;
                };
                var $table = $("<table>");
                var $rows = equipment.map(createRow);
                $table.append($rows);
                return $table;
            };
            
            // Appends Table to the Sidebar
            $('#sidebar')
                .append($('<section>').attr('id', 'section-rider'));
            createTable(data.rider).appendTo('#section-rider').attr('id', 'table-rider');
            
            // Adds a Header for Table
            $('#section-rider')
                .prepend($('<header>')
                .text("Billy's Rider")
                .attr('class', 'header'));
            
            // Adds a Header for Instrument & Description
            $('#table-rider').prepend($('<th>').text('Description'));
            $('#table-rider').prepend($('<th>').text('Instrument'));



        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


