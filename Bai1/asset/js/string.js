str1 = "Hạ.Long,";
str2 = "Mindx"
// Gộp chuỗi : dùng toàn tử "+"
var ketqua = str1 + str2;
console.log("Kết quả: ",ketqua);

// Đếm ký tự trong chuỗi: length
// đếm xem kết quả có bao nhiêu phần tử
console.log("Chuỗi có ",ketqua.length,"Kí tự")

// tách chuỗi: split("kí tự phân tách")
// var subString = ketqua.split(".");
// console.log("Chuỗi sau khi tách: ",subString);
var str = "Xin chào Quảng Ninh tôi là AI Green";
const words = str.split(" ");
console.table(words)
console.log(words[3])

// viết hoa/thường bên trong chuỗi: toUpperCase/ toLowerCase

var viethoa = str.toUpperCase()
console.log(viethoa)

var noidung = "HOÀNG TRỌNG QUANG"
var vietthuong = noidung.toLowerCase()
console.log(vietthuong)


//replace
var text = "bạn học dốt";
var thaythe = text.replace("học dốt","Hãy cố gắng hơn");
console.log(thaythe)


// Bai 1
var ho_va_ten = "minh phú";
console.log(ho_va_ten[0].toUpperCase())


