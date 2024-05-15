let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);

//The output is 'String One','String One' & 'true' in that order without the quotation marks.
//This is because;In javascript property key is translated as a string even if you enter a number
//obj[1] is translated as obj['1'] and the vaue 'One' is stored as its value
//obj['1'] sets the same property to 'String One'
//As a result the obj['1'] overwrites the first one.
//since obj[1] and obj['1'] are translated the same way,their values  are equal hence 'true"