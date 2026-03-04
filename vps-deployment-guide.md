# Hướng dẫn chi tiết: Triển khai Next.js Web App lên VPS Vietnix (Ubuntu 24.04 LTS)

Chào bạn, đây là hướng dẫn cực kỳ chi tiết từng bước (Step-by-Step) để bạn có thể tự mình đưa bộ code website Next.js này lên chạy thực tế trên chiếc VPS Vietnix của bạn.

Dựa trên hình ảnh bạn cung cấp, bạn hãy chọn phiên bản **`Ubuntu-24.04-LTS-x64`** nhé. Chữ **LTS** (Long Term Support) có nghĩa là phiên bản hỗ trợ dài hạn, cực kỳ ổn định và phù hợp nhất để làm máy chủ chạy website so với các bản số lẻ.

---

## BƯỚC 1: Cài đặt mới lại Hệ Điều Hành (Reinstall OS)
1. Trên giao diện quản lý VPS của Vietnix, vào mục **Reinstallation** (Cài đặt lại).
2. Tìm và chọn hệ điều hành **`Ubuntu-24.04-LTS-x64`**.
3. Bấm xác nhận cài đặt. Quá trình này sẽ mất tầm 5-10 phút. Toàn bộ dữ liệu cũ trên VPS sẽ bị xoá sạch.
4. Chờ Vietnix gửi email tự động chứa **Thông tin đăng nhập VPS mới (đặc biệt là Mật khẩu Root mới)**.

---

## BƯỚC 2: Kết nối vào VPS để bắt đầu "gõ lệnh"
Có 2 cách để mở màn hình đen (Terminal/Console) điều khiển VPS:
**Cách 1:** Ngay trên web Vietnix, bấm nút **Open Xterm.js Console** hoặc **Open noVNC Console**.
**Cách 2 (Khuyên dùng):** Mở ứng dụng **Command Prompt (CMD)** hoặc **PowerShell** trên máy tính Windows của bạn và gõ:

```bash
ssh root@14.225.220.50
smilingnailswiesbaden@gmail.com
Ss123456788@

```
- Máy tính sẽ hỏi `Are you sure you want to continue connecting (yes/no)?` -> Gõ `yes` và `Enter`.
- Nó sẽ yêu cầu `password:` -> Bạn copy mật khẩu Vietnix cấp qua mail và Paste vào (Lưu ý: trên Linux, lúc bạn gõ/paste mật khẩu, màn hình sẽ KHÔNG HIỆN BẤT CỨ DẤU GÌ, ĐÓ LÀ BÌNH THƯỜNG). Cứ paste rồi ấn `Enter`.

---

## BƯỚC 3: Cài đặt các công cụ nền tảng cho VPS
Khi đã vào được VPS (màn hình hiển thị `root@smilingstudio-mhgr:~#`), bạn copy TỪNG DÒNG lệnh dưới đây và ấn Enter để chạy. Dòng nào chạy xong xuôi mới copy dòng tiếp theo.

**1. Cập nhật hệ thống cho mới nhất:**
```bash
sudo apt update && sudo apt upgrade -y
```

**2. Cài đặt NodeJS (Phiên bản v20) và Git:**
```bash
# Cài đặt Npm, Git và Nginx trước
sudo apt install -y npm git nginx

# Buộc nâng cấp NodeJS lên phiên bản 20 (bản mặc định của Ubuntu 24 bị kẹt ở v18)
sudo npm install -g n
sudo n 20
hash -r
```

**3. Cài đặt Yarn (Trình quản lý gói) và PM2 (Trình giữ cho web luôn chạy ngầm):**
```bash
sudo npm install -g yarn pm2
```
sudo apt install -y nano

---

## BƯỚC 4: Mang code website từ máy bạn lên VPS
Chúng ta sẽ lấy nguyên bộ code hiện tại mà bạn đã đẩy lên GitHub về VPS.

**1. Tải code từ GitHub:**
```bash
git clone https://github.com/ThanhPhong1724/spa_nextjs.git
```

**2. Di chuyển vào thư mục code chính:**
```bash
cd spa_nextjs
```

**3. Cài đặt các thư viện (package) cho dự án:**
```bash
npm install
```

---

## BƯỚC 5: Thiết lập bảo mật (.env) và Đóng gói Website (Build)
Dự án của bạn cần kết nối Database, nên không thể thiếu file cấu hình bảo mật `.env`.

**1. Tạo file .env trên VPS:**
Bạn vẫn đang đứng trong thư mục `spa-nextjs`, gõ lệnh:
```bash
nano .env
```
Màn hình chuyển sang trình soạn thảo chữ:
- Mở file `.env` trên máy tính cá nhân của bạn ra. Copy TOÀN BỘ NỘI DUNG TRONG ĐÓ.
- Quay lại màn hình đen của VPS, **Click chuột phải** để Dán (Paste) đống nội dung đó vào.
- Bấm tổ hợp phím **Ctrl + X**
- Bấm **Y**
- Bấm **Enter** để lưu file.

**2. Đóng gói mã nguồn mượt mà (Tạo bản Production):**
```bash
npm run build
```
*(Quá trình này tốn khoảng 1-3 phút. Nếu màn hình hiện dòng chữ xanh lá cây `✓ Compiled successfully`, bạn đã thành công 90%).*

---

## BƯỚC 6: Bơm sức sống cho Web - Chạy ngầm 24/24 với PM2
Nếu bạn chỉ chạy `npm start`, web sẽ tắt ngóm ngay khi bạn tắt màn hình đen. PM2 giải quyết việc này.

Chạy lần lượt 3 lệnh sau:
```bash
# Lệnh 1: Khởi động server NextJS ngầm, đặt tên là "spa-salon"
pm2 start npm --name "spa-salon" -- start

# Lệnh 2: Lưu trạng thái của PM2
pm2 save

# Lệnh 3: Giúp PM2 tự khởi động lại trang web mỗi khi VPS bị cúp điện/khởi động lại
pm2 startup
```
*(Sau lệnh 3, màn hình hiện ra 1 dãy lệnh `sudo env PATH...`. Hãy copy nguyen dải lệnh đó và dán xuống dưới ấn Enter phát nữa để cấu hình xong).*

---

## BƯỚC 7: Mở cửa đón khách - Cấu hình Nginx
Web đang chạy ở port `3000` (14.225.220.50:3000). Chẳng ai gõ số 3000 đằng sau cả. Nginx sẽ hứng mọi luồng truy cập và giấu số 3000 đi.

**1. Mở file quản lý tên miền mặc định của Nginx:**
```bash
nano /etc/nginx/sites-available/default
```

**2. Tu sửa file:**
- Dùng các nút mũi tên (Lên Xuống Trái Phải) di chuyển và ấn `Backspace`/`Delete` ĐỂ XÓA SẠCH SÀNH SANH TẤT CẢ chữ trong đó.
- Sau khi trống trơn, dán nguyên cụm code này vào:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name 14.225.220.50; 

    # 1. Hứng mọi yêu cầu vào đường dẫn ảnh upload và đọc thẳng từ ổ cứng
    location /uploads/ {
        # ĐƯỜNG DẪN NÀY LÀ ĐƯỜNG DẪN TUYỆT ĐỐI TỚI THƯ MỤC CHỨA CODE CỦA BẠN (Cần check lại nếu đường dẫn VPS của bạn khác)
        alias /root/spa_nextjs/public/uploads/;
        access_log off;
        expires max;
    }

    # 2. Xử lý website Next.js bình thường
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        client_max_body_size 50M; 
    }
}

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name smilingstudio.de www.smilingstudio.de;

    # 1. Hứng mọi yêu cầu vào đường dẫn ảnh upload và đọc thẳng từ ổ cứng
    location /uploads/ {
        # ĐƯỜNG DẪN NÀY LÀ ĐƯỜNG DẪN TUYỆT ĐỐI TỚI THƯ MỤC CHỨA CODE CỦA BẠN (Cần check lại nếu đường dẫn VPS của bạn khác)
        alias /root/spa_nextjs/public/uploads/;
        access_log off;
        expires max;
    }

    # 2. Xử lý website Next.js bình thường
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        client_max_body_size 50M; 
    }
}

- Lưu file giống bước lúc nãy: Bấm **Ctrl + X**, ấn **Y**, ấn **Enter**.

**3. Khởi động lại siêu cổng Nginx để áp dụng liền:**
```bash
sudo systemctl restart nginx
```

---

## 🎉 HOÀN TẤT THÀNH CÔNG RỰC RỠ!
Bây giờ, bạn tắt màn hình hướng dẫn và mở một tab trình duyệt ẩn danh lên.

Gõ thẳng lên trên thanh địa chỉ: **`14.225.220.50`**

Nếu web hiện ra chễm chệ đẹp đẽ, xin chúc mừng, bạn đã tự làm chủ máy chủ thành công!

---
*Lưu ý: Nếu sau này bạn sửa đổi code trên máy cá nhân và commit lên GitHub. Để VPS cập nhật mớ code mới đó, bạn chỉ cần gõ 3 dòng thần chú này vào máy chủ VPS là xong:*
```bash
cd spa_nextjs
git pull origin main
npm run build
pm2 restart spa-salon
```

Lỗi 403 Forbidden (Bị cấm) là do cấu hình bảo mật cực kỳ chặt chẽ mặc định của hệ điều hành máy chủ Linux.

Nguyên nhân gốc rễ: Phần mềm Nginx chạy ngầm dưới quyền một người dùng có tên là www-data (như kiểu 1 user khách vãng lai). Trong khi đó, bộ code cài đặt của bạn lại đang nằm gọn trong thư mục /root/... (đây là thư mục két sắt tuyệt mật của chúa tể cao nhất hệ thống). Do đó, thằng "khách vãng lai Nginx" bị đá văng ra ngoài không cho phép chui vào thư mục /root/ để lấy ảnh đưa cho bạn xem, sinh ra lỗi 403 Bị Cấm.

Cách giải quyết triệt để: Bạn chỉ cần lấy quyền chúa tể (chính là quyền root bạn đang có), cấp phép cho "người ngoài" được quyền lướt qua (chỉ đọc) các thư mục chứa ảnh này.

Bạn dán luân phiên 4 lệnh thần thánh cấp quyền (Change Mode) này vào màn hình đen của VPS và gõ Enter là xong:

chmod 755 /root
chmod 755 /root/spa_nextjs
chmod 755 /root/spa_nextjs/public
chmod -R 755 /root/spa_nextjs/public/uploads
