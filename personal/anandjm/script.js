$(document).ready(function () {
    $('.down').click(function(){
        
        if($(this).hasClass("sel"))
        {
            $('.sel>.list').removeClass("clicked");
            $('.sel').removeClass("sel");
        }
        else
        {
            $('.down').removeClass("sel");
            $('.list').removeClass("clicked");
            $(this).addClass("sel");
            $('.sel>.list').addClass("clicked");
        }
    });
});
