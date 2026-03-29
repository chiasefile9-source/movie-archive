# 🎬 Movie API Archiver (27NOVVIETSUB Data)

Hệ thống tự động lưu trữ dữ liệu phim hàng ngày từ API Ophim. Dự án này giúp xây dựng một kho dữ liệu lịch sử (Archive) ổn định, phục vụ cho việc hiển thị phim theo ngày và giảm tải cho hệ thống API gốc.

## 🚀 Tính năng chính
* **Tự động hóa 100%**: Sử dụng GitHub Actions để quét dữ liệu mỗi ngày một lần.
* **Lưu trữ lịch sử**: Dữ liệu được lưu dưới dạng file `.json` trong thư mục `/data` theo định dạng `YYYY-MM-DD.json`.
* **Hiệu suất cao**: Truy xuất dữ liệu trực tiếp từ GitHub CDN (Raw Content) giúp tốc độ load trang cực nhanh.
* **Miễn phí**: Hoàn toàn không tốn chi phí server hay database.

## 🛠️ Cấu trúc thư mục
```text
├── .github/workflows/
│   └── cron.yml         # Cấu hình lịch chạy bot (00:00 VN hàng ngày)
├── data/                # Nơi chứa các file JSON dữ liệu theo ngày
├── fetch_movies.js      # Script Node.js thực hiện việc gọi API và lưu file
└── README.md            # Tài liệu hướng dẫn này
