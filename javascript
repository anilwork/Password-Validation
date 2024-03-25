var Strength_score = 0;
var Password = "";
var lowercasealphabets = "abcdefghijklmnopqrstuvwxyz";
var uppercasealphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "0123456789";
var Symbols = "@#$%^&*";
var flag;
onEvent("button1_check", "click", function( ) {
  var input = getText("text_input1");
  if (input="") {
    setText("label3_msg", "enter a valid password");
  } else {
    Uppercase(input);
    Lowercase(input);
    numbers(input);
    symbol(input);
    checklength(input);
  }
  if (Strength_score=10) {
    setText("label1", "strong");
  } else {
    setText("label1", "Weak Password");
    setText("label3_msg", "passwprd atlist must have 1 Uppercase letter[A-Z],1 lowercase letter[a-z],1 special symbol[@#$%^&*],1 number [0-9]");
  }
});
onEvent("button2_reset", "click", function( ) {
  setText("label1", "");
  setText("label3_msg", "");
});
function Uppercase(password) {
  flag=true;
  for (var i = 0; i <= (password.length); i++) {
    if (flag==true) {
      if (uppercasealphabets.includes(password.substring(i, i+1))) {
        Strength_score = Strength_score + 2;
        flag = false;
      }
    }
  }
  
}
function Lowercase(password) {
  flag = true;
  for (var j = 0; j <= (password.length); j++) {
    if (flag==true) {
      if (flag==true) {
        if (lowercasealphabets.includes(password.substring(j, j+1))) {
          Strength_score = Strength_score + 2;
          flag = false;
        }
      }
    }
  }
}
function numbers(password) {
  flag = true;
  for (var k = 0; k <= (password.length); k++) {
    if (flag==true) {
      if (Numbers.includes(password.substring(k, k+1))) {
        Strength_score = Strength_score + 2;
        flag = false;
      }
    }
  }
}
function symbol(password) {
  flag = true;
  for (var l = 0; l <= (password.length); l++) {
    if (flag==true) {
      if (Symbols.includes(password.substring(l, l+1))) {
        Strength_score = Strength_score + 2;
        flag = false;
      }
    }
  }
}
function checklength(password) {
  if (password.length >= 8) {
    Strength_score = Strength_score+2;
  }
}
