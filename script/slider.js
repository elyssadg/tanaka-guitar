var counter = 1;
var flag = false;
var currentRadio;

function moveSlides(n) {
    if (slide)
}


function radioClicked(current, newRadio){
    $(current).css("background", "")
    $(newRadio).css("background", "rgb(121, 46, 0)")
    currentRadio = $(newRadio);
}

function clicked(){
    radioClicked(currentRadio, '#manual-btn-1');

    $('#radio-1').click(function(){
        counter = 1;
        flag = true;
        setTimeout(function(){
            flag = false; 
        }, 5000)
        radioClicked(currentRadio, '#manual-btn-1');
    })

    $('#radio-2').click(function(){
        counter = 2;
        flag = true;
        setTimeout(function(){
            flag = false; 
        }, 5000)
        radioClicked(currentRadio, '#manual-btn-2');
    })

    $('#radio-3').click(function(){
        counter = 3;
        flag = true;
        setTimeout(function(){
            flag = false; 
        }, 5000)
        radioClicked(currentRadio, '#manual-btn-3');
    })

    document.getElementById('radio-' + counter).checked = true;

    $('.next-btn').click(function(){
        flag = true;
        counter += 1;
        if (counter > 3){
            counter = 1;
        }
        radioClicked(currentRadio, '#manual-btn-' + counter);
        document.getElementById('radio-' + counter).checked = true;
        console.log(counter)
        setTimeout(function(){
            flag = false; 
        }, 5000) 
    });
   
    $('.prev-btn').click(function(){
        flag = true;
        counter--;
        if (counter < 1){
            counter = 3;
        }
        radioClicked(currentRadio, '#manual-btn-' + counter);
        document.getElementById('radio-' + counter).checked = true;
        console.log(counter)
        setTimeout(function(){
            flag = false; 
        }, 5000)
    });
});