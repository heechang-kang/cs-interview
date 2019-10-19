function reverse(str) {
    if(!str || str.length <2 || typeof str !== 'string'){
        return 'not valid string';
    }

    const revArray = [];
    const totalItems = str.length-1;

    for(let i=totalItems; i>=0; i--){
        revArray.push(str[i]);
    }
    //console.log(revArray);

    return console.log(revArray.join(''));
}

function reverse2(str) {
    return console.log(str.split('').reverse().join('')); // to use the js methods for ARRAY
}

const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');


reverse('my name is heechangkang');
reverse2('my name is heechangkang');
