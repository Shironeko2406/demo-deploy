// Khởi tạo Owl Carousel cho phần hiển thị ý kiến khách hàng
$('.testimonials-container').owlCarousel({
    loop: false, // Lặp lại vô hạn carousel
    autoplay: false, // Tự động chuyển đổi các mục trong carousel
    autoplayTimeout: 6000, // Thời gian chờ giữa các lần chuyển đổi (đơn vị: milliseconds)
    margin: 20, // Khoảng cách giữa các mục trong carousel
    nav: false, // Hiển thị nút điều hướng (prev/next)
    navText: ["<i class='fa-solid fa-arrow-left'></i>", 
              "<i class='fa-solid fa-arrow-right'></i>"], // Biểu tượng cho nút điều hướng trái và phải
    dots: true, // Hiển thị dots
    dotsEach: 2, // Mỗi bao nhiêu mục sẽ có một dot active (ở đây là mỗi 2 mục)
    responsive: {
        0: {
            items: 1, // Số mục hiển thị khi độ rộng màn hình dưới 600 pixels
            nav: false // Ẩn nút điều hướng
        },
        600: {
            items: 1, // Số mục hiển thị khi độ rộng màn hình từ 600 pixels trở lên
            nav: false // Ẩn nút điều hướng
        },
        768: {
            items: 2 // Số mục hiển thị khi độ rộng màn hình từ 768 pixels trở lên
        },
    },
    dotClass: 'owl-dot', // Class cho từng dot
    dotsClass: 'owl-dots', // Class cho container chứa dots
    dotActiveClass: 'active' // Class cho dot active
});
