let str = prompt('Enter A String: ')
let arr = [...str]
let arr_rev = arr.reverse()
let combined1 = arr_rev.join('')
if(combined1 === str){
    console.log(`${str} is palindrome`)
}
else{
    console.log(`${str} is not palindrome`)
}