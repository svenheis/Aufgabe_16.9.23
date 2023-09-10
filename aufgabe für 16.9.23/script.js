/* JavaScript umkehren */

let code = "Javascript";

const rückwärts = code.split("").reverse().join("");

console.log(rückwärts);

/* Schaltjahr ausrechnen */

let jahr_1 = 2004;
let jahr_2 = 1900;
let jahr_3 = 1455;
let jahr_4 = 2400;

function rechnung(jahr) {
  const schaltjahr = "Das Jahr " + jahr + " ist ein Schaltjahr";
  const kein_schaltjahr = "Das Jahr " + jahr + " ist kein Schaltjahr";
  if (Number.isInteger(jahr / 4)) {
    /* 1. if  --> Ja = 2.if  Nein = 3.else */
    if (Number.isInteger(jahr / 100)) {
      /* 2. if  --> Ja = 3.if  Nein = 2.else */
      if (Number.isInteger(jahr / 400)) {
        /* 3. if  --> Ja = Schaltjahr  Nein = 1.else */
        console.log(schaltjahr);
      } else {
        /* 1. else */
        console.log(kein_schaltjahr);
      }
    } else {
      /* 2. else */
      console.log(schaltjahr);
    }
  } else {
    /* 3. else */
    console.log(kein_schaltjahr);
  }
}
rechnung(jahr_1);
rechnung(jahr_2);
rechnung(jahr_3);
rechnung(jahr_4);

/* Pangram herausfinden */

let text_1 = "The quick brown fox jumps over the lazy dog";
let text_2 = "irgend ein Satz";

function pangram(text) {
  const abisz = /[a-z]/gm;
  if (text.search(abisz) === 1) {
    console.log("Dieser Text ist ein Pangram");
  } else {
    console.log("In diesem Satz fehlen Buchstaben zu einem Pangram");
  }
}

pangram(text_1);
pangram(text_2);
