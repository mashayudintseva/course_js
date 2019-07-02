function myFunction(argumentFunc){
    if (typeof(argumentFunc) === "string"){
        console.log(arguments);
        console.log(argumentFunc.trim());
        if (argumentFunc.length >= 30){
            let str = argumentFunc.substr(0, 30).concat("...");
            console.log(str);
        }
        return 'string';
    }
    else{
        alert('Передана не строка');
        return('Передана не строка');
    }
}
console.log('Function', myFunction('    Lorem ipsum dolor sit amet, consectetur adipiscing elit.   '));