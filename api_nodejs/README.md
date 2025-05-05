my-api/
│
├── src/                       # Mọi source code nằm trong src
│   ├── config/                # Cấu hình: DB, env, middleware...
│   │   ├── db.js
│   │   └── logger.js
│   │
│   ├── modules/               # Các modules chính (chia theo domain)
│   │   └── user/              # Module User (tương tự cho product, order, auth...)
│   │       ├── controllers/   # Controllers xử lý request
│   │       │   └── user.controller.js
│   │       ├── services/      # Business logic
│   │       │   └── user.service.js
│   │       ├── models/        # Mongoose schema hoặc ORM model
│   │       │   └── user.model.js
│   │       ├── routes/        # Định nghĩa routes
│   │       │   └── user.route.js
│   │       └── validators/    # Joi, Yup, Zod... để validate đầu vào
│   │           └── user.validator.js
│   │
│   ├── middleware/            # Tùy chỉnh middleware (auth, error handler,...)
│   │   ├── auth.js
│   │   └── errorHandler.js
│   │
│   ├── utils/                 # Hàm tiện ích dùng chung (hash, JWT, email,...)
│   │   ├── jwt.js
│   │   └── hash.js
│   │
│   ├── app.js                 # Khởi tạo Express app, middleware, routes
│   └── server.js              # Entry point khởi chạy server
│
├── tests/                     # Thư mục test (unit, integration)
│
├── .env                       # Biến môi trường
├── .gitignore
├── package.json
└── README.md



///

/api/users/register
///////////////////////////==================


Các model có thể có:
User (Người dùng)
Chứa thông tin về khách hàng và luật sư.

fields:

id: Mã người dùng (primary key).

name: Tên người dùng.

email: Email người dùng.

role: Vai trò của người dùng (customer hoặc lawyer).

specialty: Chuyên môn (chỉ áp dụng cho luật sư).

is_guest: Boolean, xác định người dùng có phải khách vãng lai không.

ip_address: Địa chỉ IP.

status: Trạng thái (online, offline).

Conversation (Cuộc trò chuyện)
Chứa thông tin về một cuộc trò chuyện giữa khách hàng và luật sư.

fields:

id: Mã cuộc trò chuyện.

customer_id: Mã khách hàng (foreign key từ bảng User).

lawyer_id: Mã luật sư (foreign key từ bảng User).

started_at: Thời gian bắt đầu cuộc trò chuyện.

ended_at: Thời gian kết thúc cuộc trò chuyện (nếu có).

status: Trạng thái cuộc trò chuyện (active, closed, pending).

last_message_at: Thời gian tin nhắn cuối cùng được gửi.

last_message_preview: Nội dung tóm tắt của tin nhắn cuối cùng.

assigned_by: Mã người dùng đã phân công (nếu có).

Message (Tin nhắn)
Chứa thông tin về các tin nhắn trong một cuộc trò chuyện.

fields:

id: Mã tin nhắn.

conversation_id: Mã cuộc trò chuyện (foreign key từ bảng Conversation).

sender_id: Mã người gửi (foreign key từ bảng User).

receiver_id: Mã người nhận (foreign key từ bảng User).

content: Nội dung tin nhắn.

message_type: Loại tin nhắn (text, image, file, system).

timestamp: Thời gian gửi tin nhắn.

seen: Trạng thái xem tin nhắn (đã đọc hay chưa).

is_edited: Tin nhắn đã được chỉnh sửa chưa.

is_deleted: Tin nhắn đã bị xóa chưa.

reply_to_id: Mã của tin nhắn mà tin nhắn này trả lời (nếu có).

Attachment (Tệp đính kèm)
Chứa thông tin về các tệp đính kèm trong tin nhắn.

fields:

id: Mã tệp đính kèm.

message_id: Mã tin nhắn (foreign key từ bảng Message).

filename: Tên tệp.

file_type: Loại tệp (ví dụ: pdf, image).

file_url: Đường dẫn tới tệp.

uploaded_at: Thời gian tải lên.

size: Kích thước tệp.

is_sensitive: Liệu tệp có nhạy cảm hay không.

✅ Mối quan hệ giữa các bảng:
User: Một người dùng có thể là khách hàng hoặc luật sư.

Conversation: Một cuộc trò chuyện sẽ liên kết với một khách hàng và một luật sư. Cuộc trò chuyện có thể có nhiều tin nhắn.

Message: Mỗi tin nhắn thuộc về một cuộc trò chuyện và có thể có nhiều loại nội dung (text, hình ảnh, tệp). Tin nhắn cũng có thể trả lời các tin nhắn khác.

Attachment: Một tin nhắn có thể có nhiều tệp đính kèm.

✅ Các model bổ sung có thể có:
Rating (Đánh giá): Khách hàng có thể đánh giá luật sư sau mỗi cuộc trò chuyện.

user_id: Mã người dùng (khách hàng).

lawyer_id: Mã luật sư.

rating: Điểm đánh giá.

feedback: Phản hồi của khách hàng.

Notification (Thông báo): Gửi thông báo cho khách hàng và luật sư khi có hoạt động mới.

user_id: Mã người nhận thông báo.

message: Nội dung thông báo.

read: Trạng thái đã đọc hay chưa.

created_at: Thời gian thông báo được tạo.

Bạn muốn mở rộng thêm các model này không?