var x=10; // Global
function varDemo(){
    console.log("Gia trị x ben trong ham:",x);
}
console.log("Gia trị x ben ngoài hàm:",x);

// thực thi hàm
varDemo();

// Gán lại giá trị
x=200;
console.log("x đươc gán lại:",x);
// Khai báo lại
var x="Chung trịnh";
console.log("x=",x);

