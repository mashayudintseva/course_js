$('#custom').change(function(event){
    switch($('#custom').val()){
        case 'english': $('.en-calendar').css("display", "flex"); break;
        case 'russian': $('.ru-calendar').css("display", "flex"); break;
    }
});