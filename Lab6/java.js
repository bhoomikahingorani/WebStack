// document.getElementById("full_name").addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         greet();
//     }
// });

// function greet() {
//     var userName = document.getElementById("full_name").value;
//     document.getElementById('greet').innerHTML = "Hello " + userName + "!";
// }

// function greet() {
//     // Use prompt to get user input
//     var name = prompt('Enter your name:');

//     // Check if the user entered a name
//     if (name !== null && name !== '') {
//         var greetingMessage = 'Hello, ' + name + '!';
//         alert(greetingMessage);
//         return greetingMessage;
//     } else {
//         return 'No name entered.';

//     }
// }

// // Call the greet function
// greet();

function circle() {
    var radius = parseInt(document.getElementById('radius'));
    area = 2 * 3.14 * radius * radius;
    document.getElementById('circle').innerHTML = area;
}