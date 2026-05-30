// Quy trình:
// Xây dựng 1 hàm có chức năng lấy thông tin thời tiết từ trang web WeatherAPI
// B1: người dùng nhập tên Thành phố
// Bước 2: Gửi 1 API đến web thời tiết
// B3: Hiển thị thông tin trả về
 async function lay_thong_tin()
{
    // lấy thông tin User nhập thành phố
    const city = document.getElementById('city').value;

    // kiểm tra
    
    if(city ==="")
    {
        alert("Vui lòng nhâp tên thành phố");
        return; // dừng, không chạy các lệnh phía dưới
    }
    const API_key = "7ed327a2a1c440b8ab402735263005"
const URl =
`https://api.weatherapi.com/v1/current.json?key=${API_key}&q=${city}&aqi=no`;

    try {

        const response = await fetch(URl);

        const data = await response.json();

        document.getElementById("weather").innerHTML = `
            <h2>${data.location.name}</h2>

            <p>Nhiệt độ: ${data.current.temp_c}°C</p>

           
        `;

    }
    catch(error){

        console.log(error);

    }

}