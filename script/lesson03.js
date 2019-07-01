// let main = $('#custom');

// let ec = $('.en-calendar');
// let rc = $('.ru-calendar');
// let firstLanguage = main.lang.options[0];
// console.log(firstLanguage);
// if(main.attr('id') == 'en'){ ec.style.display = 'flex';};
// if(main.attr('id') == 'ru'){ rc.style.display = 'flex';};
// $('#custom').change(function(event){
//     switch($('#custom').val()){
//         case 'english': $('.en-calendar').css("display", "flex"); break;
//         case 'russian': $('.ru-calendar').css("display", "flex"); break;
//     }
// });
// function StatusSelect(){
//     let selected = document.getElementById('custom').value;
//     console.log(selected);
//     if(selected === 'english'){ 
//         $('.en-calendar').css("display", "flex");
//         console.log('e');
//     };
//     if(selected === 'russian'){ 
//         $('.ru-calendar').css("display", "flex");
//         console.log('ru');
//     };
//     }
function StatusSelect(){
    let selected = document.getElementById('custom').value;
    console.log(selected);
    if(selected === 'english'){ 
        $('.en-calendar').css("display", "flex");
        console.log('e');
    };
    if(selected === 'russian'){ 
        $('.ru-calendar').css("display", "flex");
        console.log('ru');
    };
}

    $('#custom').change(function(event){
        switch($('#custom').val()){
            case 'english': $('.en-calendar').css("display", "flex"); break;
            case 'russian': $('.ru-calendar').css("display", "flex"); break;
        }
    });
// if($('#custom').val() === 'e'){
//     $('.en-calendar').css("display", "flex");
//     console.log('en');
// }
// else if($('#custom').val() === 'r'){
//     $('.ru-calendar').css("display", "flex");
//     console.log('ru');
// }
// let namePerson = prompt('Введите имя');
// var message = (namePerson === 'Артём') ? 'Директор' :
//   (namePerson === 'Максим') ? 'Преподаватель' :
//   (namePerson === 'Кирилл') ? 'Куратор' :
//   'Студент';

// console.log(message);