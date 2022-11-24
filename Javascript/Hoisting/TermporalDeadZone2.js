function fun() {
  let a = 10;
  if (a) {
    let a = a + 10; //error
  }
}
fun();
