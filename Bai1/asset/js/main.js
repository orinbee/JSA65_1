// bài tạp: tạo 1 nút bấm, khi ng dùng bấm nút thì thời gian giảm về 0
let time = 10; // bắt đầu là 10s
let timer;

// Tạo một hàm đếm ngược
function demNguoc() {
    time = 10;
    // hiển thị nội dung ra label
    document.getElementById("label").innerText = time;
    timer = setInterval(function () {
        time --; // thời gian giảm đi 1
        document.getElementById("label").innerText = time;
        // khi thời gian về 0 thì dừng
        if(time <=0)
        {
            clearInterval(timer);
        }

    },1000)
}
