var reader = new FileReader(),
    i=0,
    numFiles = 0,
    imageFiles;

// use the FileReader to read image i
function readFile() {
    reader.readAsDataURL(imageFiles[i])
}

// define function to be run when the File
// reader has finished reading the file
reader.onloadend = function(e) {

    // make an image and append it to the div
    var image = $('<img>').attr({
    	src: e.target.result,
    	width: '222px', 
    	heigth: '292px',
    	class: 'img-thumbnail pull-right',
        id: 'image-preview'
    		});
    $(image).appendTo('#image');
    
};

$('#load_image').change(function() {
    //remove the last preview image
    $('#image-preview').remove();
    
    imageFiles = document.getElementById('load_image').files;
    // get the number of files
    numFiles = imageFiles.length;
    readFile();           

});