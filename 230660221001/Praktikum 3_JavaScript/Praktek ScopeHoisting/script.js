// ========== GLOBAL SCOPE ==========
let greeting = "Hello Global!";

function showGreeting() {
  console.log(greeting); // bisa diakses karena global
}

// ========== LOCAL (FUNCTION) SCOPE ==========
function localScopeExample() {
  let message = "Hello Local!";
  console.log(message); // OK
  console.log(greeting); // OK juga karena greeting global
}

// ========== BLOCK SCOPE ==========
function blockScopeExample() {
  let score = 80;

  if (score >= 75) {
    let status = "Lulus";
    console.log("Status dalam blok:", status);
  }

  // console.log('Status di luar blok:', status); // ❌ Error - block scope
}

// ========== LEXICAL SCOPE ==========
function outerFunction() {
  let nama = "Agus";

  function innerFunction() {
    console.log("Nama dari lexical scope:", nama);
  }

  innerFunction();
}

// ========== HOISTING VARIABLE ==========
function hoistingVariableExample() {
  console.log(nama); // undefined (karena var di-hoist)
  var nama = "Budi";
}

// let dan const tetap di-hoist tapi tidak bisa diakses sebelum deklarasi
function hoistingLetConst() {
  // console.log(umur); // ❌ Error
  let umur = 21;

  // console.log(nilai); // ❌ Error
  const nilai = 100;

  console.log(umur, nilai);
}

// ========== HOISTING FUNCTION ==========
function functionHoisting() {
  console.log("Function Hoisted!");
}

// ========== HOISTING CLASS ==========
function hoistingClassExample() {
  class Car {
    constructor() {
      this.make = "Toyota";
    }

    displayMake() {
      console.log("Merek Mobil:", this.make);
    }
  }

  const myCar = new Car();
  myCar.displayMake();
}

// ========== Trigger dari HTML ==========
function runScopeExamples() {
  console.clear();
  console.log("=== Scope Examples ===");
  showGreeting();
  localScopeExample();
  blockScopeExample();
  outerFunction();
}

function runHoistingExamples() {
  console.clear();
  console.log("=== Hoisting Examples ===");
  hoistingVariableExample();
  hoistingLetConst();
  functionHoisting();
  hoistingClassExample();
}
