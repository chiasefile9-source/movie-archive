const fs = require('fs');
const path = require('path');

async function fetchMovies() {
    try {
        console.log("Đang gọi API...");
        const response = await fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1');
        const data = await response.json();
        
        // Lấy ngày hiện tại theo múi giờ Việt Nam (GMT+7)
        const now = new Date();
        const vnTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
        const dateString = vnTime.toISOString().split('T')[0];

        const folderPath = path.join(__dirname, 'data');
        
        // Tạo thư mục data nếu chưa tồn tại
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        // Lưu file JSON: ví dụ data/2026-03-29.json
        const filePath = path.join(folderPath, `${dateString}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data.items, null, 2));
        
        console.log(`✅ Đã lưu trữ thành công phim ngày: ${dateString}`);
    } catch (error) {
        console.error('❌ Lỗi hệ thống:', error);
        process.exit(1); // Báo lỗi để GitHub Action biết
    }
}

fetchMovies();
