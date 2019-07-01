// let main = document.getElementById('custom');
let ec = $('.en-calendar');
let rc = $('.ru-calendar');
// let firstLanguage = main.lang.options[0];
// console.log(firstLanguage);
// if(main.attr('id') == 'en'){ ec.style.display = 'flex';};
// if(main.attr('id') == 'ru'){ rc.style.display = 'flex';};
// $('#custom').change(function(event){
//     switch($('#custom').val()){
//         case 'e': $('.en-calendar').css("display", "flex"); break;
//         case 'r': $('.ru-calendar').css("display", "flex"); break;
//     }
// });
function StatusSelect(){
    let selected = $('#custom').find('option[selected]');
    if(selected == 'en'){ 
        $('.en-calendar').css("display", "flex");
        console.log('en');
    };
    if(selected == 'ru'){ 
        $('.ru-calendar').css("display", "flex");
        console.log('ru');
    };
    }
// if($('#custom').val() === 'e'){
//     $('.en-calendar').css("display", "flex");
//     console.log('en');
// }
// else if($('#custom').val() === 'r'){
//     $('.ru-calendar').css("display", "flex");
//     console.log('ru');
// }
let namePerson = prompt('Введите имя');
var message = (namePerson === 'Артём') ? 'Директор' :
  (namePerson === 'Максим') ? 'Преподаватель' :
  (namePerson === 'Кирилл') ? 'Куратор' :
  'Студент';

console.log(message);