function varDemo(){
    var x=100; // local
    console.log("x=",x);
}
// Thực thi hàm
varDemo();

// sử dụng x từ bên ngoài hàm
console.log("x=",x); // error: ReferenceError: x is not defined

