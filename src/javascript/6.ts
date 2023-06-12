const a = 1;

function func1() {
  console.log(a);
}

function func2() {
  const a = 2;
  func1();
}

func2();
