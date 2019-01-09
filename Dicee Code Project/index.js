ImageArray = new Array();
ImageArray[0] = 'dice1.png';
ImageArray[1] = 'dice2.png';
ImageArray[2] = 'dice3.png';
ImageArray[3] = 'dice4.png';
ImageArray[4] = 'dice5.png';
ImageArray[5] = 'dice6.png';


function getRandomImage() {
//         // var num = Math.floor( Math.random() * 5);
//         // var img = ImageArray[num];
//         var randoNum = {
//                 num = Math.floor( Math.random() * 5),
//                 img : ImageArray[num],
//                 sol :  document.getElementsByClassName("img1")[0].setAttribute("src",'images/' + img),
//                 func: function() {
//                 return this.sol;
//                 },
//         };

//         var randoNum2 = {
//                 num = Math.floor( Math.random() * 5),
//                 img : ImageArray[num],
//                 sol :  document.getElementsByClassName("img2")[0].setAttribute("src",'images/' + img),
//                 func: function() {
//                 return this.som;
//                 },
//         };
        
//      randoNum.func();
//      randoNum2.func();


var num = Math.floor( Math.random() * 5);
var num2 = Math.floor( Math.random() * 5);
var img = ImageArray[num];
var img2 = ImageArray[num2];

var sol = document.getElementsByClassName("img1")[0].setAttribute("src",'images/' + img);

var som = document.getElementsByClassName("img2")[0].setAttribute("src",'images/' + img2);
  

if(num > num2){
        document.querySelector("h1").innerHTML= "😇 Player One Wins!";
    } else if (num < num2){
        document.querySelector("h1").innerHTML= "Player Two Wins! 😇";
    } else {
        document.querySelector("h1").innerHTML= "🤓 Draw! 🤓";
    };
        
//    function getRandomOne() {
//         var num = Math.floor( Math.random() * 5);
//         var img = ImageArray[num];
//         var sol = document.getElementsByClassName("img1")[0].setAttribute("src",'images/' + img);
//         return sol      
// }

// function getRandomTwo() {
//         var num = Math.floor( Math.random() * 5);
//         var img = ImageArray[num];
//         var som = document.getElementsByClassName("img2")[0].setAttribute("src",'images/' + img);
//         return som      
// }

// function nowCompare(){

// }

// getRandomOne();
// getRandomTwo();



}





