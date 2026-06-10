/* ============================================================
   MA ĐỨC ANH — "FROM SAPA TO CODE"
   JavaScript v2 — Sapa Mist
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     TRANSLATIONS
     ---------------------------------------------------------- */
  const translations = {
    vi: {
      'page.title': 'Ma Đức Anh — From Sapa to Code',
      'page.description': 'Ma Đức Anh — Từ Sapa đến Tech. Operations specialist tự build internal tools, tích hợp AI vào workflow, thiết kế mọi thứ cần thiết.',
      'nav.about': 'Về tôi',
      'nav.projects': 'Dự án',
      'nav.experience': 'Hành trình',
      'nav.contact': 'Liên hệ',
      'nav.status': 'Sẵn sàng nhận việc (Full-time / Remote)',
      'hero.badge': 'Operations · Automation · AI Integration',
      'hero.greeting': 'xin chào, mình là',
      'hero.tagline': 'Tự build tools cho team — từ Google Sheets đến AI API',
      'hero.subtitle': '3+ năm vận hành CSKH cho hệ sinh thái Độ Mixi. Tự học lập trình, build app nội bộ chạy production, tích hợp AI vào workflow hàng ngày.',
      'hero.cta.portfolio': 'Xem dự án',
      'hero.cta.cv': '📄 Tải CV',
      'hero.cta.contact': 'Liên hệ',
      'about.label': 'Về tôi',
      'about.title': 'Từ Sapa đến Code',
      'about.p1': 'Bắt đầu từ bartender phục vụ khách quốc tế ở Sapa, mình dần chuyển hướng sang e-commerce và tự học lập trình qua giải quyết vấn đề thực tế hàng ngày.',
      'about.p2': '3+ năm qua, mình build internal tools cho team CSKH 10 người trong hệ sinh thái Độ Mixi, tích hợp OpenAI & Gemini API vào workflow vận hành, và thiết kế mọi thứ từ banner marketing đến hệ thống quản lý đơn hàng tự động.',
      'about.quote': 'Không chờ ai code — tự build luôn. Làm ra rồi không bỏ đó, chạy production 3+ năm.',
      'about.stat.years': 'Năm production',
      'about.stat.orders': 'Đơn đã xử lý',
      'about.stat.brands': 'Brands phục vụ',
      'about.stat.events': 'Events phối hợp',
      'projects.label': 'Dự án',
      'projects.title': 'Sản phẩm thực tế',
      'projects.subtitle': 'Không phải side project — là tool đang chạy production, đang phục vụ team thật mỗi ngày.',
      'project.1.title': 'Mixer Order Management App',
      'project.1.desc': 'Giảm 70% thời gian xử lý đơn cho team 10 người. Tự động tách thông tin khách, tính tiền, sinh QR thanh toán. Chạy production 3+ năm, hệ thống xử lý 100K+ đơn hàng.',
      'project.2.title': 'Restaurant Ops PWA',
      'project.2.desc': 'Xây dựng hệ thống vận hành nhà hàng từ đầu — quản lý tour booking, theo dõi order real-time, OCR hóa đơn tự động. React + TypeScript + Supabase.',
      'project.3.title': 'Product Design — Mixer Brand',
      'project.3.desc': 'Thiết kế bảng size, thông số chi tiết cho 3 dòng sản phẩm Mixer. Dùng AI tạo mockup + layout, team Marketing áp dụng trực tiếp lên Shopee/TikTok Shop.',
      'project.4.title': 'Marketing Campaign — MixiShop',
      'project.4.desc': 'Banner chiến dịch Summer Fest thu hút hàng nghìn lượt tương tác. Sale 20% + quay thưởng trực tiếp. Thiết kế bằng AI + Canva trong 1 buổi chiều.',
      'project.5.title': 'Mixishop — Hệ thống xử lý đơn',
      'project.5.desc': 'Script tự động lọc 75+ cột → 20 cột cần thiết, gộp đơn theo SĐT, sidebar UI custom trong Google Sheets. Xử lý 3.300+ đơn/batch cho team CSKH.',
      'project.6.title': 'Portfolio này — Built with AI',
      'project.6.desc': 'Trang web bạn đang xem — thiết kế cùng AI từ ý tưởng đến deploy. Vanilla HTML/CSS/JS, parallax núi, song ngữ VI/EN, không dùng framework.',
      'experience.label': 'Hành trình',
      'experience.title': 'Con đường leo núi',
      'exp.1.date': '2022 — Nay',
      'exp.1.role': 'CSKH, Sales & Tự động hóa Vận hành (Remote)',
      'exp.1.company': 'Mixer · Mixishop · Mixifood — Hệ sinh thái Độ Mixi',
      'exp.1.d1': 'CSKH đa kênh cho 3 brands, team 10 người, peak 2-3K đơn/tháng/brand',
      'exp.1.d2': 'Tự build internal app (Apps Script) cho quản lý đơn hàng — production 3+ năm',
      'exp.1.d3': 'Tích hợp OpenAI/Gemini API vào workflow CSKH hàng ngày',
      'exp.2.date': '07/2025 — Nay',
      'exp.2.role': 'Hỗ trợ Vận hành & Phục vụ (Part-time)',
      'exp.2.company': 'Indigo Restaurant Lá Chàm — Sapa',
      'exp.2.d1': 'Phục vụ 5-20 đoàn tour/ngày, quy mô 4-50 khách/đoàn',
      'exp.2.d2': 'Xử lý booking đa kênh với tour operators',
      'exp.3.date': '2018 — 2022',
      'exp.3.role': 'Freelance: Tour Guide + Event + Design',
      'exp.3.company': 'Hà Nội',
      'exp.3.d1': 'Hướng dẫn ~20 đoàn học sinh, đoàn lớn nhất 100+ người',
      'exp.3.d2': 'Hậu cần ~34 events đa dạng format',
      'exp.3.d3': 'Design banner, poster cho doanh nghiệp nhỏ',
      'exp.4.date': '2016 — 2017',
      'exp.4.role': 'Bartender & Trưởng ca vận hành (Supervisor)',
      'exp.4.company': 'Backpacker Hotel Sapa',
      'exp.4.d1': 'Vận hành front-of-house cho khách quốc tế (Âu, Mỹ, Úc)',
      'edu.date': '2017 — 2024',
      'edu.degree': 'Cử nhân Việt Nam Học',
      'edu.school': 'Đại học Thăng Long — Hà Nội',
      'edu.badge': '⚡ Vừa học vừa thực chiến',
      'edu.quote': 'Sau giảng đường, mọi thứ từ code đến design đều tự mày mò qua thực chiến — sản phẩm chạy production là chứng chỉ tốt nhất.',
      
      'case.label': 'Case Study',
      'case.title': 'Nhìn sâu vào sản phẩm',
      'case.problem': '❌ Vấn đề',
      'case.solution': '✅ Giải pháp',
      'case.results': '📈 Kết quả',
      'case.demo.visit': 'Xem Live Demo ⚡',
      
      // Case 1: Mixer App
      'case.1.name': 'Mixer Order Management App',
      'case.1.meta': 'Google Apps Script · Production 3+ năm · Team 10 người',
      'case.1.images': [
        'assets/projects/mixer-app/1.png',
        'assets/projects/mixer-app/2.png',
        'assets/projects/mixer-app/3.png',
        'assets/projects/mixer-app/4.png',
        'assets/projects/mixer-app/5.png'
      ],
      'case.1.p1': 'Team 10 người xử lý đơn hàng thủ công qua Google Sheets — copy-paste thông tin khách, tính tiền bằng tay',
      'case.1.p2': 'Sai sót ~15% đơn hàng: sai tên, sai size, sai tổng tiền',
      'case.1.p3': 'Peak season 2-3K đơn/tháng/brand — team quá tải, response chậm',
      'case.1.s1': 'Tự động tách thông tin khách (tên, SĐT, địa chỉ) từ tin nhắn',
      'case.1.s2': 'CRUD đơn hàng với validation: kiểm tra stock, tính tổng tiền tự động',
      'case.1.s3': 'Sinh text xác nhận đơn + QR thanh toán 1-click',
      'case.1.s4': 'Tích hợp OpenAI API: tự soạn tin trả lời khách theo template',
      'case.1.r1.val': '-70%',
      'case.1.r1.lbl': 'Thời gian xử lý/đơn',
      'case.1.r2.val': '~2%',
      'case.1.r2.lbl': 'Tỉ lệ sai sót (từ 15%)',
      'case.1.r3.val': '100K+',
      'case.1.r3.lbl': 'Đơn đã xử lý',
      'case.1.r4.val': '3+',
      'case.1.r4.lbl': 'Năm production',
      'case.1.quote': 'Không có dev team. Không có budget thuê ngoài. Chỉ cần 1 người thấy vấn đề và tự build giải pháp.',
      'case.1.link': 'https://docs.google.com/spreadsheets/d/1x0w5bIoiuYuS71FMBvI_PLmSBHiiyeo93Zl0loi7Asc/edit?usp=sharing',
      'case.1.btnText': 'Xem Sheets Demo 📊',
      'case.1.creds': 'Bạn có thể tạo bản sao (<code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">Tệp</code> > <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">Tạo bản sao</code>) về Google Drive của mình để có quyền truy cập Apps Script và xem toàn bộ mã nguồn tự động hóa.',
      
      // SOP Case 1
      'case.1.sop.title': 'Kỷ Nguyên Mới Của Quản Lý Đơn Hàng — Từ Quy Trình Thủ Công Đến Hệ Thống Tự Động Hóa 1-Click',
      'case.1.sop.subtitle': 'The Mixer Order Management S.O.P: Streamlining E-commerce Operations with Google Apps Script',
      'case.1.sop.heading1': '1. Triết Lý Thiết Kế (The Philosophy)',
      'case.1.sop.philosophy': 'Một công cụ quản lý nội bộ không cần giao diện quá lộng lẫy, nhưng phải tối đa hóa tốc độ nhập liệu và triệt tiêu sai sót của con người. Hệ thống cần giải quyết 3 yếu tố: Nhập liệu một chạm (One-click Ingestion), Xác thực dữ liệu tức thời (Real-time Validation), và Tự động hóa tối đa (Maximum Automation).',
      'case.1.sop.heading2': '2. Giải Phẫu Hệ Thống (Anatomy of a Perfect Sheets Order App)',
      'case.1.sop.anatomy.1.title': 'Text RegEx Parsing (Tự động bóc tách tin nhắn)',
      'case.1.sop.anatomy.1.desc': 'Thuật toán Regular Expressions (RegEx) thông minh tự động phân tích cú pháp tin nhắn chat của khách hàng (Họ tên, SĐT, Địa chỉ, Mã sản phẩm, Size) để điền tự động vào hóa đơn, loại bỏ hoàn toàn việc copy-paste thủ công từng trường.',
      'case.1.sop.anatomy.2.title': 'Real-time Stock & Price Audit (Đối soát tồn kho & giá)',
      'case.1.sop.anatomy.2.desc': 'Liên kết trực tiếp và truy vấn thời gian thực tới bảng dữ liệu kho hàng (Inventory) và bảng giá (Pricing). Hệ thống tự động cảnh báo đỏ nếu sản phẩm bị hết hàng hoặc sai lệch giá trước khi cho phép ghi nhận đơn.',
      'case.1.sop.anatomy.3.title': 'Dynamic 1-Click QR Payment (QR thanh toán động)',
      'case.1.sop.anatomy.3.desc': 'Tích hợp thư viện sinh mã VietQR động theo chuẩn Napas, tự động mã hóa số tài khoản, số tiền phải thanh toán và mã đơn hàng vào mã QR giúp khách hàng quét thanh toán nhanh chóng, chính xác 100%.',
      'case.1.sop.anatomy.4.title': 'Auto-Reply Messaging (Tự soạn tin nhắn xác nhận)',
      'case.1.sop.anatomy.4.desc': 'Hệ thống tự động biên soạn nội dung chat phản hồi xác nhận đơn dựa trên template cấu hình sẵn, đính kèm link ảnh QR thanh toán động để nhân viên CSKH gửi ngay cho khách hàng chỉ trong 1 click.',
      'case.1.sop.heading3': '3. QUY TRÌNH THỰC THI (The Execution Framework)',
      'case.1.sop.framework.1.title': 'BƯỚC 1: INPUT - THU THẬP & TRÍCH XUẤT',
      'case.1.sop.framework.1.p1': 'Nhân viên CSKH copy nội dung chat của khách dán vào Custom Sidebar UI của Google Sheets và bấm nút trích xuất.',
      'case.1.sop.framework.1.p2': 'Thuật toán RegEx phân tách thông tin khách và điền sẵn lên Form. Nếu thiếu thông tin quan trọng như SĐT hoặc Địa chỉ, hệ thống sẽ cảnh báo đỏ để nhân viên kịp thời bổ sung.',
      'case.1.sop.framework.1.p3': 'Nhân viên CSKH kiểm tra nhanh các thông tin đã điền và bổ sung ghi chú đặc biệt nếu có (như yêu cầu giao gấp, ship hẹn giờ).',
      'case.1.sop.framework.2.title': 'BƯỚC 2: LOGIC - ĐỐI SOÁT & GHI NHẬN',
      'case.1.sop.framework.2.p1': 'Hệ thống tự động tra cứu tồn kho thực tế của sản phẩm. Nếu còn hàng, nút "Lưu đơn" được kích hoạt; nếu hết hàng, hệ thống báo lỗi thiếu kho.',
      'case.1.sop.framework.2.p2': 'Bấm lưu đơn -> Apps Script ghi dữ liệu vào cơ sở dữ liệu Sheets chính, tự động tính tổng tiền và sinh link ảnh QR thanh toán VietQR động.',
      'case.1.sop.framework.3.title': 'BƯỚC 3: OUTPUT - PHẢN HỒI & ĐỒNG BỘ KHO',
      'case.1.sop.framework.3.p1': 'Hệ thống hiển thị đoạn chat xác nhận mẫu kèm link QR thanh toán. CSKH copy gửi cho khách chỉ trong 1 giây.',
      'case.1.sop.framework.3.p2': 'Đồng bộ kho: Thông tin đơn hàng sau khi lưu được đồng bộ sang Sheet kho (Warehouse) theo dạng thời gian thực để bộ phận đóng gói in bill vận đơn ngay lập tức.',

      // Case 2: Restaurant Ops
      'case.2.name': 'Restaurant Ops PWA',
      'case.2.meta': 'React · Supabase · Mobile PWA · Real-time',
      'case.2.images': [
        'assets/projects/restaurant-ops/1.png',
        'assets/projects/restaurant-ops/2.png',
        'assets/projects/restaurant-ops/3.png',
        'assets/projects/restaurant-ops/4.png',
        'assets/projects/restaurant-ops/5.png'
      ],
      'case.2.p1': 'Vận hành nhà hàng bằng giấy tờ thủ công, dễ thất lạc order của khách hàng',
      'case.2.p2': 'Booking đoàn tour từ các hãng lữ hành dồn dập qua Zalo/Điện thoại gây chồng chéo thông tin',
      'case.2.p3': 'Đối soát hóa đơn và doanh thu cuối ngày mất nhiều thời gian, dễ sai lệch',
      'case.2.s1': 'Xây dựng PWA (Progressive Web App) chạy mượt mà trên mobile cho nhân viên phục vụ',
      'case.2.s2': 'Đồng bộ order real-time giữa bếp và phục vụ bằng cơ chế realtime của Supabase',
      'case.2.s3': 'Tích hợp OCR (nhận diện chữ viết) tự động quét và phân tích hóa đơn tour chỉ trong 3 giây',
      'case.2.s4': 'Dashboard số hóa toàn bộ lịch booking đoàn trong ngày',
      'case.2.r1.val': '-50%',
      'case.2.r1.lbl': 'Thời gian nhận order/bàn',
      'case.2.r2.val': '0',
      'case.2.r2.lbl': 'Giấy tờ vận hành',
      'case.2.r3.val': '95%',
      'case.2.r3.lbl': 'Chính xác của OCR bill',
      'case.2.r4.val': 'Real-time',
      'case.2.r4.lbl': 'Đồng bộ Bếp - Phục vụ',
      'case.2.quote': 'Chuyển đổi số không cần đao to búa lớn. Chỉ cần một app PWA nhỏ gọn giải quyết đúng nỗi đau vận hành hàng ngày.',
      'case.2.link': 'https://saram-alpha.vercel.app',
      'case.2.creds': 'Tài khoản: <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">quanly</code> / Mật khẩu: <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">123456</code>',
      'case.2.btnText': 'Xem Live Demo ⚡',
      
      // SOP Case 2
      'case.2.sop.title': 'Kỷ Nguyên Mới Của Vận Hành Nhà Hàng — Từ Quy Trình Giấy Tờ Đến Hệ Thống PWA Số Hóa Real-Time (Đang phát triển)',
      'case.2.sop.subtitle': 'The Restaurant Operations S.O.P: Transitioning from Paper Operations to Real-Time PWA & AI Systems',
      'case.2.sop.heading1': '1. Triết Lý Thiết Kế (The Philosophy)',
      'case.2.sop.philosophy': 'Một ứng dụng vận hành không chỉ là một bảng nhập liệu di động. Nó là xương sống kết nối giữa Lễ tân, Phục vụ, Bếp, và Quản lý để tạo nên một trải nghiệm dịch vụ liền mạch. Hệ thống cần giải quyết 3 yếu tố: Đồng bộ tức thời (Real-time Sync), Tự động hóa điểm chạm (Automated Touchpoints), và Bảo mật vận hành (Operational Security).',
      'case.2.sop.heading2': '2. Giải Phẫu Hệ Thống Vận Hành (Anatomy of a Perfect Restaurant Ops PWA)',
      'case.2.sop.anatomy.1.title': 'AI OCR Booking Ingestion (Nhận diện đoàn tour bằng AI)',
      'case.2.sop.anatomy.1.desc': 'Tích hợp OCR thông minh tự động trích xuất các thông tin cốt lõi (Họ tên, SĐT, số lượng Pax, thời gian, thực đơn và ghi chú) từ ảnh chụp phiếu đoàn do đại lý gửi qua Zalo, giảm thời gian nhập tay từ 5 phút xuống còn 3 giây.',
      'case.2.sop.anatomy.2.title': 'Real-time Table & Area Mapping (Sơ đồ bàn thời gian thực)',
      'case.2.sop.anatomy.2.desc': 'Quản lý trực quan các phân khu (A1, A2, B1, B2...) kết hợp cơ chế Pub/Sub của Supabase Realtime để đồng bộ hóa trạng thái bàn trống, bàn đang phục vụ tức thì trên thiết bị của toàn bộ nhân viên.',
      'case.2.sop.anatomy.3.title': 'Smart Workforce Attendance (Điểm danh bảo mật bằng định vị)',
      'case.2.sop.anatomy.3.desc': 'Hệ thống điểm danh 3 lớp bảo mật: Đối chiếu mã nhận diện thiết bị (Device ID), xác thực tên mạng Wi-Fi nội bộ nhà hàng, và định vị GPS bán kính hẹp (Geofencing) để kiểm soát ca làm việc (Split/Straight shifts).',
      'case.2.sop.anatomy.4.title': '⚠️ Trạng thái triển khai thực tế (Implementation Status)',
      'case.2.sop.anatomy.4.desc': 'DỰ ÁN ĐANG PHÁT TRIỂN: Hệ thống hiện đang trong giai đoạn xây dựng và thử nghiệm nội bộ, chưa chính thức đưa vào vận hành thực tế tại nhà hàng nhằm tiếp tục tinh chỉnh độ ổn định và thuật toán.',
      'case.2.sop.heading3': '3. QUY TRÌNH THỰC THI (The Execution Framework)',
      'case.2.sop.framework.1.title': 'BƯỚC 1: INPUT - THU THẬP & SỐ HÓA ĐẦU VÀO',
      'case.2.sop.framework.1.p1': 'Lễ tân chụp ảnh phiếu đặt đoàn -> AI OCR tự động phân tích và tạo Booking Draft -> Hệ thống ước lượng sơ đồ chia bàn dựa trên tổng số Pax và đề xuất cấu trúc bàn (ví dụ: 2x6 + 1x4).',
      'case.2.sop.framework.1.p2': 'Xác thực thông tin: CSKH kiểm tra lại nội dung AI đã bóc tách (Tên đoàn, ngày, thực đơn) và bấm lưu để chính thức tạo Booking trên hệ thống.',
      'case.2.sop.framework.1.p3': 'Lưu ý: Nếu có bất kỳ nghi ngờ nào từ AI, hệ thống tự động gắn nhãn "Needs Review" để cảnh báo lễ tân đối soát thủ công.',
      'case.2.sop.framework.2.title': 'BƯỚC 2: LOGIC - PHÂN CHIA & ĐỒNG BỘ TRẠNG THÁI',
      'case.2.sop.framework.2.p1': 'Chuyển trạng thái Booking sang "Reserved" hoặc "Arrived" -> Supabase Realtime cập nhật trạng thái bàn trên toàn hệ thống -> Phục vụ nhận bàn, gửi yêu cầu món ăn về Bếp mà không cần di chuyển.',
      'case.2.sop.framework.2.p2': 'Đồng bộ Bếp - Phục vụ: Mọi thay đổi về trạng thái phục vụ món ăn hoặc gộp/chuyển bàn (ghi nhận lịch sử Move History) được cập nhật đồng thời lên thiết bị của quản lý.',
      'case.2.sop.framework.3.title': 'BƯỚC 3: OUTPUT - BÁO CÁO & ĐIỂM DANH BẢO MẬT',
      'case.2.sop.framework.3.p1': 'Nhân viên điểm danh thông qua app -> Định vị GPS & Wi-Fi đối chiếu vị trí thực tế -> Hệ thống ghi nhận log và đồng bộ ca kíp tự động, kết xuất lịch sử di chuyển bàn (Move History) để kiểm soát chất lượng.',
      'case.2.sop.framework.3.p2': 'Kết xuất báo cáo: Cuối ca, hệ thống tự động tổng hợp số lượng Pax thực tế và đối chiếu với định mức gia vị bếp (Condiments) để tính toán hao hụt nguyên liệu thực tế.',

      // Case 3: Product Design Mixer
      'case.3.name': 'Product Design — Mixer Brand',
      'case.3.meta': 'Midjourney · Figma · Canva · Creative Ops',
      'case.3.images': [
        'assets/projects/mixer-sizing/1.png',
        'assets/projects/mixer-sizing/2.png',
        'assets/projects/mixer-sizing/3.png'
      ],
      'case.3.p1': 'Bảng size và thông số cũ thiết kế sơ sài, khách hàng khó hình dung form dáng sản phẩm',
      'case.3.p2': 'Tỷ lệ đổi trả hàng do sai kích cỡ cao (~12%), gây tốn chi phí vận chuyển hai chiều',
      'case.3.p3': 'Thiếu visual mockup thực tế khiến sản phẩm kém nổi bật trên Shopee và TikTok Shop',
      'case.3.s1': 'Nghiên cứu lại thông số chuẩn cho 3 dòng sản phẩm Mixer (New State Shirt, Kosmix Polo, T-shirt)',
      'case.3.s2': 'Sử dụng AI Midjourney tạo mockup người mẫu mặc sản phẩm với ánh sáng và bối cảnh chân thực',
      'case.3.s3': 'Thiết kế layout bảng size hiện đại, trực quan bằng Canva/Figma, làm nổi bật thông số quan trọng',
      'case.3.r1.val': '3 dòng',
      'case.3.r1.lbl': 'Sản phẩm áp dụng',
      'case.3.r2.val': '~3%',
      'case.3.r2.lbl': 'Tỉ lệ đổi trả (từ 12%)',
      'case.3.r3.val': '+25%',
      'case.3.r3.lbl': 'CTR click sản phẩm',
      'case.3.r4.val': 'AI-based',
      'case.3.r4.lbl': 'Workflow thiết kế',
      'case.3.quote': 'Sử dụng sức mạnh của Generative AI để bypass khâu chụp studio đắt đỏ, mang lại hiệu quả trực tiếp cho e-commerce.',

      // Case 4: Marketing Campaign
      'case.4.name': 'Marketing Campaign — MixiShop',
      'case.4.meta': 'AI Creative · Canva · Campaign Ops · 1 ngày',
      'case.4.images': [
        'assets/projects/mixishop-campaign/1.png'
      ],
      'case.4.p1': 'Chiến dịch sale lớn "Summer Fest" cần gấp bộ banner phủ toàn bộ kênh truyền thông trong 24h',
      'case.4.p2': 'Không có designer phụ trách trực tiếp vào ngày nghỉ, ngân sách thiết kế tối thiểu (0đ)',
      'case.4.p3': 'Cần ý tưởng visual nổi bật, kích thích khách hàng tham gia minigame vòng quay may mắn',
      'case.4.s1': 'Dùng AI tạo background bãi biển mùa hè rực rỡ và các chi tiết trang trí 3D nổi bật',
      'case.4.s2': 'Sử dụng Canva để ghép sản phẩm, layout chữ và tạo các biến thể kích thước cho Facebook, Instagram',
      'case.4.s3': 'Đồng bộ hóa tone màu cam-xanh chủ đạo của chiến dịch trên mọi ấn phẩm thiết kế',
      'case.4.r1.val': '1 ngày',
      'case.4.r1.lbl': 'Thời gian hoàn thành',
      'case.4.r2.val': '1000+',
      'case.4.r2.lbl': 'Lượt tương tác banner',
      'case.4.r3.val': '0 đ',
      'case.4.r3.lbl': 'Chi phí thiết kế',
      'case.4.r4.val': '+40%',
      'case.4.r4.lbl': 'Doanh thu ngày camp',
      'case.4.quote': 'Khi thời gian gấp rút, AI là người trợ lý đắc lực nhất giúp nhân đôi năng suất của một Marketer tự lập.',

      // Case 5: Mixishop System
      'case.5.name': 'Mixishop — Hệ thống xử lý đơn',
      'case.5.meta': 'Google Apps Script · JavaScript · Automation · Sheets',
      'case.5.images': ['assets/projects/mixishop-system/1.png', 'assets/projects/mixishop-system/2.png'],
      'case.5.p1': 'Dữ liệu đơn hàng xuất thô từ web chứa hơn 75 cột, team CSKH phải copy lọc tay mất nhiều giờ',
      'case.5.p2': 'Khách hàng đặt nhiều đơn lẻ tẻ cần được gộp để giảm ship, lọc tay dễ bỏ sót và nhầm lẫn',
      'case.5.p3': 'Đơn hàng trôi nổi không được đánh dấu trạng thái rõ ràng, dễ bị xử lý trùng lặp',
      'case.5.s1': 'Viết script Apps Script tự động hóa quy trình: chọn lọc 20 cột quan trạng nhất trong 1 click',
      'case.5.s2': 'Thuật toán tự động tìm và gộp các đơn hàng trùng số điện thoại nhận hàng',
      'case.5.s3': 'Custom sidebar UI trong Google Sheets giúp CSKH dễ dàng điều khiển, kiểm tra dữ liệu trước khi xuất',
      'case.5.s4': 'Hệ thống tự động tô màu đánh dấu dòng đơn hàng đã xử lý bằng marker thông minh',
      'case.5.r1.val': '3300+',
      'case.5.r1.lbl': 'Đơn xử lý/mỗi đợt',
      'case.5.r2.val': '-90%',
      'case.5.r2.lbl': 'Thời gian lọc & gộp',
      'case.5.r3.val': '0',
      'case.5.r3.lbl': 'Lỗi gộp đơn nhầm',
      'case.5.r4.val': '1-click',
      'case.5.r4.lbl': 'Thao tác vận hành',
      'case.5.quote': 'Một script tốt có thể thay thế hàng chục giờ làm việc lặp đi lặp lại vô nghĩa của con người.',
      'case.5.link': 'https://docs.google.com/spreadsheets/d/1i9Q7dAubveCnlKbJFB1ytMePvr8auTw3oDOuetOrhiw/edit?usp=sharing',
      'case.5.btnText': 'Xem Sheets Demo 📊',
      'case.5.creds': 'Do link demo ở chế độ Chỉ xem (Viewer), mục <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">Tiện ích mở rộng > Apps Script</code> sẽ bị khóa. Vui lòng chọn <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">Tệp > Tạo bản sao</code> để copy sheet về Drive cá nhân, sau đó mở Apps Script trên bản sao mới để xem toàn bộ mã nguồn xử lý đơn.',

      // Case 6: Portfolio
      'case.6.name': 'Portfolio này — Built with AI',
      'case.6.meta': 'HTML · CSS · JS · i18n · Responsive',
      'case.6.images': [
        'assets/projects/portfolio-site/1.png',
        'assets/projects/portfolio-site/2.png',
        'assets/projects/portfolio-site/3.png',
        'assets/projects/portfolio-site/4.png'
      ],
      'case.6.p1': 'Cần một CV/Portfolio online thể hiện được chất riêng, thay vì dùng các mẫu template có sẵn nhàm chán',
      'case.6.p2': 'Phải chứng minh được năng lực tự học lập trình, tư duy UX/UI thực chiến và kỹ năng vận hành dự án',
      'case.6.p3': 'Trang web cần tải nhanh, chạy mượt trên mọi thiết bị và hỗ trợ cả nhà tuyển dụng nước ngoài',
      'case.6.s1': 'Tự thiết kế và code từ con số 0 bằng vanilla HTML/CSS/JS để tối ưu hóa hiệu năng và dung lượng',
      'case.6.s2': 'Tạo hiệu ứng Sapa parallax (lớp sương mù và núi đồi chuyển động khi scroll) mang đậm dấu ấn cá nhân',
      'case.6.s3': 'Xây dựng hệ thống chuyển đổi ngôn ngữ (VI/EN) và theme (Sáng/Tối) thuần túy bằng JavaScript',
      'case.6.s4': 'Thiết kế visual timeline "Con đường leo núi" mô phỏng chặng đường sự nghiệp độc đáo',
      'case.6.r1.val': '0',
      'case.6.r1.lbl': 'Framework sử dụng',
      'case.6.r2.val': '2 ngôn ngữ',
      'case.6.r2.lbl': 'Hỗ trợ VI / EN',
      'case.6.r3.val': '95+',
      'case.6.r3.lbl': 'Lighthouse Performance',
      'case.6.r4.val': '8 sections',
      'case.6.r4.lbl': 'Trực quan sinh động',
      'case.6.quote': 'Portfolio này chính là sản phẩm minh chứng tốt nhất: Tự học, tự lên ý tưởng, tự design và tự hiện thực hóa bằng code.',

      'process.label': 'Quy trình',
      'process.title': 'Cách mình làm việc',
      'process.subtitle': 'Dù build tool, thiết kế banner, hay quản lý 100+ người — quy trình luôn giống nhau.',
      'process.1.title': 'Nghe & Hiểu vấn đề',
      'process.1.desc': 'Không vội code hay thiết kế. Ngồi cạnh team, nghe pain point thật, hiểu workflow hiện tại đang tắc ở đâu.',
      'process.2.title': 'Prototype nhanh',
      'process.2.desc': 'Build bản thử trong 1-2 ngày. Cho team dùng thử ngay, thu feedback sớm. Không cần hoàn hảo — cần hoạt động được.',
      'process.3.title': 'Iterate & Polish',
      'process.3.desc': 'Cải tiến liên tục dựa trên thực tế sử dụng. Thêm feature khi team cần, bỏ feature không ai dùng.',
      'process.4.title': 'Maintain & Không bỏ dở',
      'process.4.desc': 'Sản phẩm chạy 3+ năm vì mình không bỏ. Bug fix, update, hỗ trợ team — trách nhiệm đến cùng.',
      'personal.label': 'Con người',
      'personal.title': 'Đằng sau dòng code',
      'personal.p1': 'Mình lớn lên ở Sapa. Từ nhỏ đã quen tiếp xúc với khách du lịch và môi trường dịch vụ năng động, điều đó giúp mình có khả năng giao tiếp tự nhiên và nhanh nhạy với nhu cầu của người khác.',
      'personal.p2': 'Trước khi viết code, mình từng làm qua nhiều công việc thực tế: từ pha cocktail phục vụ khách nước ngoài, điều phối sự kiện và dẫn đoàn 100+ người, đến hỗ trợ vận hành e-commerce. Mỗi trải nghiệm đều dạy mình cách quan sát workflow và giải quyết vấn đề thực tế.',
      'personal.p3': 'Khi chuyển hướng sang lập trình và tự động hóa, mình tập trung vào tính ứng dụng. Mình không build những thứ chỉ để ngắm, mà build những công cụ thực sự giải phóng sức lao động cho team, chạy ổn định qua nhiều năm.',
      'personal.img1': 'Sapa — nơi bắt đầu',
      'personal.img2': 'Workstation hàng ngày',
      'personal.img3': 'Bản thân',
      'personal.v1': 'Kiên nhẫn như leo núi',
      'personal.v2': 'Thấy vấn đề → Tự build giải pháp',
      'personal.v3': 'Trầm tính nhưng luôn quan tâm',
      'personal.v4': 'Nhận rồi không bỏ dở',
      'contact.label': 'Liên hệ',
      'contact.title': 'Cùng leo tiếp?',
      'contact.subtitle': 'Sẵn sàng cho cơ hội mới. Hãy liên hệ với mình qua email hoặc mạng xã hội.',
      'contact.email.label': 'Email',
      'contact.phone.label': 'Điện thoại',
      'contact.location.label': 'Địa điểm',
      'contact.location.value': 'Sapa / Hồ Chí Minh (Remote-ready)',
      'contact.avail.label': 'Sẵn sàng',
      'contact.avail.value': 'Full-time, từ 02/06/2026',
      'contact.form.name': 'Họ tên',
      'contact.form.email': 'Email',
      'contact.form.message': 'Tin nhắn',
      'contact.form.send': 'Gửi Email',
      'footer.text': '© 2026 Ma Đức Anh',
      'trail.here': '● bạn đang ở đây',
      'footer.ai': 'Thiết kế & lập trình cùng AI',
      'testimonial.label': 'Đồng nghiệp nói gì',
      'testimonial.title': 'Người thật, lời thật',
      'testimonial.1.text': '"Ông Anh này hồi đầu bảo em để anh thử làm cái app coi. Tưởng chơi chơi, ai ngờ 3 năm rồi cả team vẫn xài mỗi ngày. Mà hỏi gì sửa ngay, chả bao giờ kêu bận."',
      'testimonial.1.name': 'Thành Đô',
      'testimonial.1.role': 'CSKH — Mixer',
      'testimonial.2.text': '"Anh Anh ít nói lắm, nhưng mà team có vấn đề gì là tự ngồi code giải quyết luôn. Sáng gửi bug, chiều đã xong. Kiểu người làm xong rồi mới nói."',
      'testimonial.2.name': 'Trung Kiên',
      'testimonial.2.role': 'CSKH — Mixer',
      'testimonial.3.text': '"Hồi chạy event đoàn 100 người, mình lo hậu cần không xuể. Anh nhận phần logistics rồi handle hết, check danh sách từng người một. Xong việc mới thấy ổng lo kỹ thế nào."',
      'testimonial.3.name': 'Linh',
      'testimonial.3.role': 'CTV Freelance',
      'testimonial.4.text': '"Bạn Anh tự học code từ Google Sheets rồi build hẳn app cho team luôn. Hỏi đi học ở đâu bảo tự mày mò. Mà cái app chạy ổn hơn mấy tool trả phí nữa."',
      'testimonial.4.name': 'Hùng',
      'testimonial.4.role': 'CSKH — Mixishop',
      'testimonial.5.text': '"Nhờ Anh thiết kế banner, bảo dùng AI cũng được không. Ổng gửi lại mấy bản đẹp hơn mình tưởng tượng. Nhanh nữa, sáng nhờ chiều có."',
      'testimonial.5.name': 'Trang',
      'testimonial.5.role': 'Marketing — Mixifood',
      'testimonial.6.text': '"Cái hay là giao việc xong yên tâm không phải hỏi lại. Bảo xử lý cái gì là xử lý xong báo lại, không cần nhắc. Mấy năm rồi chưa thấy bỏ dở cái gì."',
      'testimonial.6.name': 'Đô',
      'testimonial.6.role': 'Team Lead — Mixer',
      'toast.copied': 'Đã sao chép vào bộ nhớ tạm!',
      
      // SOP Case 3
      'case.3.sop.title': 'KỶ NGUYÊN MỚI CỦA BẢNG KÍCH THƯỚC',
      'case.3.sop.subtitle': 'The Size Chart S.O.P: Translating Data into Visual Confidence',
      'case.3.sop.heading1': '1. Triết Lý Thiết Kế (The Philosophy)',
      'case.3.sop.philosophy': 'Bảng size không chỉ là một bảng tính Excel. Nó là điểm chạm cuối cùng (last mile) quyết định việc khách hàng có "Thêm vào giỏ hàng" hay không. Một bảng size chất lượng cần giải quyết 3 yếu tố: Sự chính xác (Accuracy), Tính trực quan (Visual Clarity), và Cảm giác chân thực (Authenticity).',
      'case.3.sop.heading2': '2. Giải Phẫu Bảng Size Tiêu Chuẩn (Anatomy of a Perfect Size Chart)',
      'case.3.sop.anatomy.1.title': 'Thông số kỹ thuật',
      'case.3.sop.anatomy.1.desc': 'Bảng số liệu chi tiết (Dài, Rộng, Vai, Tay) kèm theo dung sai cho phép (thường là ± 1-2cm). Định hình dải size chuẩn xác cho tệp khách hàng mục tiêu, chẳng hạn như tập trung vào các size phổ biến M, L, XL, XXL và chủ động loại bỏ size S nếu form dáng (như Oversized/Boxy) không phù hợp với tỷ lệ nhỏ.',
      'case.3.sop.anatomy.2.title': 'Bản vẽ CAD minh họa (Fit Blueprint)',
      'case.3.sop.anatomy.2.desc': 'Bản vẽ vector thể hiện chính xác vị trí cần đo trên quần áo (đường line ngực, đường line vai) để khách hàng tự đối chiếu ở nhà. Tuyệt đối không dùng chung 1 bản vẽ cho nhiều form áo khác nhau.',
      'case.3.sop.anatomy.3.title': 'Hệ quy chiếu người mặc (Sizing Guide)',
      'case.3.sop.anatomy.3.desc': 'Bảng gợi ý Chiều cao - Cân nặng tương đối giúp khách hàng nhanh chóng chọn size mà không cần dụng cụ đo.',
      'case.3.sop.anatomy.4.title': 'Minh chứng chất liệu (Material Highlights)',
      'case.3.sop.anatomy.4.desc': 'Mọi chi tiết đặc trưng làm nên giá trị sản phẩm (thẻ cổ, cúc áo, hình thêu, bề mặt vải) bắt buộc phải được trích xuất (crop) nguyên bản 100% từ ảnh chụp thực tế. Không sử dụng hình vẽ minh họa (mockup) để khách hàng có thể "chạm" vào chất liệu qua màn hình.',
      'case.3.sop.heading3': '3. CÔNG THỨC/PROMPT LẬP LUẬN TẠO BẢNG SIZE (The Execution Framework)',
      'case.3.sop.framework.1.title': 'BƯỚC 1: INPUT - THU THẬP DỮ LIỆU ĐẦU VÀO',
      'case.3.sop.framework.1.p1': 'Phân loại & Form dáng: Sản phẩm là gì? (T-shirt, Polo, Jacket, Shirt). Form dáng ra sao? (Regular, Oversized, Boxy, Slim-fit).',
      'case.3.sop.framework.1.p2': 'Đặc tính chất liệu: Vải dệt kim Cotton co giãn tốt hay vải dệt thoi Kate/Denim không co giãn?',
      'case.3.sop.framework.1.p3': 'Kỹ thuật gia công: Các chi tiết ảnh hưởng đến độ co rút sau giặt (Ví dụ: Wash axit, nhuộm mộc).',
      'case.3.sop.framework.2.title': 'BƯỚC 2: LOGIC - XỬ LÝ THÔNG SỐ',
      'case.3.sop.framework.2.p1': 'Quy tắc Cử động (Ease Allowance): Nếu vải không co giãn, thông số bề ngang (Rộng ngực/hông) phải được cộng thêm biên độ cử động an toàn (3-5cm so với số đo cơ thể).',
      'case.3.sop.framework.2.p2': 'Quy tắc Tỷ lệ Form dáng: Rà soát chéo số đo. Ví dụ: Nếu áo Boxy, tỷ lệ Dài Áo / Rộng Ngực phải tiến gần về 1:1. Nếu Oversized, Dài Áo và Dài Tay phải tăng tỷ lệ thuận.',
      'case.3.sop.framework.3.title': 'BƯỚC 3: OUTPUT - TRỰC QUAN HÓA & HIỂN THỊ',
      'case.3.sop.framework.3.p1': 'Layout: Sắp xếp theo luồng mắt nhìn từ trái sang phải, từ trên xuống dưới (CAD blueprint -> Bảng thông số -> Sizing guide -> Macro details).',
      'case.3.sop.framework.3.p2': 'Màu sắc & Typography: Sử dụng phông chữ San-serif (Inter/Helvetica) in đậm cho số liệu để dễ đọc trên di động. Nền bảng size dùng màu trung tính (Xám nhạt/Be/Trắng) làm nổi bật sản phẩm.',
      
      // SOP Case 4
      'case.4.sop.title': 'Kỷ Nguyên Mới Của Ấn Phẩm Khuyến Mãi – Từ Nền Tảng AI Đến Điểm Chạm Thị Giác Sắc Nét',
      'case.4.sop.subtitle': 'The Promotional Poster S.O.P: Translating Generative AI into Sales Conversion',
      'case.4.sop.heading1': '1. Triết Lý Thiết Kế (The Philosophy)',
      'case.4.sop.philosophy': 'Một poster khuyến mãi không chỉ là một tờ rơi kỹ thuật số chắp vá hình ảnh. Nó là phát súng mở màn cho một chiến dịch bùng nổ, quyết định việc khách hàng lướt qua hay dừng lại để chốt đơn. Một ấn phẩm thương mại (Commercial Graphic) chất lượng cần giải quyết 3 yếu tố: Sức hút thị giác (Visual Hook), Mức độ minh bạch thông tin (Information Clarity), và Tính chân thực của sản phẩm (Product Authenticity).',
      'case.4.sop.heading2': '2. Giải Phẫu Ấn Phẩm Tiêu Chuẩn (Anatomy of a Perfect Promotional Poster)',
      'case.4.sop.anatomy.1.title': 'Trọng tâm thị giác (The Focal Anchor)',
      'case.4.sop.anatomy.1.desc': 'Badge thông báo cốt lõi (ví dụ: Cụm 3D "SALE 20%"). Đặt ngay tâm điểm tỷ lệ vuông 1:1 để tạo điểm neo ngay giây đầu tiên khách hàng nhìn thấy. Xung quanh là không gian nền được bổ trợ bởi các họa tiết (confetti, phao bơi) để định hình vibe lễ hội mà không tranh giành sự chú ý.',
      'case.4.sop.anatomy.2.title': 'Hiển thị Sản phẩm (Product Placement)',
      'case.4.sop.anatomy.2.desc': 'Nơi trưng bày các "Hero Items" (Quần đùi, Áo phông). Ở phần này, nguyên tắc tối thượng là: Mọi chi tiết đặc trưng làm nên giá trị sản phẩm bắt buộc phải được trích xuất (crop) nguyên bản 100% từ ảnh chụp thực tế. Tuyệt đối không để AI tự vẽ lại (redraw) hay dùng hình minh họa (mockup) để giữ nguyên vẹn form dáng, tag logo và bề mặt chất liệu.',
      'case.4.sop.anatomy.3.title': 'Khu vực Lợi ích gia tăng (Incentive/Giveaway Zone)',
      'case.4.sop.anatomy.3.desc': 'Banner phụ đóng khung rõ ràng để trình bày thể lệ quay thưởng. Chia tách rành mạch thứ bậc giải thưởng: "Giải Đặc Biệt" (Hộp mù) và "Các Giải Khác" (Áo nỉ) bằng các con số 3D khổng lồ để kích thích tâm lý FOMO.',
      'case.4.sop.anatomy.4.title': 'Hệ quy chiếu Hành động (Call-to-Action & Navigation)',
      'case.4.sop.anatomy.4.desc': 'Chân đế của poster chứa luồng thông tin chốt hạ. Cung cấp đường dẫn mua hàng (website), hệ thống Fanpage, và đặc biệt là mốc thời gian/địa điểm diễn ra sự kiện phải chính xác tuyệt đối (ví dụ: Livestream kênh YouTube Lê Khôi lúc 17:00 ngày 26/3/2026), có kèm theo icon nền tảng trực quan để điều hướng ngay lập tức.',
      'case.4.sop.heading3': '3. CÔNG THỨC/PROMPT LẬP LUẬN TẠO POSTER (The Execution Framework)',
      'case.4.sop.framework.1.title': 'BƯỚC 1: INPUT - THU THẬP DỮ LIỆU ĐẦU VÀO',
      'case.4.sop.framework.1.p1': 'Mục tiêu chiến dịch: Sự kiện là gì? (Summer Fest). Ưu đãi chính là gì? (Giảm toàn bộ 20%).',
      'case.4.sop.framework.1.p2': 'Danh sách tài nguyên: Có bao nhiêu hình ảnh sản phẩm thực tế cần đưa vào? (Áo, quần, hộp mù, áo nỉ dài tay). Đã có bản chụp studio chất lượng cao để tiến hành tách nền chưa?',
      'case.4.sop.framework.1.p3': 'Thông điệp truyền thông: Các câu copy chính xác từng dấu câu (Ví dụ: "Mọi đơn hàng đều có cơ hội!"). Nền tảng phát sóng là gì? Mốc thời gian chốt (deadline/livestream time).',
      'case.4.sop.framework.2.title': 'BƯỚC 2: LOGIC - XỬ LÝ KHÔNG GIAN & BỐ CỤC',
      'case.4.sop.framework.2.p1': 'Quy tắc Cân bằng đối xứng (Symmetrical Balance): Áp dụng mạnh mẽ cho các thiết kế vuông 1:1 trên Social Media. Nếu bên trái có cụm Quần đùi (150.000đ), bên phải phải có Áo phông (200.000đ) để đối trọng lại. Mắt người xem sẽ tự động quét từ logo đỉnh đầu dọc xuống phần badge sale trung tâm.',
      'case.4.sop.framework.2.p2': 'Quy tắc Độ chính xác Thông tin (Data Accuracy): Rà soát và tinh chỉnh các chi tiết dễ gây nhầm lẫn. Thay vì để một khoảng thời gian chung chung khó nhớ, cần thu hẹp lại thành một mốc giờ cụ thể, duy nhất để định hình thói quen chờ đón của khách hàng (chốt hạ đúng 17:00 thay vì một dải giờ).',
      'case.4.sop.framework.3.title': 'BƯỚC 3: OUTPUT - TRỰC QUAN HÓA & HIỂN THỊ',
      'case.4.sop.framework.3.p1': 'Xử lý Kỹ thuật (Upscaling & Retouching): Nhược điểm lớn nhất của AI là độ phân giải đầu ra thường bị giới hạn (chỉ ở mức 640x640) và mờ nhòe chữ. Bắt buộc phải đưa qua quy trình upscale lên chuẩn Ultra-sharp 4K (2048x2048) và gõ lại toàn bộ Text tiếng Việt sắc nét để đảm bảo không một đường viền hay con số nào bị nát khi zoom cận.',
      'case.4.sop.framework.3.p2': 'Lắp ráp & Hoàn thiện (Compositing): Nhúng (embed) các file sản phẩm thật (đã crop nguyên bản) đè lên cấu trúc phác thảo của AI. Thêm hiệu ứng nổi/chìm hợp lý, gắn thêm các nhận diện nền tảng (như nút Play đỏ của YouTube) bên cạnh text để hoàn thiện tối đa trải nghiệm mua sắm trực quan.',
      
      // SOP Case 5
      'case.5.sop.title': 'Kỷ Nguyên Mới Của Hệ Thống Xử Lý Đơn Hàng — Từ Số Liệu Thô Đến Tự Động Hóa Vận Hành 1-Click',
      'case.5.sop.subtitle': 'The Order Processing S.O.P: Translating Raw E-commerce Data into 1-Click Automated Operations',
      'case.5.sop.heading1': '1. Triết Lý Thiết Kế (The Philosophy)',
      'case.5.sop.philosophy': 'Một hệ thống xử lý đơn hàng tốt không nằm ở những dòng code phức tạp hay giao diện lộng lẫy. Nó nằm ở khả năng giải phóng sức lao động của con người từ những thao tác thủ công lặp đi lặp lại. Một kịch bản tự động hóa (Automation Script) chất lượng cần giải quyết 3 yếu tố: Tính chính xác tuyệt đối (Absolute Accuracy), Tốc độ xử lý tối ưu (Processing Speed), và Giao diện điều hướng thân thiện (Intelligent Interface).',
      'case.5.sop.heading2': '2. Giải Phẫu Hệ Thống Tiêu Chuẩn (Anatomy of a Perfect Order Processing Script)',
      'case.5.sop.anatomy.1.title': 'Tập trung hóa Dữ liệu (Unified Data Input)',
      'case.5.sop.anatomy.1.desc': 'Tự động lọc sạch dữ liệu thô từ web. Từ hơn 75+ cột thông tin phức tạp, trích xuất chính xác 20 cột dữ liệu quan trạng nhất (thông tin khách hàng, số điện thoại, địa chỉ, loại sản phẩm) để tối ưu dung lượng hiển thị và giảm tải bộ nhớ cho Google Sheets.',
      'case.5.sop.anatomy.2.title': 'Thuật toán Gộp đơn thông minh (Intelligent Merging Algorithm)',
      'case.5.sop.anatomy.2.desc': 'Tự động quét và đối chiếu các đơn hàng trùng số điện thoại nhận hàng. Thực hiện gộp các đơn lẻ tẻ của cùng một khách hàng để tối ưu hóa chi phí vận chuyển, tránh bỏ sót đơn hàng và giữ nguyên vẹn thông tin chi tiết từng sản phẩm.',
      'case.5.sop.anatomy.3.title': 'Giao diện sidebar điều khiển trực quan (Custom Sidebar UI)',
      'case.5.sop.anatomy.3.desc': 'Tích hợp bảng điều khiển HTML/CSS trực tiếp trong sidebar của Google Sheets. Cho phép CSKH dễ dàng khởi chạy, tạm dừng, hoặc xem trước (preview) kết quả gộp đơn trước khi xuất dữ liệu cuối cùng, mang lại quyền kiểm soát tối đa cho con người.',
      'case.5.sop.anatomy.4.title': 'Marker Đánh dấu Trạng thái (Visual Marker & Status Tracking)',
      'case.5.sop.anatomy.4.desc': 'Hệ thống tô màu thông minh tự động đánh dấu các dòng đơn hàng theo trạng thái xử lý (Ví dụ: Màu xanh lá cho đơn gộp thành công, màu vàng cho đơn cần kiểm tra thủ công) để tránh tuyệt đối lỗi xử lý trùng lặp đơn hàng.',
      'case.5.sop.heading3': '3. CÔNG THỨC/PROMPT LẬP LUẬN TẠO SCRIPT (The Execution Framework)',
      'case.5.sop.framework.1.title': 'BƯỚC 1: INPUT - KHẢO SÁT & THU THẬP YÊU CẦU',
      'case.5.sop.framework.1.p1': 'Khảo sát quy trình: Team CSKH đang thao tác thủ công những bước nào? (Lọc cột, tìm kiếm SĐT trùng, tính tiền ship). Mất bao nhiêu phút cho mỗi lượt xử lý?',
      'case.5.sop.framework.1.p2': 'Phân tích cấu trúc file thô: Xác định các trường dữ liệu bắt buộc (SĐT, Họ tên, Địa chỉ, Sản phẩm) và loại bỏ các cột không cần thiết.',
      'case.5.sop.framework.1.p3': 'Xác định điều kiện biên: Xử lý các trường hợp ngoại lệ như địa chỉ viết tắt khác nhau hoặc số điện thoại bị thiếu số 0 ở đầu.',
      'case.5.sop.framework.2.title': 'BƯỚC 2: LOGIC - PHÁT TRIỂN THUẬT TOÁN',
      'case.5.sop.framework.2.p1': 'Logic gộp trùng: Thiết lập điều kiện gộp dựa trên số điện thoại nhận hàng. Nếu trùng SĐT, gộp chi tiết đơn (Loại áo, size, số lượng) và cộng dồn tổng tiền đơn hàng.',
      'case.5.sop.framework.2.p2': 'Quản lý trạng thái: Thiết kế cơ chế ghi nhật ký (log) và tô màu tự động để CSKH dễ dàng nhận diện đơn hàng đã được xử lý thành công, tránh bị sót đơn.',
      'case.5.sop.framework.3.title': 'BƯỚC 3: OUTPUT - TỐI ƯU HÓA & VẬN HÀNH',
      'case.5.sop.framework.3.p1': 'Kiểm thử hiệu năng (Benchmarking): Kiểm tra tốc độ chạy script với tệp dữ liệu lớn (3300+ đơn). Tối ưu hóa các vòng lặp Sheets API (sử dụng mảng 2 chiều lưu trữ tạm thời thay vì đọc ghi liên tục trên từng dòng để tránh lỗi timeout).',
      'case.5.sop.framework.3.p2': 'Custom Sidebar UI: Xây dựng bảng điều khiển HTML/CSS thân thiện, tích hợp phím tắt 1-click để CSKH vận hành hệ thống dễ dàng mà không cần am hiểu code.',
      
      // SOP Case 6
      'case.6.sop.title': 'Kỷ Nguyên Mới Của Portfolio Cá Nhân — Từ Trải Nghiệm Tương Tác Đến Tối Ưu Hóa Trực Quan Bằng AI',
      'case.6.sop.subtitle': 'The AI-Assisted Portfolio S.O.P: Translating Creative Vision into High-Performance Vanilla Web Engineering',
      'case.6.sop.heading1': '1. Triết Lý Thiết Kế (The Philosophy)',
      'case.6.sop.philosophy': 'Một portfolio không chỉ là một trang CV tĩnh trực tuyến. Nó là một sản phẩm phần mềm hoàn chỉnh thể hiện tư duy thiết kế, năng lực kỹ thuật và câu chuyện thương hiệu cá nhân của tác giả. Một portfolio chất lượng cần giải quyết 3 yếu tố: Trải nghiệm tương tác độc bản (Unique Interactive Experience), Hiệu năng tải trang cực hạn (Ultra-Performance), và Khả năng tiếp cận đa ngôn ngữ (Seamless Accessibility).',
      'case.6.sop.heading2': '2. Giải Phẫu Hệ Thống (Anatomy of a Perfect Portfolio)',
      'case.6.sop.anatomy.1.title': 'Thiết kế Parallax Độc bản (Personalized Visual Narrative)',
      'case.6.sop.anatomy.1.desc': 'Hiệu ứng Parallax 3D lấy cảm hứng từ mây núi Sapa. Chia tách các lớp hình ảnh nền (background), sương mù (fog layers), núi đồi và tiền cảnh, chuyển động với tốc độ khác nhau khi người dùng cuộn trang để tạo chiều sâu không gian chân thực.',
      'case.6.sop.anatomy.2.title': 'Quy trình leo núi mô phỏng sự nghiệp (Interactive Career Timeline)',
      'case.6.sop.anatomy.2.desc': 'Con đường leo núi trực quan sử dụng SVG Dasharray động. Khi người dùng cuộn trang, đường viền vẽ con đường sự nghiệp sẽ tự động vẽ dài ra, tạo điểm neo kích thích hành vi đọc tiếp của nhà tuyển dụng.',
      'case.6.sop.anatomy.3.title': 'Bản dịch Song ngữ & Chủ đề Tức thời (Zero-Latency Localization & Theme)',
      'case.6.sop.anatomy.3.desc': 'Hệ thống i18n tự phát triển bằng JavaScript thuần. Chuyển đổi ngôn ngữ VI/EN tức thì mà không cần load lại trang. Đồng thời lưu trữ trạng thái Theme (Sáng/Tối) trong LocalStorage để tối ưu trải nghiệm cá nhân.',
      'case.6.sop.anatomy.4.title': 'Thư viện ảnh Case Study thông minh (Intelligent Cropless Modal Gallery)',
      'case.6.sop.anatomy.4.desc': 'Modal chi tiết case study tích hợp bộ dò tìm ảnh tự động (fetch HEAD probing) giúp tự nhận diện ảnh 1.png đến xxx.png trong thư mục dự án và hiển thị dạng slide ảnh với thumbnail co giãn tự nhiên không bị cắt góc.',
      'case.6.sop.heading3': '3. CÔNG THỨC/PROMPT LẬP LUẬN TẠO PORTFOLIO (The Execution Framework)',
      'case.6.sop.framework.1.title': 'BƯỚC 1: INPUT - THIẾT KẾ Ý TƯỞNG & ASSETS',
      'case.6.sop.framework.1.p1': 'Lên ý tưởng theme Sapa độc bản -> Vẽ phác thảo cấu trúc Parallax -> Xuất file SVG đường dẫn leo núi -> Tạo các bộ asset ảnh dự án chuẩn hóa theo quy tắc 1.png -> xxx.png.',
      'case.6.sop.framework.1.p2': 'Chuẩn bị dữ liệu: Soạn thảo nội dung case study song ngữ chi tiết cho toàn bộ 6 dự án thực chiến.',
      'case.6.sop.framework.1.p3': 'Thiết lập tài nguyên: Chuẩn bị các biến thể hình ảnh và sơ đồ tối giản phẳng để nạp vào thư viện.',
      'case.6.sop.framework.2.title': 'BƯỚC 2: LOGIC - PHÁT TRIỂN & TỐI ƯU HIỆU NĂNG',
      'case.6.sop.framework.2.p1': 'Lập trình bằng Vanilla HTML/CSS/JS thuần, không sử dụng framework cồng kềnh (React/Next.js) để tối đa hóa điểm Lighthouse (100% Performance) -> Sử dụng requestAnimationFrame để tối ưu hóa hiệu năng cuộn Parallax đạt 60fps mượt mà.',
      'case.6.sop.framework.2.p2': 'Xử lý logic tương tác: Thiết lập trình bắt sự kiện để đóng/mở modal, trap focus, chống scroll nền (body scroll lock) và xử lý đổi ngôn ngữ real-time cho cả modal.',
      'case.6.sop.framework.3.title': 'BƯỚC 3: OUTPUT - RETOUCHING & HOÀN THIỆN',
      'case.6.sop.framework.3.p1': 'Sử dụng các mô hình AI (như Gemini/Claude) để tối ưu hóa code, viết bộ dò ảnh động client-side, và kiểm thử khả năng responsive trên mọi thiết bị di động -> Retouch hiệu ứng bóng đổ, bo góc kính mờ (Glassmorphism) cực kỳ cao cấp.',
      'case.6.sop.framework.3.p2': 'Tối ưu hóa SEO & Khả năng tiếp cận: Thêm thẻ meta, semantic HTML5, kiểm thử độ tương phản màu sắc và hỗ trợ điều hướng bằng bàn phím (nút ESC) cho trải nghiệm người dùng toàn diện.',
    },
    en: {
      'page.title': 'Ma Duc Anh — From Sapa to Code',
      'page.description': 'Ma Duc Anh — From Sapa to Tech. Operations specialist who builds internal tools, integrates AI into workflows, and designs everything needed.',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Journey',
      'nav.contact': 'Contact',
      'nav.status': 'Available for work (Full-time / Remote)',
      'hero.badge': 'Operations · Automation · AI Integration',
      'hero.greeting': "hi, i'm",
      'hero.tagline': 'Building tools for teams — from Google Sheets to AI API',
      'hero.subtitle': '3+ years running CS ops for the Độ Mixi ecosystem. Self-taught programmer, building production internal apps, integrating AI into daily workflows.',
      'hero.cta.portfolio': 'View projects',
      'hero.cta.cv': '📄 Download CV',
      'hero.cta.contact': 'Contact',
      'about.label': 'About me',
      'about.title': 'From Sapa to Code',
      'about.p1': 'Starting as a bartender serving international guests in Sapa, I gradually transitioned into e-commerce and taught myself programming by solving real problems every day.',
      'about.p2': "Over the past 3+ years, I've built internal tools for a 10-person CS team across the Độ Mixi ecosystem, integrated OpenAI & Gemini API into operational workflows, and designed everything from marketing banners to automated order management systems.",
      'about.quote': "Don't wait for someone to code it — just build it yourself. Build it once, keep it running for 3+ years.",
      'about.stat.years': 'Years in production',
      'about.stat.orders': 'Orders processed',
      'about.stat.brands': 'Brands served',
      'about.stat.events': 'Events coordinated',
      'projects.label': 'Projects',
      'projects.title': 'Real-world products',
      'projects.subtitle': "Not side projects — these are tools running in production, serving real teams every day.",
      'project.1.title': 'Mixer Order Management App',
      'project.1.desc': 'Cut order processing time by 70% for a 10-person team. Auto-parses customer info, calculates totals, generates QR payments. Running in production 3+ years, system processed 100K+ orders.',
      'project.2.title': 'Restaurant Ops PWA',
      'project.2.desc': 'Built a restaurant operations system from scratch — tour booking, real-time order tracking, auto-OCR invoices. React + TypeScript + Supabase.',
      'project.3.title': 'Product Design — Mixer Brand',
      'project.3.desc': 'Designed sizing charts and product specs for 3 Mixer product lines. AI-generated mockups + layouts, directly deployed to Shopee/TikTok Shop by the Marketing team.',
      'project.4.title': 'Marketing Campaign — MixiShop',
      'project.4.desc': 'Summer Fest campaign banner driving thousands of interactions. 20% sale + live giveaway. Designed with AI + Canva in a single afternoon.',
      'project.5.title': 'Mixishop — Order Processing System',
      'project.5.desc': 'Auto-filters 75+ columns → 20 essentials, merges orders by phone number, custom sidebar UI inside Google Sheets. Processes 3,300+ orders/batch for the CS team.',
      'project.6.title': 'This Portfolio — Built with AI',
      'project.6.desc': 'The site you\'re viewing right now — designed with AI from idea to deployment. Vanilla HTML/CSS/JS, mountain parallax, bilingual VI/EN, no framework.',
      'experience.label': 'Journey',
      'experience.title': 'The mountain trail',
      'exp.1.date': '2022 — Present',
      'exp.1.role': 'Customer Success & Operations Automation (Remote)',
      'exp.1.company': 'Mixer · Mixishop · Mixifood — Độ Mixi Ecosystem',
      'exp.1.d1': 'Multi-channel CS for 3 brands, 10-person team, peak 2-3K orders/month/brand',
      'exp.1.d2': 'Self-built internal Apps Script app for order management — production 3+ years',
      'exp.1.d3': 'Integrated OpenAI/Gemini API into daily CS workflow',
      'exp.2.date': 'Jul 2025 — Present',
      'exp.2.role': 'Operations Support & Waitstaff (Part-time)',
      'exp.2.company': 'Indigo Restaurant Lá Chàm — Sapa',
      'exp.2.d1': 'Serve 5-20 tour groups/day, 4-50 guests/group',
      'exp.2.d2': 'Handle multi-channel booking with tour operators',
      'exp.3.date': '2018 — 2022',
      'exp.3.role': 'Freelance: Tour Guide + Event + Design',
      'exp.3.company': 'Hanoi',
      'exp.3.d1': 'Guided ~20 student groups, largest group 100+ people',
      'exp.3.d2': 'Logistics for ~34 multi-format events',
      'exp.3.d3': 'Banner & poster design for small businesses',
      'exp.4.date': '2016 — 2017',
      'exp.4.role': 'Bartender & Operations Supervisor',
      'exp.4.company': 'Backpacker Hotel Sapa',
      'exp.4.d1': 'Front-of-house operations for international backpackers (EU, US, AU)',
      'exp.4.d2': 'Promoted from bartender to supervisor',
      'edu.date': '2017 — 2024',
      'edu.degree': 'Bachelor of Vietnamese Studies',
      'edu.school': 'Thang Long University — Hanoi',
      'edu.badge': '⚡ Learned while working',
      'edu.quote': 'Beyond the classroom, everything from code to design was self-taught through real production work — products running in production are the best certificates.',
      
      'case.label': 'Case Study',
      'case.title': 'A deeper look',
      'case.problem': '❌ Problem',
      'case.solution': '✅ My solution',
      'case.results': '📈 Results',
      'case.demo.visit': 'Visit Live Demo ⚡',
      
      // Case 1: Mixer App
      'case.1.name': 'Mixer Order Management App',
      'case.1.meta': 'Google Apps Script · Production 3+ years · 10-person team',
      'case.1.images': [
        'assets/projects/mixer-app/1.png',
        'assets/projects/mixer-app/2.png',
        'assets/projects/mixer-app/3.png',
        'assets/projects/mixer-app/4.png',
        'assets/projects/mixer-app/5.png'
      ],
      'case.1.p1': '10-person team processing orders manually via Google Sheets — copy-pasting customer info, calculating totals by hand',
      'case.1.p2': '~15% order error rate: wrong names, sizes, totals',
      'case.1.p3': 'Peak season 2-3K orders/month/brand — team overloaded, slow response',
      'case.1.s1': 'Auto-parse customer info (name, phone, address) from messages',
      'case.1.s2': 'Order CRUD with validation: stock check, auto-calculate totals',
      'case.1.s3': 'Generate confirmation text + 1-click QR payment',
      'case.1.s4': 'Integrated OpenAI API: auto-draft customer replies from templates',
      'case.1.r1.val': '-70%',
      'case.1.r1.lbl': 'Processing time/order',
      'case.1.r2.val': '~2%',
      'case.1.r2.lbl': 'Error rate (from 15%)',
      'case.1.r3.val': '100K+',
      'case.1.r3.lbl': 'Orders processed',
      'case.1.r4.val': '3+',
      'case.1.r4.lbl': 'Years in production',
      'case.1.quote': 'No dev team. No budget for outsourcing. Just one person who saw the problem and built the solution.',
      'case.1.link': 'https://docs.google.com/spreadsheets/d/1x0w5bIoiuYuS71FMBvI_PLmSBHiiyeo93Zl0loi7Asc/edit?usp=sharing',
      'case.1.btnText': 'Visit Sheets Demo 📊',
      'case.1.creds': 'Since the demo link is in Viewer-only mode, the <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">Extensions > Apps Script</code> option is disabled. Please select <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">File > Make a copy</code> to duplicate it to your own Google Drive. In your copy, you can access the Apps Script editor to view the source code.',
      
      // SOP Case 1
      'case.1.sop.title': 'A New Era of Order Management — Transitioning from Manual Workflows to 1-Click Automation',
      'case.1.sop.subtitle': 'The Mixer Order Management S.O.P: Streamlining E-commerce Operations with Google Apps Script',
      'case.1.sop.heading1': '1. Design Philosophy (The Philosophy)',
      'case.1.sop.philosophy': 'An internal management tool does not need a gorgeous interface, but it must maximize input speed and eliminate human error. The system must address 3 factors: One-click Ingestion, Real-time Validation, and Maximum Automation.',
      'case.1.sop.heading2': '2. System Anatomy (Anatomy of a Perfect Sheets Order App)',
      'case.1.sop.anatomy.1.title': 'Text RegEx Parsing (Automatic text parsing)',
      'case.1.sop.anatomy.1.desc': 'Intelligent Regular Expressions (RegEx) algorithms automatically parse incoming customer chat messages (Name, Phone, Address, Product code, Size) to auto-fill the order billing draft, completely eliminating manual copy-pasting.',
      'case.1.sop.anatomy.2.title': 'Real-time Stock & Price Audit (Inventory & price validation)',
      'case.1.sop.anatomy.2.desc': 'Directly links and queries inventory and pricing tables in real-time. The system automatically warns the agent in red if the selected product is out of stock or price is mismatched before allowing order creation.',
      'case.1.sop.anatomy.3.title': 'Dynamic 1-Click QR Payment (Dynamic QR payments)',
      'case.1.sop.anatomy.3.desc': 'Integrates dynamic VietQR generation following Napas standards, encoding bank account details, exact total amount, and order ID into the QR code for error-free 1-click customer check-outs.',
      'case.1.sop.anatomy.4.title': 'Auto-Reply Messaging (Standardized confirmation draft)',
      'case.1.sop.anatomy.4.desc': 'The system automatically formats order confirmation drafts based on preset templates, embedding the dynamic payment QR link for the customer success agent to send with 1-click.',
      'case.1.sop.heading3': '3. THE EXECUTION FRAMEWORK (The Execution Framework)',
      'case.1.sop.framework.1.title': '[STEP 1: INPUT - TEXT EXTRACTION]',
      'case.1.sop.framework.1.p1': 'CS agent copies customer chat text, pastes it into the Custom Sidebar UI within Google Sheets, and clicks extract.',
      'case.1.sop.framework.1.p2': 'The RegEx algorithm parses and pre-fills fields on the form. If critical data like Phone or Address is missing, the system highlights fields in red to prompt the agent.',
      'case.1.sop.framework.1.p3': 'The CS agent double-checks the auto-filled fields and appends special notes if any (such as urgent delivery or scheduled shipping).',
      'case.1.sop.framework.2.title': '[STEP 2: LOGIC - VALIDATION & SAVE]',
      'case.1.sop.framework.2.p1': 'The system automatically queries stock availability. If available, the "Save Order" button is enabled; otherwise, it throws a low-stock error block.',
      'case.1.sop.framework.2.p2': 'Clicking Save triggers Apps Script to commit records into the main master sheet database, calculates final totals, and generates a dynamic VietQR payment link.',
      'case.1.sop.framework.3.title': '[STEP 3: OUTPUT - CONFIRMATION & SYNC]',
      'case.1.sop.framework.3.p1': 'The system displays the formatted confirmation message and payment link. The agent copies it to send to the client in 1 second.',
      'case.1.sop.framework.3.p2': 'Warehouse Sync: Saved order records are synced in real-time to the warehouse Google Sheet, allowing packing teams to print shipping labels immediately.',

      // Case 2: Restaurant Ops
      'case.2.name': 'Restaurant Ops PWA',
      'case.2.meta': 'React · Supabase · Mobile PWA · Real-time',
      'case.2.images': [
        'assets/projects/restaurant-ops/1.png',
        'assets/projects/restaurant-ops/2.png',
        'assets/projects/restaurant-ops/3.png',
        'assets/projects/restaurant-ops/4.png',
        'assets/projects/restaurant-ops/5.png'
      ],
      'case.2.p1': 'Restaurant operations relied on manual paper tickets, leading to lost or delayed orders',
      'case.2.p2': 'Tour group bookings from travel agencies flooded via chat/phone, causing info overlaps',
      'case.2.p3': 'Reconciling invoices and daily revenue at the end of the day took hours and was prone to errors',
      'case.2.s1': 'Built a mobile-friendly Progressive Web App (PWA) for waitstaff to use on the floor',
      'case.2.s2': 'Synced orders in real-time between kitchen and servers using Supabase real-time database',
      'case.2.s3': 'Integrated OCR (optical character recognition) to automatically scan and parse tour invoices in 3 seconds',
      'case.2.s4': 'Created a unified dashboard to digitize all tour group booking schedules',
      'case.2.r1.val': '-50%',
      'case.2.r1.lbl': 'Order processing time',
      'case.2.r2.val': '0',
      'case.2.r2.lbl': 'Paper waste',
      'case.2.r3.val': '95%',
      'case.2.r3.lbl': 'OCR scanning accuracy',
      'case.2.r4.val': 'Real-time',
      'case.2.r4.lbl': 'Kitchen-staff sync',
      'case.2.quote': 'Digital transformation doesn\'t need to be huge. A compact, focused PWA resolving daily operational pain points is all it takes.',
      'case.2.link': 'https://saram-alpha.vercel.app',
      'case.2.creds': 'Username: <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">quanly</code> / Password: <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">123456</code>',
      'case.2.btnText': 'Visit Live Demo ⚡',
      
      // SOP Case 2
      'case.2.sop.title': 'The Restaurant Operations S.O.P: Transitioning from Paper Operations to Real-Time PWA & AI Systems (In Development)',
      'case.2.sop.subtitle': 'A New Era of Restaurant Operations – Connecting Reception, Service, Kitchen, and Management in Real-Time',
      'case.2.sop.heading1': '1. Design Philosophy (The Philosophy)',
      'case.2.sop.philosophy': 'An operational application is not just a mobile form. It is the backbone connecting Reception, Waitstaff, Kitchen, and Management to create a seamless dining experience. The system must resolve three elements: Instant Real-time Sync, Automated Touchpoints, and Operational Security.',
      'case.2.sop.heading2': '2. Anatomy of a Perfect Restaurant Ops PWA (Anatomy of a Perfect Restaurant Ops PWA)',
      'case.2.sop.anatomy.1.title': 'AI OCR Booking Ingestion (AI OCR Booking Ingestion)',
      'case.2.sop.anatomy.1.desc': 'Intelligent OCR automatically extracts core booking details (Name, Phone, Pax, Time, Menu, Notes) from travel agent booking vouchers sent via messaging apps, reducing manual entry time from 5 minutes to 3 seconds.',
      'case.2.sop.anatomy.2.title': 'Real-time Table & Area Mapping (Real-time Table & Area Mapping)',
      'case.2.sop.anatomy.2.desc': 'Visual management of dining zones (A1, A2, B1, B2...) powered by Supabase Realtime Pub/Sub to synchronize table status (vacant, serving, dirty) instantly across all staff devices.',
      'case.2.sop.anatomy.3.title': 'Smart Workforce Attendance (Smart Workforce Attendance)',
      'case.2.sop.anatomy.3.desc': 'Secure 3-layer attendance check: matching device fingerprint (Device ID), validating local Wi-Fi SSID, and GPS geofencing within a tight radius to prevent remote check-in fraud for complex shifts.',
      'case.2.sop.anatomy.4.title': '⚠️ Implementation Status (Implementation Status)',
      'case.2.sop.anatomy.4.desc': 'PROJECT IN DEVELOPMENT: The system is currently in the build and internal testing phase. It has not yet been deployed in a live production environment, allowing for further optimization and stability tuning.',
      'case.2.sop.heading3': '3. THE EXECUTION FRAMEWORK (The Execution Framework)',
      'case.2.sop.framework.1.title': '[STEP 1: INPUT - DIGITAL INGESTION]',
      'case.2.sop.framework.1.p1': 'Receptionist uploads booking vouchers -> AI OCR analyzes and generates a Booking Draft -> The system estimates table mapping structure based on Pax size (e.g., 2x6 + 1x4).',
      'case.2.sop.framework.1.p2': 'Data Verification: CS agents double-check the AI-parsed content (Group name, date, menu) and click save to officially instantiate the Booking on the database.',
      'case.2.sop.framework.1.p3': 'Security Flag: If AI confidence is low, the system automatically tags the draft as "Needs Review" to alert the receptionist for manual verification.',
      'case.2.sop.framework.2.title': '[STEP 2: LOGIC - REAL-TIME ORCHESTRATION]',
      'case.2.sop.framework.2.p1': 'Updates Booking status to "Reserved" or "Arrived" -> Supabase Realtime broadcasts table states system-wide -> Servers claim tables and send orders to the kitchen instantly.',
      'case.2.sop.framework.2.p2': 'Kitchen Coordination: Any updates to dish serving states or table moves (recorded in Move History logs) are instantly synchronized on the manager\'s active device.',
      'case.2.sop.framework.3.title': '[STEP 3: OUTPUT - AUDIT & SECURITY CHECK]',
      'case.2.sop.framework.3.p1': 'Staff checks in via mobile -> GPS geofencing & Wi-Fi verify physical location -> System registers attendance log, schedules shifts, and records Table Move History for quality audit.',
      'case.2.sop.framework.3.p2': 'Inventory Deductions: At shift closing, the system aggregates actual guest tallies and correlates them with kitchen condiment usage rules to estimate raw material inventory depletion.',

      // Case 3: Product Design
      'case.3.name': 'Product Design — Mixer Brand',
      'case.3.meta': 'Midjourney · Figma · Canva · Creative Ops',
      'case.3.images': ['assets/projects/mixer-sizing/1.png', 'assets/projects/mixer-sizing/2.png', 'assets/projects/mixer-sizing/3.png'],
      'case.3.p1': 'Legacy sizing charts were poorly designed, making it hard for customers to visualize product fits',
      'case.3.p2': 'High product return rate due to incorrect sizing (~12%), wasting double-sided shipping costs',
      'case.3.p3': 'Lack of realistic visual mockups made products blend in on Shopee and TikTok Shop',
      'case.3.s1': 'Researched standard specs for 3 core Mixer product lines (New State Shirt, Kosmix Polo, T-shirt)',
      'case.3.s2': 'Used AI Midjourney to generate realistic model mockups with clean lighting and high fidelity',
      'case.3.s3': 'Designed modern, intuitive sizing chart layouts on Figma/Canva, emphasizing crucial measurements',
      'case.3.r1.val': '3 lines',
      'case.3.r1.lbl': 'Product lines covered',
      'case.3.r2.val': '~3%',
      'case.3.r2.lbl': 'Return rate (from 12%)',
      'case.3.r3.val': '+25%',
      'case.3.r3.lbl': 'Product CTR',
      'case.3.r4.val': 'AI-based',
      'case.3.r4.lbl': 'Design workflow',
      'case.3.quote': 'Harnessing the power of Generative AI to bypass expensive studio shoots, delivering direct impact on e-commerce metrics.',

      // Case 4: Marketing Campaign
      'case.4.name': 'Marketing Campaign — MixiShop',
      'case.4.meta': 'AI Creative · Canva · Campaign Ops · 1 Day',
      'case.4.images': ['assets/projects/mixishop-campaign/1.png'],
      'case.4.p1': 'The major "Summer Fest" sale required a complete set of banners across all social channels in 24 hours',
      'case.4.p2': 'No designer was available during the weekend, and design budget was strictly zero ($0)',
      'case.4.p3': 'Needed a striking visual concept to drive engagement for the lucky wheel minigame',
      'case.4.s1': 'Used Generative AI to create a vibrant summer beach background with outstanding 3D elements',
      'case.4.s2': 'Utilized Canva to overlay products, layout typography, and export dimensions for FB & IG stories/posts',
      'case.4.s3': 'Unified the campaign\'s core orange-blue color palette across all design variations',
      'case.4.r1.val': '1 Day',
      'case.4.r1.lbl': 'Turnaround time',
      'case.4.r2.val': '1000+',
      'case.4.r2.lbl': 'Social interactions',
      'case.4.r3.val': '$0',
      'case.4.r3.lbl': 'Design cost',
      'case.4.r4.val': '+40%',
      'case.4.r4.lbl': 'Campaign revenue boost',
      'case.4.quote': 'When time is tight, AI is the best assistant to double the productivity of an independent marketer.',

      // Case 5: Mixishop System
      'case.5.name': 'Mixishop — Order Processing System',
      'case.5.meta': 'Google Apps Script · JavaScript · Automation · Sheets',
      'case.5.images': ['assets/projects/mixishop-system/1.png', 'assets/projects/mixishop-system/2.png'],
      'case.5.p1': 'Raw order exports contained 75+ columns; CS team spent hours filtering columns manually',
      'case.5.p2': 'Customers placing multiple orders needed merging to save shipping; manual matching missed items',
      'case.5.p3': 'Orders lacked clear status indicators, leading to occasional double-shipping errors',
      'case.5.s1': 'Wrote Google Apps Script to automate the flow: selecting 20 key columns out of 75+ with 1-click',
      'case.5.s2': 'Developed an algorithm to automatically match and merge orders sharing the same phone number',
      'case.5.s3': 'Customized a sidebar UI in Google Sheets for CS staff to easily control and preview merged results',
      'case.5.s4': 'Implemented a color-coding system to mark processed rows with intelligent visual markers',
      'case.5.r1.val': '3300+',
      'case.5.r1.lbl': 'Orders processed/batch',
      'case.5.r2.val': '-90%',
      'case.5.r2.lbl': 'Processing time cut',
      'case.5.r3.val': '0',
      'case.5.r3.lbl': 'Merging errors',
      'case.5.r4.val': '1-click',
      'case.5.r4.lbl': 'Execution effort',
      'case.5.quote': 'A good script can replace dozens of hours of repetitive and tedious manual work.',
      'case.5.link': 'https://docs.google.com/spreadsheets/d/1i9Q7dAubveCnlKbJFB1ytMePvr8auTw3oDOuetOrhiw/edit?usp=sharing',
      'case.5.btnText': 'Visit Sheets Demo 📊',
      'case.5.creds': 'Since the demo link is in Viewer-only mode, the <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">Extensions > Apps Script</code> option is disabled. Please select <code style="padding: 2px 6px; background: var(--bg-elevated); border: 1px solid var(--border-subtle); border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: var(--accent);">File > Make a copy</code> to duplicate it to your own Google Drive. In your copy, you can access the Apps Script editor to view the source code.',

      // Case 6: Portfolio
      'case.6.name': 'This Portfolio — Built with AI',
      'case.6.meta': 'HTML · CSS · JS · i18n · Responsive',
      'case.6.images': [
        'assets/projects/portfolio-site/1.png',
        'assets/projects/portfolio-site/2.png',
        'assets/projects/portfolio-site/3.png',
        'assets/projects/portfolio-site/4.png'
      ],
      'case.6.p1': 'Needed an online portfolio that shows personality and drive, rather than using generic templates',
      'case.6.p2': 'Must prove self-taught coding abilities, hands-on UX/UI thinking, and product operation skills',
      'case.6.p3': 'The website had to load instantly, work flawlessly on mobile, and accommodate foreign recruiters',
      'case.6.s1': 'Designed and coded from scratch using vanilla HTML/CSS/JS for maximum performance and tiny size',
      'case.6.s2': 'Created a Sapa-inspired parallax effect (scrolling fog & layers) to establish a unique theme',
      'case.6.s3': 'Built a custom bilingual (VI/EN) and theme toggle (Dark/Light) logic purely with JavaScript',
      'case.6.s4': 'Designed a unique "Mountain Trail" visual timeline simulating the career journey step-by-step',
      'case.6.r1.val': '0',
      'case.6.r1.lbl': 'Frameworks used',
      'case.6.r2.val': 'Bilingual',
      'case.6.r2.lbl': 'Support VI / EN',
      'case.6.r3.val': '95+',
      'case.6.r3.lbl': 'Lighthouse Performance',
      'case.6.r4.val': '8 sections',
      'case.6.r4.lbl': 'Total page sections',
      'case.6.quote': 'This portfolio is the best proof of capability: self-taught, self-concepted, self-designed, and self-coded.',

      'process.label': 'Process',
      'process.title': 'How I work',
      'process.subtitle': 'Whether building tools, designing banners, or managing 100+ people — the process is always the same.',
      'process.1.title': 'Listen & Understand',
      'process.1.desc': "Don't rush to code or design. Sit with the team, hear real pain points, understand where the current workflow breaks.",
      'process.2.title': 'Rapid prototype',
      'process.2.desc': 'Build a working version in 1-2 days. Let the team test immediately, get feedback early. Doesn\'t need to be perfect — needs to work.',
      'process.3.title': 'Iterate & Polish',
      'process.3.desc': 'Continuously improve based on real usage. Add features when the team needs them, remove what nobody uses.',
      'process.4.title': 'Maintain & Never abandon',
      'process.4.desc': 'Products run 3+ years because I don\'t abandon them. Bug fixes, updates, team support — responsibility to the end.',
      'personal.label': 'Personal',
      'personal.title': 'Behind the code',
      'personal.p1': 'I grew up in Sapa. Being exposed to tourism and a dynamic service environment from an early age helped me develop natural communication skills and quick responsiveness to people\'s needs.',
      'personal.p2': 'Before writing code, I gained hands-on experience in various roles: from mixing cocktails for foreign tourists, coordinating events and leading groups of 100+ people, to supporting e-commerce operations. Every job taught me to observe workflows and solve practical problems.',
      'personal.p3': 'As I pivoted to programming and automation, my focus has always been utility. I don\'t build things just for show, but create tools that actually automate repetitive work for teams and run stably for years.',
      'personal.img1': 'Sapa — where it began',
      'personal.img2': 'Daily workstation',
      'personal.img3': 'Self',
      'personal.v1': 'Patient like climbing mountains',
      'personal.v2': 'See a problem → Build the solution',
      'personal.v3': 'Quiet but always caring',
      'personal.v4': 'Never leave things unfinished',
      'contact.label': 'Contact',
      'contact.title': "Let's climb together?",
      'contact.subtitle': 'Open to new opportunities. Reach out via email or social media.',
      'contact.email.label': 'Email',
      'contact.phone.label': 'Phone',
      'contact.location.label': 'Location',
      'contact.location.value': 'Sapa / Ho Chi Minh City (Remote-ready)',
      'contact.avail.label': 'Available',
      'contact.avail.value': 'Full-time, from June 2, 2026',
      'contact.form.name': 'Full Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send Email',
      'footer.text': '© 2026 Ma Đức Anh',
      'trail.here': '● you are here',
      'footer.ai': 'Designed & built with AI',
      'testimonial.label': 'What colleagues say',
      'testimonial.title': 'Real people, real words',
      'testimonial.1.text': '"He said he\'d try building a little app for the team. We thought it was just for fun — 3 years later the whole team still uses it daily. Report a bug, he fixes it right away, never complains."',
      'testimonial.1.name': 'Thành Đô',
      'testimonial.1.role': 'CS — Mixer',
      'testimonial.2.text': '"Anh is super quiet, but whenever the team hits a problem he just sits down and codes a fix. Morning bug report, afternoon it\'s done. The type who acts first, talks later."',
      'testimonial.2.name': 'Trung Kiên',
      'testimonial.2.role': 'CS — Mixer',
      'testimonial.3.text': '"When we ran a 100-person event, I couldn\'t handle the logistics. He took it over, checked every single name on the list. Only afterwards I realized how thorough he was."',
      'testimonial.3.name': 'Linh',
      'testimonial.3.role': 'Freelance',
      'testimonial.4.text': '"He taught himself to code from Google Sheets and ended up building a full app for the team. When I asked where he studied, he said self-taught. And the app works better than paid tools."',
      'testimonial.4.name': 'Hùng',
      'testimonial.4.role': 'CS — Mixishop',
      'testimonial.5.text': '"I asked him to design a banner, said AI is fine. He sent back versions better than I imagined. Fast too — asked in the morning, delivered by afternoon."',
      'testimonial.5.name': 'Trang',
      'testimonial.5.role': 'Marketing — Mixifood',
      'testimonial.6.text': '"The nice thing is you give him a task and don\'t have to follow up. He finishes it and reports back, no reminders needed. Years now and he\'s never left anything unfinished."',
      'testimonial.6.name': 'Đô',
      'testimonial.6.role': 'Team Lead — Mixer',
      'toast.copied': 'Copied to clipboard!',
      
      // SOP Case 3
      'case.3.sop.title': 'A NEW ERA OF SIZING CHARTS',
      'case.3.sop.subtitle': 'The Size Chart S.O.P: Translating Data into Visual Confidence',
      'case.3.sop.heading1': '1. Design Philosophy (The Philosophy)',
      'case.3.sop.philosophy': 'A size chart is not just an Excel sheet. It is the last mile that decides if a customer clicks "Add to Cart". A quality size chart must resolve three elements: Accuracy, Visual Clarity, and Authenticity.',
      'case.3.sop.heading2': '2. Anatomy of a Perfect Size Chart',
      'case.3.sop.anatomy.1.title': 'Technical Specs',
      'case.3.sop.anatomy.1.desc': 'Detailed measurement table (Length, Width, Shoulder, Sleeve) with allowance margin (typically ± 1-2cm). Shapes the sizing range specifically for the target customer, e.g., focusing on popular sizes M, L, XL, XXL and proactively removing size S if the fit (like Oversized/Boxy) does not suit smaller ratios.',
      'case.3.sop.anatomy.2.title': 'Fit Blueprint (CAD Illustration)',
      'case.3.sop.anatomy.2.desc': 'Vector drawing showing exactly where to measure on the garment (chest line, shoulder line) for customer self-referencing. Never use the same drawing for different silhouettes.',
      'case.3.sop.anatomy.3.title': 'Sizing Guide / Reference',
      'case.3.sop.anatomy.3.desc': 'Recommended Height - Weight reference table helping customers make quick decisions without complex measuring.',
      'case.3.sop.anatomy.4.title': 'Material & Detail Highlights',
      'case.3.sop.anatomy.4.desc': 'All signature details that define the product\'s value (neck label, buttons, embroidery, fabric texture) must be cropped 100% original from actual photos. Never use mockups, allowing customers to "touch" the fabric through the screen.',
      'case.3.sop.heading3': '3. THE EXECUTION FRAMEWORK',
      'case.3.sop.framework.1.title': 'STEP 1: INPUT - DATA GATHERING',
      'case.3.sop.framework.1.p1': 'Fit & Category: What is the product? (T-shirt, Polo, Jacket, Shirt). What is the silhouette? (Regular, Oversized, Boxy, Slim-fit).',
      'case.3.sop.framework.1.p2': 'Material Characteristics: How is the fabric stretch? (e.g., Knit Cotton stretch vs. Woven Kate/Denim non-stretch).',
      'case.3.sop.framework.1.p3': 'Processing Techniques: Any details affecting shrinkage after washing? (e.g., Acid wash, garment dyeing).',
      'case.3.sop.framework.2.title': 'STEP 2: LOGIC - SPEC PROCESSING',
      'case.3.sop.framework.2.p1': 'Ease Allowance: If the fabric is non-stretch (like Kate/Khaki), the width spec (Chest/Hip) must include a safe ease margin (about 3-5cm above body measurements).',
      'case.3.sop.framework.2.p2': 'Silhouette Ratios: Cross-check measurements. For example, for a Boxy fit, the ratio (Length / Chest Width) should approach 1:1. For Oversized, Length and Sleeve Length must increase proportionally.',
      'case.3.sop.framework.3.title': 'STEP 3: OUTPUT - VISUALIZATION & DISPLAY',
      'case.3.sop.framework.3.p1': 'Layout: Arrange according to natural eye movement from left to right, top to bottom (Model/CAD blueprint -> Specs table -> Sizing guide -> Macro details).',
      'case.3.sop.framework.3.p2': 'Colors & Typography: Use sans-serif fonts like Inter or Helvetica in bold for figures to optimize readability on mobile. Sizing chart backgrounds should be neutral (light grey, beige, white) to emphasize the product.',
      
      // SOP Case 4
      'case.4.sop.title': 'The Promotional Poster S.O.P: Translating Generative AI into Sales Conversion',
      'case.4.sop.subtitle': 'A New Era of Promotional Graphics – From AI Foundations to Ultra-Sharp Visual Touchpoints',
      'case.4.sop.heading1': '1. Design Philosophy (The Philosophy)',
      'case.4.sop.philosophy': 'A promotional poster is not just a digital flyer of cobbled images. It is the opening shot of an explosive campaign, determining whether customers scroll past or stop to convert. A quality commercial graphic must resolve three elements: Visual Hook, Information Clarity, and Product Authenticity.',
      'case.4.sop.heading2': '2. Anatomy of a Perfect Promotional Poster (Anatomy of a Perfect Promotional Poster)',
      'case.4.sop.anatomy.1.title': 'Visual Focus (The Focal Anchor)',
      'case.4.sop.anatomy.1.desc': 'Core notification badge (e.g., 3D "SALE 20%"). Positioned at the center of the 1:1 layout to anchor attention instantly from the first second a customer sees it. The surrounding space is supported by background motifs (confetti, swim rings) to set the festive vibe without competing for attention.',
      'case.4.sop.anatomy.2.title': 'Product Placement (Product Placement)',
      'case.4.sop.anatomy.2.desc': 'Where "Hero Items" (Shorts, T-shirt) are showcased. In this section, the ultimate rule is: All unique details that define the product\'s value must be cropped 100% original from actual studio photos. Never let AI redraw or use mockups to preserve exact fit, tags, and material textures.',
      'case.4.sop.anatomy.3.title': 'Incentive & Giveaway Zone (Incentive/Giveaway Zone)',
      'case.4.sop.anatomy.3.desc': 'Framed sub-banner displaying giveaway rules. Clearly segment reward hierarchy: "Grand Prize" (Blind box) and "Other Prizes" (Sweater) using huge 3D numbers to trigger FOMO.',
      'case.4.sop.anatomy.4.title': 'Action Anchor (Call-to-Action & Navigation)',
      'case.4.sop.anatomy.4.desc': 'The footer of the poster contains the final closing information. Provide purchase links (website), Fanpage links, and especially the exact time/place of the event (e.g., Live YouTube Lê Khôi at 17:00 on March 26, 2026) with platform icons for immediate redirection.',
      'case.4.sop.heading3': '3. THE EXECUTION FRAMEWORK (The Execution Framework)',
      'case.4.sop.framework.1.title': '[STEP 1: INPUT - DATA GATHERING]',
      'case.4.sop.framework.1.p1': 'Campaign Goal: What is the event? (Summer Fest). What is the offer? (20% off site-wide).',
      'case.4.sop.framework.1.p2': 'Asset Check: How many real product images need to be included? (T-shirt, shorts, blind box, long-sleeved sweater). Are high-quality transparent studio cuts ready?',
      'case.4.sop.framework.1.p3': 'Ad Copy & Channels: Accurate copy text, broadcast channels, and target deadlines (e.g., "Every order has a chance!").',
      'case.4.sop.framework.2.title': '[STEP 2: LOGIC - SPACE & LAYOUT]',
      'case.4.sop.framework.2.p1': 'Symmetrical Balance: Strongly applied to square 1:1 designs on Social Media. If there\'s a Shorts item (150,000 VND) on the left, there must be a T-shirt (200,000 VND) on the right to balance it out. The viewer\'s eyes will automatically scan from the top logo down to the central sale badge.',
      'case.4.sop.framework.2.p2': 'Data Accuracy: Review and refine potentially confusing details. Narrow down a broad time range to a single specific hour (e.g., Live at 17:00) to build consumer anticipation.',
      'case.4.sop.framework.3.title': '[STEP 3: OUTPUT - VISUALIZATION & DISPLAY]',
      'case.4.sop.framework.3.p1': 'Upscaling & Retouching: The main drawback of AI is the low-resolution output (usually 640x640) and blurry text. It is mandatory to upscale to Ultra-sharp 4K (2048x2048) and re-type all Vietnamese text to ensure no lines or numbers are blurred when zoomed.',
      'case.4.sop.framework.3.p2': 'Compositing: Blend real cropped product files over the AI template. Add depth shadows and platform buttons next to the text for a premium visual flow.',
      
      // SOP Case 5
      'case.5.sop.title': 'The Order Processing S.O.P: Translating Raw E-commerce Data into 1-Click Automated Operations',
      'case.5.sop.subtitle': 'A New Era of Order Management — From Raw Spreadsheets to 1-Click Operation Workflows',
      'case.5.sop.heading1': '1. Design Philosophy (The Philosophy)',
      'case.5.sop.philosophy': 'A great order processing system does not lie in complex code or flashy designs. It lies in its ability to liberate human labor from repetitive manual operations. A quality automation script must resolve three elements: Absolute Accuracy, Processing Speed, and an Intelligent Interface.',
      'case.5.sop.heading2': '2. Anatomy of a Perfect Order Processing Script (Anatomy of a Perfect Order Processing Script)',
      'case.5.sop.anatomy.1.title': 'Unified Data Input (Unified Data Input)',
      'case.5.sop.anatomy.1.desc': 'Automatically clean and filter raw order exports. From 75+ complex data columns, extract exactly 20 crucial columns (customer info, phone, address, product type) to optimize screen real estate and reduce memory load on Google Sheets.',
      'case.5.sop.anatomy.2.title': 'Intelligent Merging Algorithm (Intelligent Merging Algorithm)',
      'case.5.sop.anatomy.2.desc': 'Automatically scan and cross-reference orders sharing the same recipient phone number. Merge fragmented orders for the same customer to minimize shipping costs, prevent missed items, and preserve product details.',
      'case.5.sop.anatomy.3.title': 'Custom Sidebar UI (Custom Sidebar UI)',
      'case.5.sop.anatomy.3.desc': 'Integrate an HTML/CSS dashboard directly into the Google Sheets sidebar. Allow CS agents to easily trigger, pause, or preview merged results before the final data export, giving humans maximum control.',
      'case.5.sop.anatomy.4.title': 'Visual Marker & Status Tracking (Visual Marker & Status Tracking)',
      'case.5.sop.anatomy.4.desc': 'Color-coded tracking automatically flags order rows based on processing status (e.g., green for successfully merged orders, yellow for manual review) to eliminate double-shipping errors.',
      'case.5.sop.heading3': '3. THE EXECUTION FRAMEWORK (The Execution Framework)',
      'case.5.sop.framework.1.title': '[STEP 1: INPUT - REQUIREMENT GATHERING]',
      'case.5.sop.framework.1.p1': 'Workflow Audit: What manual steps are CS agents performing? (Column filtering, manual phone matching, shipping calculation). How many minutes are spent per batch?',
      'case.5.sop.framework.1.p2': 'Raw File Analysis: Identify mandatory data fields (Phone, Name, Address, Product) and discard unused columns.',
      'case.5.sop.framework.1.p3': 'Edge Case Analysis: Define error-handling guidelines for varied address abbreviations or leading zeros missing in phone numbers.',
      'case.5.sop.framework.2.title': '[STEP 2: LOGIC - ALGORITHM DEVELOPMENT]',
      'case.5.sop.framework.2.p1': 'Deduplication Logic: Establish merge criteria based on recipient phone numbers. If phone numbers match, merge order details (Silhouette, size, quantity) and sum the total price.',
      'case.5.sop.framework.2.p2': 'Status Management: Design a logging mechanism and auto-coloring system so agents can visually identify processed rows and avoid duplicate operations.',
      'case.5.sop.framework.3.title': '[STEP 3: OUTPUT - PERFORMANCE & DEPLOYMENT]',
      'case.5.sop.framework.3.p1': 'Performance Benchmarking: Test script execution speed with large data sets (3300+ orders). Optimize Sheets API calls (use 2D arrays in memory instead of reading/writing row-by-row to avoid execution timeout).',
      'case.5.sop.framework.3.p2': 'Sidebar UI Integration: Build a user-friendly HTML/CSS dashboard with 1-click execution buttons, enabling CS staff to run the script without technical knowledge.',
      
      // SOP Case 6
      'case.6.sop.title': 'The AI-Assisted Portfolio S.O.P: Translating Creative Vision into High-Performance Vanilla Web Engineering',
      'case.6.sop.subtitle': 'A New Era of Personal Portfolios – Delivering Unique Interactive Visual Narratives at Scale',
      'case.6.sop.heading1': '1. Design Philosophy (The Philosophy)',
      'case.6.sop.philosophy': 'A portfolio is not just an online static CV. It is a fully-fledged software product representing the author\'s design thinking, technical capabilities, and personal brand story. A premium portfolio must resolve three elements: Unique Interactive Experience, Ultra-Performance, and Seamless Accessibility.',
      'case.6.sop.heading2': '2. Anatomy of a Perfect Portfolio (Anatomy of a Perfect Portfolio)',
      'case.6.sop.anatomy.1.title': 'Personalized Visual Narrative (Personalized Visual Narrative)',
      'case.6.sop.anatomy.1.desc': '3D Parallax effect inspired by Sapa\'s misty mountains. Separating background, fog layers, mountains, and foreground, moving at different speeds upon scroll to establish real spatial depth.',
      'case.6.sop.anatomy.2.title': 'Interactive Career Timeline (Interactive Career Timeline)',
      'case.6.sop.anatomy.2.desc': 'Interactive career timeline using dynamic SVG Dasharray. As the user scrolls, the path representing the career journey dynamically draws itself, creating a visual anchor that encourages readers to scroll further.',
      'case.6.sop.anatomy.3.title': 'Zero-Latency Localization & Theme (Zero-Latency Localization & Theme)',
      'case.6.sop.anatomy.3.desc': 'Custom i18n localization engine written in vanilla JS. Instantly toggles VI/EN without page reloads. Includes a theme manager (Dark/Light) synced with LocalStorage for optimized user customization.',
      'case.6.sop.anatomy.4.title': 'Intelligent Cropless Modal Gallery (Intelligent Cropless Modal Gallery)',
      'case.6.sop.anatomy.4.desc': 'Detailed case study modals equipped with an automated image probing engine (fetch HEAD requests) to detect files 1.png to xxx.png and display them in a cropless, aspect-ratio-friendly thumbnail slider.',
      'case.6.sop.heading3': '3. THE EXECUTION FRAMEWORK (The Execution Framework)',
      'case.6.sop.framework.1.title': '[STEP 1: INPUT - CREATIVE & ASSET ASSEMBLE]',
      'case.6.sop.framework.1.p1': 'Ideate the Sapa mountain theme -> Sketch Parallax layers -> Export SVG path for the mountain trail -> Standardize project images to a clean 1.png -> xxx.png sequence.',
      'case.6.sop.framework.1.p2': 'Copywriting & Translations: Draft comprehensive, bilingual case study content for all 6 projects.',
      'case.6.sop.framework.1.p3': 'Visual Assets Preparation: Gather real UI screenshots and high-contrast system flowcharts to feed the image slider.',
      'case.6.sop.framework.2.title': '[STEP 2: LOGIC - CORE CODE & OPTIMIZATION]',
      'case.6.sop.framework.2.p1': 'Program in pure vanilla HTML/CSS/JS without bulky frameworks (React/Next.js) to maximize Lighthouse scores (100% Performance) -> Utilize requestAnimationFrame to run 60fps smooth Parallax scrolling.',
      'case.6.sop.framework.2.p2': 'Event Orchestration: Build event listeners for modal lifecycle, focus trapping, body scroll locks, and localized text replacement.',
      'case.6.sop.framework.3.title': '[STEP 3: OUTPUT - POLISH & AI DEPLOYMENT]',
      'case.6.sop.framework.3.p1': 'Leverage advanced AI models (Gemini/Claude) to refine script efficiency, write the client-side dynamic image scanner, and test responsiveness on all device profiles -> Retouch visual effects like drop-shadows and glassmorphism.',
      'case.6.sop.framework.3.p2': 'SEO & Accessibility Audit: Inject descriptive meta tags, utilize semantic HTML5 elements, review color contrast ratios, and implement keyboard-only navigation support (e.g., ESC key).',
    },
  };

  /* ----------------------------------------------------------
     1. THEME
     ---------------------------------------------------------- */
  function initTheme() {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);
    toggle.addEventListener('click', () => {
      const next = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.querySelector('.theme-toggle');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  /* ----------------------------------------------------------
     2. LANGUAGE
     ---------------------------------------------------------- */
  function initLang() {
    const toggle = document.querySelector('.lang-toggle');
    if (!toggle) return;
    const saved = localStorage.getItem('lang') || 'vi';
    applyLang(saved);
    toggle.addEventListener('click', () => {
      const next = (document.documentElement.getAttribute('data-lang') || 'vi') === 'vi' ? 'en' : 'vi';
      applyLang(next);
      localStorage.setItem('lang', next);
    });
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) toggle.textContent = lang === 'vi' ? 'EN' : 'VI';
    const dict = translations[lang];
    if (!dict) return;

    // Dynamic Title & Meta Description update
    if (dict['page.title']) document.title = dict['page.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['page.description']) {
      metaDesc.setAttribute('content', dict['page.description']);
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update CV download link based on language
    const cvDownloadBtn = document.querySelector('[data-i18n="hero.cta.cv"]');
    if (cvDownloadBtn) {
      if (lang === 'vi') {
        cvDownloadBtn.setAttribute('href', 'assets/CV-Ma-Duc-Anh-VI.pdf');
        cvDownloadBtn.setAttribute('download', 'CV-Ma-Duc-Anh-VI.pdf');
      } else {
        cvDownloadBtn.setAttribute('href', 'assets/CV-Ma-Duc-Anh-EN.pdf');
        cvDownloadBtn.setAttribute('download', 'CV-Ma-Duc-Anh-EN.pdf');
      }
    }

    // Update active modal content if open
    const modal = document.getElementById('project-modal');
    if (modal && modal.classList.contains('active') && activeProjectId) {
      const modalContent = modal.querySelector('.modal-content');
      if (modalContent) {
        const mainImg = modalContent.querySelector('.modal-main-img');
        const activeThumb = modalContent.querySelector('.modal-thumb.active');
        const activeSrc = activeThumb ? activeThumb.getAttribute('data-src') : (mainImg ? mainImg.src : null);
        
        modalContent.innerHTML = renderModalContent(activeProjectId, lang);
        
        if (activeSrc) {
          const newMainImg = modalContent.querySelector('.modal-main-img');
          if (newMainImg) {
            newMainImg.src = activeSrc;
            newMainImg.setAttribute('data-full', activeSrc);
          }
          modalContent.querySelectorAll('.modal-thumb').forEach(thumb => {
            const thumbSrc = thumb.getAttribute('data-src');
            // Resolve relative paths if browser fully qualifies them
            const isMatch = thumbSrc === activeSrc || (activeSrc && activeSrc.endsWith(thumbSrc));
            if (isMatch) {
              thumb.classList.add('active');
            } else {
              thumb.classList.remove('active');
            }
          });
        }
      }
    }
  }

  /* ----------------------------------------------------------
     3. FOG PARTICLES (Canvas) — Sapa mist
     ---------------------------------------------------------- */
  function initFog() {
    const canvas = document.getElementById('fog-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height * 0.3 + Math.random() * canvas.height * 0.5,
        radius: 60 + Math.random() * 100,
        vx: (Math.random() - 0.3) * 0.3,
        vy: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.08,
        maxOpacity: 0.03 + Math.random() * 0.06,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function init() {
      resize();
      particles = [];
      const count = Math.min(Math.floor(canvas.width / 100), 12);
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    function draw() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = p.maxOpacity * (0.5 + 0.5 * Math.sin(time * 0.5 + p.phase));

        // Wrap around
        if (p.x > canvas.width + p.radius) p.x = -p.radius;
        if (p.x < -p.radius) p.x = canvas.width + p.radius;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(139, 154, 175, ${p.opacity})`);
        gradient.addColorStop(1, 'rgba(139, 154, 175, 0)');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    }

    init();

    // IntersectionObserver to pause loop when out of view
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animFrame);
          draw();
        } else {
          cancelAnimationFrame(animFrame);
        }
      });
    }, { threshold: 0.01 });
    observer.observe(canvas);

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animFrame);
      init();
      if (isVisible) {
        draw();
      }
    });
  }

  /* ----------------------------------------------------------
     4. MOUNTAIN PARALLAX
     ---------------------------------------------------------- */
  function initParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = document.querySelectorAll('[data-parallax]');
    if (!layers.length) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          layers.forEach((layer) => {
            const speed = parseFloat(layer.getAttribute('data-parallax'));
            layer.style.transform = `translateY(${-scrollY * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ----------------------------------------------------------
     5. SCROLL REVEAL
     ---------------------------------------------------------- */
  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  /* ----------------------------------------------------------
     6. SMOOTH SCROLL + ACTIVE NAV
     ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
        closeMobileMenu();
      });
    });
  }

  function initActiveNav() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '-80px 0px -50% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ----------------------------------------------------------
     7. COUNTERS
     ---------------------------------------------------------- */
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2500; // slower = more deliberate
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4); // quartic ease-out
      el.textContent = Math.floor(ease * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  /* ----------------------------------------------------------
     8. MOBILE MENU
     ---------------------------------------------------------- */
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      menu.classList.contains('active') ? closeMobileMenu() : openMobileMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });
  }

  function openMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;
    btn.classList.add('active');
    menu.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;
    btn.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  /* ----------------------------------------------------------
     9. NAVBAR SCROLL
     ---------------------------------------------------------- */
  function initNavScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          navbar.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ----------------------------------------------------------
     10. BACK TO TOP
     ---------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          btn.classList.toggle('visible', window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------
     11. LIGHTBOX
     ---------------------------------------------------------- */
  function initLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    if (!lightbox || !lightboxImg) return;

    // Use event delegation to catch clicks on dynamically created images inside the modal
    document.body.addEventListener('click', (e) => {
      const img = e.target.closest('.modal-content [data-full]');
      if (img) {
        lightboxImg.src = img.getAttribute('data-full') || img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('active');
        document.body.classList.add('no-scroll');
      }
    });

    function close() {
      lightbox.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }

    if (lightboxClose) lightboxClose.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) close();
    });
  }

  /* ----------------------------------------------------------
     12. CONTACT FORM
     ---------------------------------------------------------- */
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');
      if (!name || !email || !message) return;

      const n = name.value.trim(), em = email.value.trim(), m = message.value.trim();
      if (!n) { name.focus(); return; }
      if (!em) { email.focus(); return; }
      if (!m) { message.focus(); return; }

      const subject = encodeURIComponent(`Portfolio Contact: ${n}`);
      const body = encodeURIComponent(`${m}\n\n---\nFrom: ${n}\nEmail: ${em}`);
      window.location.href = `mailto:maducanh.work@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* ----------------------------------------------------------
     13. MOUSE PARALLAX — Hero mountains follow cursor
     ---------------------------------------------------------- */
  function initMouseParallax() {
    const hero = document.getElementById('hero');
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = hero.querySelectorAll('[data-parallax]');
    if (!layers.length) return;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    let rafId = null;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;

      if (!rafId) {
        rafId = requestAnimationFrame(function animate() {
          // Smooth lerp for buttery motion
          currentX += (targetX - currentX) * 0.08;
          currentY += (targetY - currentY) * 0.08;

          layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-parallax')) * 30;
            layer.style.transform = `translate(${-currentX * speed}px, ${-currentY * speed}px)`;
          });

          if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
            rafId = requestAnimationFrame(animate);
          } else {
            rafId = null;
          }
        });
      }
    });

    // Reset on mouse leave
    hero.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) {
        rafId = requestAnimationFrame(function reset() {
          currentX += (0 - currentX) * 0.05;
          currentY += (0 - currentY) * 0.05;
          layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-parallax')) * 30;
            layer.style.transform = `translate(${-currentX * speed}px, ${-currentY * speed}px)`;
          });
          if (Math.abs(currentX) > 0.001 || Math.abs(currentY) > 0.001) {
            rafId = requestAnimationFrame(reset);
          } else {
            layers.forEach(layer => { layer.style.transform = ''; });
            rafId = null;
          }
        });
      }
    });
  }

  /* ----------------------------------------------------------
     14. TYPEWRITER — Hero greeting reveal
     ---------------------------------------------------------- */
  function initTypewriter() {
    const el = document.querySelector('.hero-greeting');
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const text = el.textContent;
    el.textContent = '';
    el.style.opacity = '1';
    el.style.borderRight = '2px solid var(--text-muted)';

    let i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 80);
      } else {
        // Blink cursor then remove
        setTimeout(() => { el.style.borderRight = 'none'; }, 2000);
      }
    }
    setTimeout(type, 600);
  }

  /* ----------------------------------------------------------
     15. INTERACTIVE MODALS & PREMIUM POLISH
     ---------------------------------------------------------- */
  let activeProjectId = null;

  function renderModalContent(projectId, lang, customImages) {
    const dict = translations[lang];
    if (!dict) return '';

    const name = dict[`case.${projectId}.name`] || '';
    const meta = dict[`case.${projectId}.meta`] || '';
    const images = customImages || dict[`case.${projectId}.images`] || [];
    
    // Problems & Solutions list
    let problemsHTML = '';
    for (let i = 1; i <= 4; i++) {
      const text = dict[`case.${projectId}.p${i}`];
      if (text) problemsHTML += `<li>${text}</li>`;
    }
    
    let solutionsHTML = '';
    for (let i = 1; i <= 4; i++) {
      const text = dict[`case.${projectId}.s${i}`];
      if (text) solutionsHTML += `<li>${text}</li>`;
    }

    // Metrics
    let metricsHTML = '';
    for (let i = 1; i <= 4; i++) {
      const val = dict[`case.${projectId}.r${i}.val`];
      const lbl = dict[`case.${projectId}.r${i}.lbl`];
      if (val && lbl) {
        const colorClass = (i % 2 === 0) ? 'gold' : 'accent';
        metricsHTML += `
          <div class="case-metric">
            <div class="case-metric-value ${colorClass}">${val}</div>
            <div class="case-metric-label">${lbl}</div>
          </div>
        `;
      }
    }

    const quote = dict[`case.${projectId}.quote`] || '';
    const problemTitle = dict['case.problem'] || 'Vấn đề';
    const solutionTitle = dict['case.solution'] || 'Giải pháp';
    const resultsTitle = dict['case.results'] || 'Kết quả';

    // Emoji mapping based on project ID
    const emojis = { 1: '📊', 2: '🍜', 3: '🎨', 4: '📣', 5: '🛒', 6: '🏔' };
    const emoji = emojis[projectId] || '📊';

    const hasImageClass = images.length > 0 ? 'has-image' : '';
    const galleryHTML = renderGalleryHTML(projectId, name, images);

    // Build custom SOP section if translations exist (Case 3)
    let sopSectionHTML = '';
    if (dict[`case.${projectId}.sop.title`]) {
      const sopTitle = dict[`case.${projectId}.sop.title`];
      const sopSubtitle = dict[`case.${projectId}.sop.subtitle`];
      const heading1 = dict[`case.${projectId}.sop.heading1`];
      const philosophy = dict[`case.${projectId}.sop.philosophy`];
      
      const heading2 = dict[`case.${projectId}.sop.heading2`];
      const anat1T = dict[`case.${projectId}.sop.anatomy.1.title`];
      const anat1D = dict[`case.${projectId}.sop.anatomy.1.desc`];
      const anat2T = dict[`case.${projectId}.sop.anatomy.2.title`];
      const anat2D = dict[`case.${projectId}.sop.anatomy.2.desc`];
      const anat3T = dict[`case.${projectId}.sop.anatomy.3.title`];
      const anat3D = dict[`case.${projectId}.sop.anatomy.3.desc`];
      const anat4T = dict[`case.${projectId}.sop.anatomy.4.title`];
      const anat4D = dict[`case.${projectId}.sop.anatomy.4.desc`];
      
      const heading3 = dict[`case.${projectId}.sop.heading3`];
      const fw1T = dict[`case.${projectId}.sop.framework.1.title`];
      const fw1P1 = dict[`case.${projectId}.sop.framework.1.p1`];
      const fw1P2 = dict[`case.${projectId}.sop.framework.1.p2`];
      const fw1P3 = dict[`case.${projectId}.sop.framework.1.p3`];
      
      const fw2T = dict[`case.${projectId}.sop.framework.2.title`];
      const fw2P1 = dict[`case.${projectId}.sop.framework.2.p1`];
      const fw2P2 = dict[`case.${projectId}.sop.framework.2.p2`];
      
      const fw3T = dict[`case.${projectId}.sop.framework.3.title`];
      const fw3P1 = dict[`case.${projectId}.sop.framework.3.p1`];
      const fw3P2 = dict[`case.${projectId}.sop.framework.3.p2`];

      sopSectionHTML = `
        <div class="case-sop-divider"></div>
        <div class="case-sop-container">
          <h4 class="sop-main-title">${sopTitle}</h4>
          <p class="sop-main-subtitle">${sopSubtitle}</p>
          
          <!-- Section 1: Philosophy -->
          <div class="sop-section">
            <h5 class="sop-section-heading">${heading1}</h5>
            <div class="sop-philosophy-card">
              <span class="quote-mark">“</span>
              <p>${philosophy}</p>
            </div>
          </div>
          
          <!-- Section 2: Anatomy -->
          <div class="sop-section">
            <h5 class="sop-section-heading">${heading2}</h5>
            <div class="sop-anatomy-grid">
              <div class="sop-anatomy-card">
                <h6>${anat1T}</h6>
                <p>${anat1D}</p>
              </div>
              <div class="sop-anatomy-card">
                <h6>${anat2T}</h6>
                <p>${anat2D}</p>
              </div>
              <div class="sop-anatomy-card">
                <h6>${anat3T}</h6>
                <p>${anat3D}</p>
              </div>
              <div class="sop-anatomy-card">
                <h6>${anat4T}</h6>
                <p>${anat4D}</p>
              </div>
            </div>
          </div>
          
          <!-- Section 3: Framework -->
          <div class="sop-section">
            <h5 class="sop-section-heading">${heading3}</h5>
            <div class="sop-framework-stepper">
              <div class="sop-step">
                <div class="sop-step-number">01</div>
                <div class="sop-step-content">
                  <h6>${fw1T}</h6>
                  <ul>
                    ${fw1P1 ? `<li>${fw1P1}</li>` : ''}
                    ${fw1P2 ? `<li>${fw1P2}</li>` : ''}
                    ${fw1P3 ? `<li>${fw1P3}</li>` : ''}
                  </ul>
                </div>
              </div>
              <div class="sop-connector"></div>
              <div class="sop-step">
                <div class="sop-step-number">02</div>
                <div class="sop-step-content">
                  <h6>${fw2T}</h6>
                  <ul>
                    ${fw2P1 ? `<li>${fw2P1}</li>` : ''}
                    ${fw2P2 ? `<li>${fw2P2}</li>` : ''}
                  </ul>
                </div>
              </div>
              <div class="sop-connector"></div>
              <div class="sop-step">
                <div class="sop-step-number">03</div>
                <div class="sop-step-content">
                  <h6>${fw3T}</h6>
                  <ul>
                    ${fw3P1 ? `<li>${fw3P1}</li>` : ''}
                    ${fw3P2 ? `<li>${fw3P2}</li>` : ''}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    const demoLink = dict[`case.${projectId}.link`];
    const demoCreds = dict[`case.${projectId}.creds`];
    const demoBtnText = dict[`case.${projectId}.btnText`] || dict['case.demo.visit'] || 'Visit Demo';

    return `
      <div class="case-header" style="justify-content: space-between; flex-wrap: wrap; align-items: center;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="case-icon">${emoji}</div>
          <div>
            <h3 class="case-name">${name}</h3>
            <div class="case-meta">${meta}</div>
          </div>
        </div>
        ${demoLink ? `
          <div class="case-header-action" style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem; margin-left: auto; padding-top: 0.5rem;">
            <a href="${demoLink}" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8rem; height: auto;">
              ${demoBtnText}
            </a>
            ${demoCreds ? `<span class="demo-credentials" style="font-size: 0.75rem; color: var(--text-muted); text-align: right;">${demoCreds}</span>` : ''}
          </div>
        ` : ''}
      </div>

      <div class="modal-case-body ${hasImageClass}">
        <div class="modal-case-gallery-container">
          ${galleryHTML}
        </div>
        
        <div>
          <div class="case-grid">
            <div class="case-block case-problem">
              <div class="case-block-label">${problemTitle}</div>
              <ul class="case-list">
                ${problemsHTML}
              </ul>
            </div>

            <div class="case-block case-solution">
              <div class="case-block-label">${solutionTitle}</div>
              <ul class="case-list">
                ${solutionsHTML}
              </ul>
            </div>
          </div>

          <div class="case-results">
            <div class="case-block-label">${resultsTitle}</div>
            <div class="case-metrics">
              ${metricsHTML}
            </div>
          </div>

          ${quote ? `<blockquote class="case-quote">${quote}</blockquote>` : ''}
        </div>
      </div>
      
      ${sopSectionHTML}
    `;
  }

  const PROJECT_FOLDERS = {
    1: 'mixer-app',
    2: 'restaurant-ops',
    3: 'mixer-sizing',
    4: 'mixishop-campaign',
    5: 'mixishop-system',
    6: 'portfolio-site'
  };

  function renderGalleryHTML(projectId, name, images) {
    if (!images || images.length === 0) return '';
    const cacheBust = window.location.protocol === 'file:' ? '' : '?v=1.1.2';
    if (images.length === 1) {
      return `
        <div class="modal-case-image-wrapper">
          <img src="${images[0]}${cacheBust}" alt="${name}" data-full="${images[0]}${cacheBust}" />
        </div>
      `;
    }
    return `
      <div class="modal-case-gallery">
        <div class="modal-case-image-wrapper">
          <img src="${images[0]}${cacheBust}" alt="${name}" data-full="${images[0]}${cacheBust}" class="modal-main-img" />
        </div>
        <div class="modal-case-thumbnails">
          ${images.map((img, idx) => `
            <img src="${img}${cacheBust}" 
                 alt="Thumbnail ${idx + 1}" 
                 class="modal-thumb ${idx === 0 ? 'active' : ''}" 
                 data-index="${idx}" 
                 data-src="${img}" />
          `).join('')}
        </div>
      </div>
    `;
  }

  function probeProjectImages(projectId, fallbackImages) {
    return new Promise((resolve) => {
      const folder = PROJECT_FOLDERS[projectId];
      if (!folder) {
        resolve(fallbackImages);
        return;
      }

      const images = [];
      const maxProbes = 20;
      let currentCheck = 1;

      function checkNext() {
        if (currentCheck > maxProbes) {
          resolve(images.length > 0 ? images : fallbackImages);
          return;
        }

        const url = `assets/projects/${folder}/${currentCheck}.png`;
        const img = new Image();
        img.onload = () => {
          images.push(url);
          currentCheck++;
          checkNext();
        };
        img.onerror = () => {
          // Stop probing on first missing image
          resolve(images.length > 0 ? images : fallbackImages);
        };
        img.src = url;
      }

      checkNext();
    });
  }

  function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const modalContent = modal ? modal.querySelector('.modal-content') : null;
    const modalClose = modal ? modal.querySelector('.modal-close') : null;
    if (!modal || !modalContent) return;

    // Attach click listener to project cards
    document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
      card.addEventListener('click', async (e) => {
        // Prevent trigger if clicking on specific controls
        if (e.target.closest('a') || e.target.closest('button')) return;
        
        const projectId = card.getAttribute('data-project-id');
        const lang = document.documentElement.getAttribute('data-lang') || 'vi';
        
        activeProjectId = projectId;
        
        const dict = translations[lang];
        const fallbackImages = dict ? (dict[`case.${projectId}.images`] || []) : [];
        
        modalContent.innerHTML = renderModalContent(projectId, lang, fallbackImages);
        
        modal.classList.add('active');
        document.body.classList.add('modal-open');
        modal.setAttribute('aria-hidden', 'false');

        // Dynamically probe for actual images if any (e.g. 1.png, 2.png, 3.png...)
        try {
          const probed = await probeProjectImages(projectId, fallbackImages);
          const container = modalContent.querySelector('.modal-case-gallery-container');
          const name = dict[`case.${projectId}.name`] || '';
          if (container) {
            if (probed && probed.length > 0) {
              container.innerHTML = renderGalleryHTML(projectId, name, probed);
              const modalBody = modalContent.querySelector('.modal-case-body');
              if (modalBody) {
                modalBody.classList.add('has-image');
              }
            } else {
              container.innerHTML = '';
              const modalBody = modalContent.querySelector('.modal-case-body');
              if (modalBody) {
                modalBody.classList.remove('has-image');
              }
            }
          }
        } catch (err) {
          console.error('Probing failed:', err);
        }
      });
    });

    // Handle thumbnail clicking inside modal
    modalContent.addEventListener('click', (e) => {
      const thumb = e.target.closest('.modal-thumb');
      if (!thumb) return;

      const gallery = thumb.closest('.modal-case-gallery');
      const mainImg = gallery ? gallery.querySelector('.modal-main-img') : null;
      if (!mainImg) return;

      const newSrc = thumb.getAttribute('data-src');
      const cacheBust = window.location.protocol === 'file:' ? '' : '?v=1.1.2';
      
      // Update main image src and data-full attributes
      mainImg.src = newSrc + cacheBust;
      mainImg.setAttribute('data-full', newSrc + cacheBust);

      // Toggle active classes
      gallery.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });

    function close() {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
      modal.setAttribute('aria-hidden', 'true');
      activeProjectId = null;
    }

    if (modalClose) modalClose.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) close();
    });
  }

  // 16. Click to Copy Contact Info
  function initContactCopy() {
    const emailLink = document.querySelector('.contact-item a[href^="mailto:"]');
    const phoneLink = document.querySelector('.contact-item a[href^="tel:"]');
    
    if (emailLink) {
      emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailLink.textContent.trim();
        copyText(email);
      });
    }
    
    if (phoneLink) {
      phoneLink.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = phoneLink.textContent.replace(/\s+/g, '').trim();
        copyText(phone);
      });
    }
  }

  function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
      const lang = document.documentElement.getAttribute('data-lang') || 'vi';
      const msg = translations[lang]['toast.copied'] || 'Copied!';
      showToast(msg);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2500);
  }

  // 17. Mountain Trail drawing on page scroll
  function initTrailScroll() {
    const path = document.querySelector('.trail-path-draw');
    const section = document.getElementById('experience');
    if (!path || !section) return;

    let length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    let ticking = false;
    
    function updateOffset() {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startDraw = windowHeight * 0.85;
      const endDraw = windowHeight * 0.15;
      
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      let progress = (startDraw - elementTop) / (elementHeight + startDraw - endDraw);
      progress = Math.max(0, Math.min(1, progress));
      
      const offset = length - (progress * length);
      path.style.strokeDashoffset = offset;

      const pointer = document.querySelector('.trail-pointer');
      if (pointer) {
        if (progress > 0 && progress < 1) {
          pointer.classList.add('active');
          try {
            const point = path.getPointAtLength(length - offset);
            pointer.setAttribute('cx', point.x);
            pointer.setAttribute('cy', point.y);
          } catch (e) {
            // handle error
          }
        } else {
          pointer.classList.remove('active');
        }
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateOffset);
        ticking = true;
      }
    });

    window.addEventListener('resize', () => {
      length = path.getTotalLength();
      path.style.strokeDasharray = length;
      updateOffset();
    });
    
    updateOffset();
  }

  // 18. Tactile Cards: Project Card 3D tilt hover
  function initTiltCards() {
    const cards = document.querySelectorAll('.project-card');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        const maxRotate = 4;
        const rotateX = ((yc - y) / yc) * maxRotate;
        const rotateY = ((x - xc) / xc) * maxRotate;
        
        card.style.transition = 'none';
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.01)`;
        card.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.35), 0 0 0 1px var(--accent)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform var(--dur-slow) var(--ease-gentle), border-color var(--dur-slow) var(--ease-gentle), box-shadow var(--dur-slow) var(--ease-gentle)';
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  // 19. Magnetic buttons hover physics
  function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    buttons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
        btn.style.transition = 'none';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
        btn.style.transition = 'transform var(--dur-base) var(--ease-gentle)';
      });
    });
  }

  /* ----------------------------------------------------------
     18. MIST DRIFT (Scroll & Auto)
     ---------------------------------------------------------- */
  function initMistDrift() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const clouds = document.querySelectorAll('.mist-drift-cloud');
    if (!clouds.length) return;

    let scrollY = window.scrollY;
    let time = 0;

    function update() {
      time += 0.5;

      clouds.forEach((cloud, index) => {
        const speedX = parseFloat(cloud.getAttribute('data-parallax-x') || 0);
        const speedY = parseFloat(cloud.getAttribute('data-parallax-y') || 0);
        const phase = index * 2;

        // Scroll offset
        const scrollOffsetX = scrollY * speedX;
        const scrollOffsetY = scrollY * speedY;

        // Slow automatic float (drift)
        const autoDriftX = Math.sin(time * 0.005 + phase) * 35;
        const autoDriftY = Math.cos(time * 0.004 + phase) * 20;

        cloud.style.transform = `translate3d(${scrollOffsetX + autoDriftX}px, ${scrollOffsetY + autoDriftY}px, 0)`;
      });

      requestAnimationFrame(update);
    }

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    }, { passive: true });

    update();
  }

  /* ----------------------------------------------------------
     19. SAPA LANDSCAPE PARALLAX (Bottom of page)
     ---------------------------------------------------------- */
  function initContactParallax() {
    const contactSection = document.getElementById('contact');
    const layers = document.querySelectorAll('.sapa-landscape-backdrop [data-contact-parallax]');
    if (!contactSection || !layers.length) return;

    let ticking = false;

    function update() {
      const rect = contactSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate translation only when the section is entering or in viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalDistance = viewportHeight + rect.height;
        const currentProgress = (viewportHeight - rect.top) / totalDistance;

        layers.forEach((layer) => {
          const speed = parseFloat(layer.getAttribute('data-contact-parallax') || 0);
          // Shift vertically by up to 75px based on relative scroll position
          const translateY = (currentProgress - 0.5) * speed * 150;
          layer.style.transform = `translate3d(0, ${translateY}px, 0)`;
        });
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  /* ----------------------------------------------------------
     20. INIT
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initNavScroll();
    initSmoothScroll();
    initActiveNav();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initBackToTop();
    initLightbox();
    initContactForm();
    initFog();
    initParallax();
    initMouseParallax();
    initTypewriter();
    initProjectModal();
    initContactCopy();
    initTrailScroll();
    initTiltCards();
    initMagneticButtons();
    initMistDrift();
    initContactParallax();
  });
})();
