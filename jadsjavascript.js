window.onload = function(){

console.log('Hello world I am the js file');

document.getElementById('jadsspecialsection').innerHTML = 'pizza';
if (1 + 1 === 3){
    document.getElementById('jadsspecialsection').innerHTML = 'burger';
}

for (let i = 0; i < 7; i++){
    if (i == 6){
        console.log('gizzer')
    } else {
        console.log('gooser')
    }
}

}