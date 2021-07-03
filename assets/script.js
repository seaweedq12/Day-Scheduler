var currentdate = $('#currentDay');
var hournow = moment().hour();

///////////////////time display on the header/////////////////////
function displayTime(){
    var now =  moment().format('dddd, MMMM Mo');
    currentdate.text(now);  
}

/////////////////////background for textareas///////////////////////
$(function ($) {
    
    $("textarea").addClass(function () {
        var timeval = $(this).parent().children('p').attr('id');
        var returnval = "";
        if(timeval < hournow){
            returnval = "past description";
            return returnval;
        }else if(timeval == hournow){
            returnval = "present description";
            return returnval;
        }else{
            returnval = "future description";
            return returnval;
        }
    }); 
    
});
///////////////save button//////////////////
$('.saveBtn').on('click', function(){
    var value = $(this).parent().children('textarea').val();
    var areaId = $(this).parent().children('textarea').attr('id');
    localStorage.setItem(areaId, value);
});
//////////////code that retrieves the inputs///////////////
$(function ($) {
    if (typeof (window.localStorage) != "undefined") {
        $("textarea").val(function () {
            return localStorage.getItem(this.id);
        }); 
    }
});




setInterval(displayTime, 1000);