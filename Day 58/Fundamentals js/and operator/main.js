alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


let Hour = 12;
let minute = 30;

if (Hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}


// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


alert( 1 && 2 && null && 3 ); // null


alert( 1 && 2 && 3 ); // 3, the last one


let x = 1;
(x > 0) && alert( 'Greater than zero!' );


let y = 1;
if (y > 0) alert( 'Greater than zero!' );