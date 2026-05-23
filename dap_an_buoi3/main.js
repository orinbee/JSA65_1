// Nhập số lượng học sinh
let n = parseInt(prompt("Nhập số lượng học sinh:"));

// Kiểm tra n hợp lệ
while (n <= 0 || isNaN(n)) {
    n = parseInt(prompt("Vui lòng nhập số lượng hợp lệ (>0):"));
}

// Vòng lặp cho từng học sinh
for (let i = 1; i <= n; i++) {

    // Nhập điểm các môn
    let toan = parseFloat(prompt("Nhập điểm Toán của học sinh số " + i + ":"));
    let van = parseFloat(prompt("Nhập điểm Văn của học sinh số " + i + ":"));
    let anh = parseFloat(prompt("Nhập điểm Anh của học sinh số " + i + ":"));

    // Tính điểm trung bình
    let dtb = (toan + van + anh) / 3;

    // Xếp loại
    let danhHieu = "";

    if (dtb >= 8) {
        danhHieu = "Học sinh giỏi";
    }
    else if (dtb >= 6.5) {
        danhHieu = "Học sinh khá";
    }
    else if (dtb >= 5) {
        danhHieu = "Học sinh trung bình";
    }
    else {
        danhHieu = "Học sinh yếu";
    }

    // Hiển thị kết quả
    console.log("Học sinh số " + i);
    console.log("Điểm trung bình: " + dtb.toFixed(2));
    console.log("Xếp loại: " + danhHieu);
}