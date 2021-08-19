'use script'

let obj = {
    name: 'marat'
}

function someFunc(lastName, age){
    console.log((`Имя: ${this.name}, Фамилия: ${lastName}, Возвраст: ${age}`));
}

function bind(func, context, ...rest){
    return function (){
        const ID = Date.now().toString();

        context[ID] = func;

        const result = context[ID](...rest);

    }
}

bind(someFunc, obj, 'Zhekov', '25')();