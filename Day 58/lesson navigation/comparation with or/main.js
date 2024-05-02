let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)


let users = "John";

alert(users ?? "Anonymous"); // John (user is not null/undefined)


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


let firstname = null;
let lastname = null;
let nickname = "Supercoder";

// shows the first truthy value:
alert(firstname || lastname || nickname || "Anonymous"); // Supercoder


let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0


let heights = null;
let widths = null;

// important: use parentheses
let area = (heights ?? 100) * (widths ?? 50);

alert(area); // 5000


// // without parentheses
// let area = height ?? 100 * width ?? 50;

// // ...works this way (not what we want):
// // let area = height ?? (100 * width) ?? 50;


// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works

alert(x); // 2


// set height=100, if height is null or undefined
height = height ?? 100;







