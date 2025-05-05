-- Tạo bảng người dùng (gồm cả khách hàng và luật sư)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    role ENUM('customer', 'lawyer') NOT NULL,
    specialty VARCHAR(100), -- Chỉ áp dụng cho luật sư
    is_guest BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45),
    status ENUM('online', 'offline') DEFAULT 'offline'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tạo bảng cuộc trò chuyện
CREATE TABLE IF NOT EXISTS conversations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    lawyer_id INT NOT NULL,
    started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    ended_at DATETIME,
    status ENUM('active', 'closed', 'pending') DEFAULT 'pending',
    last_message_at DATETIME,
    last_message_preview VARCHAR(255),
    assigned_by INT,
    FOREIGN KEY (customer_id) REFERENCES users(id),
    FOREIGN KEY (lawyer_id) REFERENCES users(id),
    FOREIGN KEY (assigned_by) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tạo bảng tin nhắn
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conversation_id INT NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    content TEXT,
    message_type ENUM('text', 'image', 'file', 'system') DEFAULT 'text',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    seen BOOLEAN DEFAULT FALSE,
    is_edited BOOLEAN DEFAULT FALSE,
    is_deleted BOOLEAN DEFAULT FALSE,
    reply_to_id INT,
    FOREIGN KEY (conversation_id) REFERENCES conversations(id),
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id),
    FOREIGN KEY (reply_to_id) REFERENCES messages(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tạo bảng tệp đính kèm
CREATE TABLE IF NOT EXISTS attachments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message_id INT NOT NULL,
    filename VARCHAR(255),
    file_type VARCHAR(50),
    file_url TEXT,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    size INT,
    is_sensitive BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (message_id) REFERENCES messages(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

	
103.97.126.29
ukeptbsx_law
h9WSnza9BXuUHwSYkQsN

## /////////////////////////////====================================


-- Tạo bảng người dùng (gồm cả khách hàng và luật sư)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,                     -- Mã định danh người dùng (tự tăng)
    name VARCHAR(100) NOT NULL,                            -- Tên người dùng
    email VARCHAR(100),                                    -- Email người dùng (tùy chọn)
    role ENUM('customer', 'lawyer') NOT NULL,              -- Vai trò: khách hàng hoặc luật sư
    specialty VARCHAR(100),                                -- Chuyên môn (chỉ áp dụng cho luật sư)
    is_guest BOOLEAN DEFAULT FALSE,                        -- Có phải khách vãng lai không
    ip_address VARCHAR(45),                                -- Địa chỉ IP của người dùng
    status ENUM('online', 'offline') DEFAULT 'offline'     -- Trạng thái trực tuyến của người dùng
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tạo bảng cuộc trò chuyện
CREATE TABLE IF NOT EXISTS conversations (
    id INT AUTO_INCREMENT PRIMARY KEY,                     -- Mã định danh cuộc trò chuyện
    customer_id INT NOT NULL,                              -- ID khách hàng tham gia
    lawyer_id INT NOT NULL,                                -- ID luật sư tham gia
    started_at DATETIME DEFAULT CURRENT_TIMESTAMP,         -- Thời gian bắt đầu cuộc trò chuyện
    ended_at DATETIME,                                     -- Thời gian kết thúc (nếu có)
    status ENUM('active', 'closed', 'pending') DEFAULT 'pending', -- Trạng thái phiên trò chuyện
    last_message_at DATETIME,                              -- Thời gian gửi tin nhắn cuối cùng
    last_message_preview VARCHAR(255),                     -- Nội dung rút gọn tin nhắn gần nhất
    assigned_by INT,                                       -- Ai đã gán luật sư (nếu có)
    FOREIGN KEY (customer_id) REFERENCES users(id),        -- Liên kết tới khách hàng
    FOREIGN KEY (lawyer_id) REFERENCES users(id),          -- Liên kết tới luật sư
    FOREIGN KEY (assigned_by) REFERENCES users(id)         -- Liên kết tới người gán (nếu có)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tạo bảng tin nhắn
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,                     -- Mã định danh tin nhắn
    conversation_id INT NOT NULL,                          -- Tin nhắn thuộc cuộc trò chuyện nào
    sender_id INT NOT NULL,                                -- Ai gửi tin nhắn
    receiver_id INT NOT NULL,                              -- Ai nhận tin nhắn
    content TEXT,                                          -- Nội dung tin nhắn
    message_type ENUM('text', 'image', 'file', 'system') DEFAULT 'text', -- Loại tin nhắn
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,          -- Thời gian gửi
    seen BOOLEAN DEFAULT FALSE,                            -- Đã đọc hay chưa
    is_edited BOOLEAN DEFAULT FALSE,                       -- Đã chỉnh sửa hay chưa
    is_deleted BOOLEAN DEFAULT FALSE,                      -- Đã xóa hay chưa (ẩn mềm)
    reply_to_id INT,                                       -- ID tin nhắn được trả lời (nếu có)
    FOREIGN KEY (conversation_id) REFERENCES conversations(id), -- Liên kết tới cuộc trò chuyện
    FOREIGN KEY (sender_id) REFERENCES users(id),          -- Liên kết tới người gửi
    FOREIGN KEY (receiver_id) REFERENCES users(id),        -- Liên kết tới người nhận
    FOREIGN KEY (reply_to_id) REFERENCES messages(id)      -- Liên kết tới tin nhắn được trả lời
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tạo bảng tệp đính kèm
CREATE TABLE IF NOT EXISTS attachments (
    id INT AUTO_INCREMENT PRIMARY KEY,                     -- Mã định danh tệp
    message_id INT NOT NULL,                               -- Thuộc tin nhắn nào
    filename VARCHAR(255),                                 -- Tên file gốc
    file_type VARCHAR(50),                                 -- Loại file (PDF, PNG, DOCX,...)
    file_url TEXT,                                         -- Đường dẫn truy cập tệp
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,        -- Thời điểm tải lên
    size INT,                                               -- Kích thước file (byte)
    is_sensitive BOOLEAN DEFAULT FALSE,                    -- Có chứa thông tin nhạy cảm không
    FOREIGN KEY (message_id) REFERENCES messages(id)       -- Liên kết tới tin nhắn chứa file
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


////

-- Thêm người dùng (users)
INSERT INTO users (name, email, role, specialty, is_guest, ip_address, status) VALUES
('Nguyễn Văn A', 'a@example.com', 'customer', NULL, FALSE, '123.45.67.89', 'online'),
('Trần Thị B', NULL, 'customer', NULL, TRUE, '111.22.33.44', 'offline'),
('Luật sư Minh', 'minh.lawyer@example.com', 'lawyer', 'Dân sự', FALSE, NULL, 'online'),
('Luật sư Hằng', 'hang.law@example.com', 'lawyer', 'Đất đai', FALSE, NULL, 'offline');

-- Thêm cuộc trò chuyện (conversations)
INSERT INTO conversations (customer_id, lawyer_id, started_at, status, last_message_at, last_message_preview, assigned_by) VALUES
(1, 3, NOW(), 'active', NOW(), 'Chào luật sư, tôi cần hỏi về...', 3),
(2, 4, NOW(), 'pending', NULL, NULL, NULL);

-- Thêm tin nhắn (messages)
INSERT INTO messages (conversation_id, sender_id, receiver_id, content, message_type, timestamp, seen) VALUES
(1, 1, 3, 'Chào luật sư, tôi cần hỏi về tranh chấp đất đai.', 'text', NOW(), FALSE),
(1, 3, 1, 'Chào bạn, bạn vui lòng cung cấp thêm thông tin nhé.', 'text', NOW(), FALSE),
(2, 2, 4, 'Tôi có một thắc mắc về quyền thừa kế.', 'text', NOW(), FALSE);

-- Thêm tệp đính kèm (attachments)
INSERT INTO attachments (message_id, filename, file_type, file_url, size, is_sensitive) VALUES
(1, 'so_do_dat.pdf', 'pdf', 'https://example.com/uploads/so_do_dat.pdf', 204800, TRUE),
(2, 'huong_dan.pdf', 'pdf', 'https://example.com/uploads/huong_dan.pdf', 102400, FALSE);
