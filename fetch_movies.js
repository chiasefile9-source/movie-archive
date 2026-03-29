const fs = require('fs');
const path = require('path');

async function fetchMovies() {
    try {
        const response = await fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1');
        const data = await response.json();
        
        // Lấy ngày hiện tại VN (GMT+7)
        const now = new Date();
        const vnTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
        const dateString = vnTime.toISOString().split('T')[0];

        const folderPath = path.join(__dirname, 'data');
        if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

        const filePath = path.join(folderPath, `${dateString}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data.items, null, 2));
        console.log(`✅ Đã lưu phim ngày: ${dateString}`);
    } catch (error) {
        process.exit(1);
    }
}
fetchMovies();
