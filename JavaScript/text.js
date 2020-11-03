// const Pre = new Promise((res, req) => {
//   a + b;
//   res(11);
// });

// Pre.catch((val) => {
//   console.log("val", val);
// });

function* Pre() {
  a + b;
  console.log(11);
  yield "name";
}
const p = Pre();
p.throw((item) => {
  console.log("err", item);
});
// const p = new Promise((req, res) => {
//   setTimeout(() => {
//     req(2);
//   }, 100);
// });

// p.then((val) => {
//   console.log(val);
// });
