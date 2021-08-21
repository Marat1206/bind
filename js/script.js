'use script'

let obj = {
    name: 'marat',
    weight: '75',
}

function info(phone, lastName, age){
    console.log(`Имя: ${this.name}, Фамилия: ${lastName}, Телефон: ${phone}, Вес: ${this.weight}, Возвраст: ${age}, `);
}


let bind = function(func, context) {
    let bindArgs = [].slice.call(arguments,2 );
    return function() {
        let fnArgs = [].slice.call(arguments);
        return func.apply(context, bindArgs.concat(fnArgs));
    };
};

let result = bind(info, obj, '1234', 'zhekov', '25')();






