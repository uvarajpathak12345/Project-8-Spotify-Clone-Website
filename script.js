$(document).ready(function() {
    $(".zoomButton").hover(
        function() {
            $(this).css({ 
                transform: 'scale(1.05)', // Adjust the scale factor for zoom-in
            });
        },
        function() {
            $(this).css({ 
                transform: 'scale(1)', // Reset to original size for zoom-out
            });
        }
    );
});

function ram(index) {
    let elements = document.querySelectorAll('.all');
    let b = elements[index - 1].querySelector('#img');
    b.style.opacity = 1;
    console.log("Mouse over div " + index);
}

function sita(index) {
    let elements = document.querySelectorAll('.all');
    let b = elements[index - 1].querySelector('#img');
    b.style.opacity = 0;
    console.log("Mouse out div " + index);
}



