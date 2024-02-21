// Lấy tham chiếu đến phần tử slider, các phần tử item, nút next, nút prev, và các điểm (dots)
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

// Độ dài của các phần tử item và biến active để theo dõi phần tử đang được hiển thị
let lengthItems = items.length - 1;
let active = 0;

// Xử lý sự kiện khi nút next được click
next.onclick = function(){
    // Tăng giá trị active, nếu vượt quá độ dài, quay lại phần tử đầu tiên
    active = active + 1 <= lengthItems ? active + 1 : 0;
    // Gọi hàm reloadSlider để cập nhật trạng thái slider
    reloadSlider();
}

// Xử lý sự kiện khi nút prev được click
prev.onclick = function(){
    // Giảm giá trị active, nếu nhỏ hơn 0, chuyển đến phần tử cuối cùng
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    // Gọi hàm reloadSlider để cập nhật trạng thái slider
    reloadSlider();
}

// Thiết lập chuyển động tự động cho slider mỗi 3 giây
let refreshInterval = setInterval(()=> {next.click()}, 3000);

// Hàm reloadSlider để cập nhật trạng thái của slider
function reloadSlider(){
    // Di chuyển slider đến vị trí của phần tử active
    slider.style.left = -items[active].offsetLeft + 'px';

    // Loại bỏ lớp active từ dot cuối cùng và thêm lớp active cho dot tương ứng với phần tử active
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    // Dừng và khởi động lại chuyển động tự động
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}

// Xử lý sự kiện khi dot được click
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         // Cập nhật giá trị active và gọi hàm reloadSlider
         active = key;
         reloadSlider();
    })
})

// Xử lý sự kiện khi kích thước cửa sổ thay đổi
window.onresize = function(event) {
    // Gọi hàm reloadSlider để cập nhật trạng thái slider khi kích thước cửa sổ thay đổi
    reloadSlider();
};
