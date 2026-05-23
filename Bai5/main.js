// // bài tập: tính tổng các số từ 1 đến n  (trong đó n là số nguyên dương và nhập từ bàn phím)
// // var n = 6
// // var tong = 0
// // for (var i = 1 ; i <= n ; i++){
// //     tong = tong + i
// //     // tong +=i
// // }
// // console.log(tong)
// function tinhTong(n) {
//     tong = 0
//     for (var i = 1; i <= n; i++) {
//         tong += i
//     }
//     return tong
// }

// console.log(tinhTong(6))

// function tinhTong_2() {
//     let n = document.getElementById("soN").value; // lấy giá trị từ ô input có id là soN trong html
//     tong = 0
//     for (var i = 1; i <= n; i++) {
//         tong += i
//     }
    
//     // hiển thị 
//     document.getElementById("ketqua").innerHTML = "Tổng từ 1 đến " + n + " là: " + tong
// }
const formDangky = document.getElementById("fomdangki");
formDangky.addEventListener("submit",function(e)
{
    e.preventDefault();
    // lấy thông tin từ form -? tạo object ->? lưu vào local
    const user ={
    name: document.getElementById("hoten").value,
    email : document.getElementById("email").value
};
// luuuw thong tin
localStorage.setItem("user", JSON.stringify(user));
alert("lưu thanh cong");

//rs fom


});
const saveinfo = JSON.parse(localStorage.getItem("user"))
console.log(saveinfo())