var input= require('prompt sync')()
array=[10, 49, 149, 232, 45138, 74, 892, 421, 900, 700, 50];
var search = input (' what number to find?')
counter = 0
for (let i = 0; i < array.length; i++){
    if(serach == array[i]){
    counter++
    if (counter !=0)
    console.log(search + ' is found in position: ')
    console.log((i + 1) + ', ');
   }
}
if(counter == 0){
    console.log('Number not found')
}
else{
    console.log(search + 'was found' + counter + 'times!')

