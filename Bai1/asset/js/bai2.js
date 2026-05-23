// a = 5
// b = 6
// // // toán tử số học: + - * /
// // cộng
// console.log("Tổng: ",a+b);
// console.log("Hiệu: ",a-b);
// console.log("Tích: ",a*b);
// console.log("Thương: ",a/b);
// // // toán tử gán: =, +=, -=, *=,/=
// // tăng a thêm 5 đơn vị
// console.log("Tổng: ",a+=10);
// console.log("Hiệu: ",a-=10);
// console.log("Tích: ",a*=10);
// console.log("Thương: ",a/=10);
// // // toán tử so sánh:  trả về kết quả là đúng hoặc sai
// // ==: so sánh bằng
// console.log(a == b)
// // >: so sánh lớn hơn
// console.log(a > b)
// // <: so sánh nhỏ hơn
// console.log(a < b)
// // >=: lớn hơn hoặc bằng
// console.log(a >= b)
// // <=: nhỏ hơn hoặc bằng 
// console.log(a <= b)
// // !=: Không bằng
// console.log(a != b)


// // toán tử logic: true - false
// // toán tử AND(&&)- chỉ trả về kết quả True khi cả 2 điều kiện cùng là True ( điều kiên 1 && điều kiện 2)
// console.log(a > b && b < 7)
// // toán tủ OR(||) - chỉ trả về kết quả False khi cả 2 điều kiện cùng là False
// console.log(a > b || b < 7)
// // toán tử NOT(!) - đảo ngược kết quả
// var c = false
// console.log(!c)

// // bài tập: Viết chương trình JS, thực hiện tính
// var age = 17
// if (age >= 18){ // nếu tuổi lớn hơn hoặc bàng 18 thì
//     alert("Bạn đã đủ tuổi");
//     // code xử lý nếu điều kiện này là đúng thì làm gì
//     //....
// }
// else if (age >100){
//     alert("vui lòng kiểm tra lại tuổi, vượt quá mức cho phép")
// }
// else{ // ngược lại thì....
//     alert(" bạn chưa đủ tuổi")
// }


// // BÀI TẬP: TÍNH DANH HIỆU HỌC SINH
// // YÊU CẦU: TÍNH ĐIỂM TRUNG BÌNH TỬ ĐIỂM TOÁN, VĂN, ANH, VÀ ĐƯA RA DANH HIỆU HỌC SINH 
// // 8-10 ĐIỂM: HS GIỎI 
// // 7.9 ĐẾN 6.6: HS KHÁ 
// // CÒN LẠI LÀ HS TB

//Bước 1: Tạo biến luuw giá trị
var diemToan = prompt("Nhập điểm toán: ") // xuất hiện 1 popup cho phép ngDung nhập thông tin -> là datatype String
var diemVan = prompt("Nhập điểm Văn : ")
var diemAnh = prompt("Nhập điểm Anh : ")

//Chuyển từ chữ -> số
diemToan = parseFloat(diemToan)
diemVan = parseFloat(diemVan)
diemAnh = parseFloat(diemAnh)

//Bước 3: Tính điểm TB
var diemTrungBinh = (diemToan + diemVan + diemAnh)/3

//test
//console.log("điểm trung bình: ",diemTrungBinh)
// Bước 4: so sánh
if(diemTrungBinh >=8 && diemTrungBinh <=10 ){
    // hành động nếu điều kiện đúng
    console.log("Học sinh Giỏi")
}
else if (diemTrungBinh >=6.5 && diemTrungBinh <8){
    console.log("Học sinh Khá")
}
else{
    console.log("Học sinh TB")

}