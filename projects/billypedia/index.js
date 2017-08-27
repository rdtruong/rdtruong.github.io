/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
            $('#section-bio')
                .css('border-radius', '4px');
        
            $('#section-quotes')
                .css('border-radius', '4px');
                
            $('#list-top-rated').css('list-style', 'none');
            $('#section-bio p:last-child').remove();
            
            
            var topRated = data.discography.topRated;
            var listTopRatedItems = _.map(topRated, function(recording) {
                return $('<ul>')
                    .append($('<div>')
                        .text(recording.title)
                        .addClass('title-top-rated')
                        .attr('art', recording.art));
            });
            
           
            $('#list-top-rated')
                .append(listTopRatedItems)
                .css('padding', 5);
                
            
            $('#header-top-rated')
                .append($('<div>')
                    .attr('id', 'image-container-top-rated')
                    .attr('class', 'image-container'));
                    
            $('#image-container-top-rated')
                .append($('<img>')
                    .attr('src', 'images/album/voice-in-the-night.jpg')
                    .attr('class', 'image')
                    .attr('id', 'image-top-rated'));
                    
            
            $('.title-top-rated').on('click', function(event) {
                let elem = $(event.currentTarget);
                $('#image-top-rated').fadeOut('fast', function() {
                    $('#image-top-rated')
                        .attr('src', $(elem).attr('art'));
                }).fadeIn('fast');
            });
            
            
            $('#sidebar')
                .append($('<section>')
                    .attr('id', 'section-recordings'));
                    
            $('#section-recordings')
                .append($('<header>')
                    .attr('id', 'header-recordings')
                    .attr('class', 'header')
                    .text('Recordings')
                    .css('padding', 5)
                    .css('font-size', '25px'))
                .append($('<ul>')
                    .attr('id', 'list-recordings'));
                    
            
            var recordings = data.discography.recordings;
            let listRecordings = _.map(recordings, function(recording) {
                return $('<ul>')
                    .append($('<div>')
                        .text(recording.title)
                        .addClass('title-recordings')
                        .attr('art', recording.art));
            });
            $('#list-recordings').append(listRecordings).css('padding', 5);
            
          
            $('#header-recordings').append($('<div>').attr('id', 'image-container-recordings')
                .attr('class', 'image-container'));
            $('#image-container-recordings').append($('<img>')
                .attr('src', 'images/album/eastern-rebellion.jpg')
                .attr('class', 'image').attr('id', 'image-recordings'));
                
            
            $('.title-recordings').on('click', function(event) {
                let elem = $(event.currentTarget);
                $('#image-recordings').fadeOut('fast', function() {
                    $('#image-recordings').attr('src', elem.attr('art'));
                }).fadeIn('fast');
            });
            

                
            
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
            
            
            $('#sidebar')
                .append($('<section>').attr('id', 'section-rider'));
            createTable(data.rider).appendTo('#section-rider').attr('id', 'table-rider');
            
            
            $('#section-rider')
                .prepend($('<header>')
                .text("Billy's Rider")
                .attr('class', 'header'));
            
            
            $('#table-rider').prepend($('<th>').text('Description'));
            $('#table-rider').prepend($('<th>').text('Instrument'));
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


