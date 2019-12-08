var database = [
    {
        username: "dew",
        password: "123"
    },
    {
        username: "sai",
        password: "123"
    }
];

var newsfeed = [
    {
        username: "dew",
        timeline: "learning"
    },
    {
        username: "sai",
        timeline: "cooking"
    },
    {
        username: "patty",
        timeline: "reading"
    }
];

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === user && 
            database[i].password === pass) {
                return true;
            }
        }
        return false;
}

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function signin(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    } else {
        alert("Sorry!, wrong username or password");
    }
};

// 1. The myth
// 2. Framework
// 3. MVC
// 4. UI - bootstrap
// 5. Database - Must have
// 6. Security - Authentiation, Login 
// 7. 


// function signin(user, pass) {
//     for (var i=0; i < database.length; i++) {
//         if (database[i].username === user && 
//             database[i].password === pass) {
//                 console.log(newsfeed);
//                 console.log("Hello " + database[i].username);
//             } else {
//                 alert("Sorry!, wrong username or password");
//             }
//     }
//    if (user === database[0].username && pass === database[0].password) {
//     //    return true;
//        console.log(newsfeed);
//    } else {
//        alert("Sorry, wrong username and password!");
//    };
// };

signin(usernamePrompt, passwordPrompt); 