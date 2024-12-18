// Dữ liệu mẫu cho các sản phẩm (có thể thay thế bằng API hoặc cơ sở dữ liệu)
const products = [
    // {
    //     id: 1,
    //     name: "Samsung Galaxy S23 FE 5G",
    //     description: "Samsung Galaxy S23 FE 5G là chiếc điện thoại thông minh với màn hình 6.7 inches, RAM 8GB, ROM 256GB, đem đến hiệu năng mạnh mẽ và thiết kế hiện đại.",
    //     screenSize: "6.7 inches",
    //     ram: "8 GB",
    //     storage: "256 GB",
    //     origin: "Hàn Quốc",
    //     price: "10,390,000Đ",
    //     image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-fe_6_.png",
    // },
    // // Có thể thêm nhiều sản phẩm khác tại đây
    // {
    //     id: 2,
    //     name: "Iphone",
    //     description: "Iphone là chiếc điện thoại thông minh với màn hình 6.7 inches, RAM 8GB, ROM 256GB, đem đến hiệu năng mạnh mẽ và thiết kế hiện đại.",
    //     screenSize: "6.7 inches",
    //     ram: "8 GB",
    //     storage: "256 GB",
    //     origin: "Hàn Quốc",
    //     price: "25,390,000đ",
    //     image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
    // },


    {
        id: 1,
        name: "Iphone 16 Pro Max Chính Hãng",
        description: "Iphone 16 Pro Max chính hãng với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hiệu năng mạnh mẽ.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "34,490,000₫",
        image: "Iphone_16_promax.png"
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        description: "iPhone 15 Pro Max với màn hình 6.7 inches, RAM 8GB, ROM 256GB, giảm giá mạnh.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,590,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
    },
    {
        id: 3,
        name: "Iphone 16 Chính Hãng",
        description: "Iphone 16 chính hãng với màn hình 6.7 inches, RAM 8GB, ROM 256GB, thiết kế sang trọng.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "22,290,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png"
    },
    {
        id: 4,
        name: "iPhone 13",
        description: "iPhone 13 với màn hình 6.7 inches, RAM 8GB, ROM 256GB, giảm giá lên tới 23%.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "13,390,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png"
    },
    {
        id: 5,
        name: "Iphone 14 Pro Max",
        description: "Iphone 14 Pro Max với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hiệu năng cao.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "25,590,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png"
    },
    {
        id: 6,
        name: "Samsung Galaxy S24 Ultra",
        description: "Samsung Galaxy S24 Ultra với màn hình 6.7 inches, RAM 8GB, ROM 256GB, thiết kế đột phá.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png"
    },
    {
        id: 7,
        name: "Samsung Galaxy Z Fold6",
        description: "Samsung Galaxy Z Fold6 với màn hình 6.7 inches, RAM 8GB, ROM 256GB, thiết kế gập độc đáo.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "41,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-6-xanh_5_.png"
    },
    {
        id: 8,
        name: "Samsung Galaxy S23 Ultra",
        description: "Samsung Galaxy S23 Ultra với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hiệu năng mạnh mẽ.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "23,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-xanh_2.png"
    },
    {
        id: 9,
        name: "Samsung Galaxy S23",
        description: "Samsung Galaxy S23 với màn hình 6.7 inches, RAM 8GB, ROM 256GB, giảm giá mạnh lên tới 40%.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "14,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-128gb_2_.png"
    },
    {
        id: 10,
        name: "OPPO Find X8",
        description: "OPPO Find X8 với màn hình 6.7 inches, RAM 8GB, ROM 256GB, giá hấp dẫn.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "22,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_5__7_70.png"
    },

    {
        id: 12,
        name: "OPPO Find N3",
        description: "OPPO Find N3 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "41,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/i/find_n3_-_combo_product_-_gold.png"
    },
    {
        id: 13,
        name: "OPPO Find X8",
        description: "OPPO Find X8 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "22,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_5__7_70.png"
    },
    {
        id: 14,
        name: "OPPO Reno12 5G",
        description: "OPPO Reno12 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "11,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/_/t_i_xu_ng_22__6.png"
    },
    {
        id: 15,
        name: "OPPO A79 5G",
        description: "OPPO A79 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "7,190,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a79-tim.png"
    },
    {
        id: 16,
        name: "OPPO A78 4G",
        description: "OPPO A78 4G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "6,490,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a78.png"
    },
    {
        id: 17,
        name: "Xiaomi Redmi 14C",
        description: "Xiaomi Redmi 14C với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hiệu năng ổn định.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "2,890,000₫",
        image: "xiaomi_redmi_14c.png"
    },
    {
        id: 18,
        name: "Xiaomi 14T",
        description: "Xiaomi 14T với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hiệu suất mạnh mẽ.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "12,750,000₫",
        image: "xiaomi_14t.png"
    },
    {
        id: 19,
        name: "Xiaomi POCO X6 Pro 5G",
        description: "Xiaomi POCO X6 Pro 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hỗ trợ 5G.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "8,490,000₫",
        image: "xiaomi_poco_x6_pro_5g.png"
    },
    {
        id: 20,
        name: "Xiaomi Redmi Note 13",
        description: "Xiaomi Redmi Note 13 với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hiệu năng ổn định.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "4,290,000₫",
        image: "xiaomi_redmi_note_13.png"
    },
    {
        id: 21,
        name: "Xiaomi 14 Ultra 5G",
        description: "Xiaomi 14 Ultra 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB, hiệu năng 5G vượt trội.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,990,000₫",
        image: "xiaomi_14_ultra.png"
    },
    {
        id: 22,
        name: "realme C67",
        description: "realme C67 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "4,290,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-c67-1_1.png"
    },
    {
        id: 23,
        name: "realme C51",
        description: "realme C51 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "3,250,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-c51_2_1.png"
    },
    {
        id: 24,
        name: "realme 11",
        description: "realme 11 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "4,590,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-11-vang-1.jpg"
    },
    {
        id: 25,
        name: "realme 11 Pro",
        description: "realme 11 Pro với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "7,790,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-11-pro.png"
    },
    {
        id: 26,
        name: "realme C51",
        description: "realme C51 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "2,390,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-c51_2.png"
    },

    {
        id: 27,
        name: "OnePlus Nord CE 3 Lite",
        description: "OnePlus Nord CE 3 Lite với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "5,690,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/e/d/edobfefy-doc-quy.jpg"
    },
    {
        id: 28,
        name: "OnePlus 11 5G 8GB",
        description: "OnePlus 11 5G 8GB với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "15,990,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/n/oneplus_11_-_black_-_rgb_1.jpg"
    },
    {
        id: 29,
        name: "OnePlus Nord 3 5G",
        description: "OnePlus Nord 3 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "11,950,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/n/oneplus-nord-3.png"
    },
    
    {
        id: 30,
        name: "Iphone 16 Pro Max",
        description: "Iphone 16 Pro Max chính hãng với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "34,490,000đ",
        image: "Iphone_16_promax.png"
    },
    {
        id: 31,
        name: "iPhone 15 Pro Max",
        description: "iPhone 15 Pro Max chính hãng với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,590,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
    },
    {
        id: 32,
        name: "Samsung Galaxy S23 FE 5G",
        description: "Samsung Galaxy S23 FE 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "10,390,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-fe_6_.png"
    },
    {
        id: 33,
        name: "Samsung Galaxy Z Flip6",
        description: "Samsung Galaxy Z Flip6 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "26,990,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_166_3.png"
    },
    {
        id: 34,
        name: "Samsung Galaxy S24 Plus",
        description: "Samsung Galaxy S24 Plus với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "20,990,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-plus.png"
    },
    {
        id: 35,
        name: "iPhone 14 Pro",
        description: "iPhone 14 Pro với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "22,990,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__4.png"
    },
    {
        id: 36,
        name: "OPPO A77s",
        description: "OPPO A77s với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "5,190,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a55_1_.png"
    },
    {
        id: 37,
        name: "OPPO Find N3",
        description: "OPPO Find N3 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "41,990,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/i/find_n3_-_combo_product_-_gold.png"
    },
    {
        id: 38,
        name: "OnePlus 11 5G",
        description: "OnePlus 11 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "15,990,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/n/oneplus_11_-_black_-_rgb_1.jpg"
    },
    {
        id: 39,
        name: "iPhone 12",
        description: "iPhone 12 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "11,590,000đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-12.png"
    },
    
    {
        id: 40,
        name: "Samsung Galaxy Z Fold6",
        description: "Samsung Galaxy Z Fold6 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "41,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-6-xanh_5_.png"
    },
    {
        id: 41,
        name: "Samsung Galaxy S23 Ultra",
        description: "Samsung Galaxy S23 Ultra với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "23,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-xanh_2.png"
    },
    {
        id: 42,
        name: "Samsung Galaxy S23",
        description: "Samsung Galaxy S23 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "14,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-128gb_2_.png"
    },
    {
        id: 43,
        name: "Samsung Galaxy S24 Plus",
        description: "Samsung Galaxy S24 Plus với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "20,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-plus.png"
    },
    {
        id: 44,
        name: "Samsung Galaxy M55",
        description: "Samsung Galaxy M55 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "810,190,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-m55.png"
    },
    {
        id: 45,
        name: "Samsung Galaxy S21 FE",
        description: "Samsung Galaxy S21 FE với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "9,000,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-g990_s21fe_backfront_za.png"
    },
    {
        id: 46,
        name: "Samsung Galaxy Z Flip5",
        description: "Samsung Galaxy Z Flip5 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "15,490,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-z-lip5_3_.png"
    },
    {
        id: 47,
        name: "OnePlus Nord CE 3 Lite",
        description: "OnePlus Nord CE 3 Lite với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "5,690,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/e/d/edobfefy-doc-quy.jpg"
    },
    {
        id: 48,
        name: "Sony Xperia 1V",
        description: "Sony Xperia 1V với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "24,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony-xperia-1-v.png"
    },
    {
        id: 49,
        name: "Samsung Galaxy Z Flip5",
        description: "Samsung Galaxy Z Flip5 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "15,290,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-z-lip5_1__1.png"
    },
    
    {
        id: 50,
        name: "iPhone 16 Pro Max Chính Hãng",
        description: "iPhone 16 Pro Max với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "34,490,000₫",
        image: "Iphone_16_promax.png"
      },
      {
        id: 51,
        name: "iPhone 15 Pro Max",
        description: "iPhone 15 Pro Max với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,590,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
      },
      {
        id: 52,
        name: "iPhone 16 Chính Hãng",
        description: "iPhone 16 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "22,290,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png"
      },
      {
        id: 53,
        name: "iPhone 13",
        description: "iPhone 13 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "13,390,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png"
      },
      {
        id: 54,
        name: "iPhone 16 Pro",
        description: "iPhone 16 Pro với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "28,490,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png"
      },
      {
        id: 55,
        name: "iPhone 15",
        description: "iPhone 15 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "19,490,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png"
      },
      {
        id: 56,
        name: "iPhone 14 Pro Max",
        description: "iPhone 14 Pro Max với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "25,590,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png"
      },
      {
        id: 57,
        name: "iPhone 15 Plus",
        description: "iPhone 15 Plus với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "22,590,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png"
      },
      {
        id: 58,
        name: "iPhone 14",
        description: "iPhone 14 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "16,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_1.png"
      },
      {
        id: 59,
        name: "iPhone 11",
        description: "iPhone 11 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "10,090,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-128gb.png"
      },

      {
        id: 60,
        name: "Samsung Galaxy S24 Ultra",
        description: "Samsung Galaxy S24 Ultra với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png"
      },
      {
        id: 61,
        name: "Samsung Galaxy Z Fold6",
        description: "Samsung Galaxy Z Fold6 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "41,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-6-xanh_5_.png"
      },
      {
        id: 62,
        name: "Samsung Galaxy S23 Ultra",
        description: "Samsung Galaxy S23 Ultra với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "23,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-xanh_2.png"
      },
      {
        id: 63,
        name: "Samsung Galaxy S23",
        description: "Samsung Galaxy S23 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "14,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-128gb_2_.png"
      },
      {
        id: 64,
        name: "Samsung Galaxy S23 FE 5G",
        description: "Samsung Galaxy S23 FE 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "10,390,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-fe_6_.png"
      },
      {
        id: 65,
        name: "Samsung Galaxy Z Flip6",
        description: "Samsung Galaxy Z Flip6 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "26,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_166_3.png"
      },
      {
        id: 66,
        name: "Samsung Galaxy S24 Plus",
        description: "Samsung Galaxy S24 Plus với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "20,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-plus.png"
      },
      {
        id: 67,
        name: "Samsung Galaxy M55",
        description: "Samsung Galaxy M55 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "810.190.000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-m55.png"
      },
      {
        id: 68,
        name: "Samsung Galaxy Z Flip5",
        description: "Samsung Galaxy Z Flip5 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "15,290,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-z-lip5_1__1.png"
      },
      {
        id: 69,
        name: "Samsung Galaxy S23",
        description: "Samsung Galaxy S23 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "13,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-128gb_2_.png"
      },

      {
        id: 70,
        name: "OPPO Find N3",
        description: "OPPO Find N3 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "41,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/i/find_n3_-_combo_product_-_gold.png"
      },
      {
        id: 71,
        name: "OPPO Find X8",
        description: "OPPO Find X8 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "22,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_5__7_70.png"
      },
      {
        id: 72,
        name: "OPPO Reno12 5G",
        description: "OPPO Reno12 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "11,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/_/t_i_xu_ng_22__6.png"
      },
      {
        id: 73,
        name: "OPPO A79 5G",
        description: "OPPO A79 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "7,190,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a79-tim.png"
      },
      {
        id: 74,
        name: "OPPO A78 4G",
        description: "OPPO A78 4G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "6,490,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-a78.png"
      },

      {
        id: 75,
        name: "realme C67",
        description: "realme C67 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "4,290,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-c67-1_1.png"
      },
      {
        id: 76,
        name: "realme C51",
        description: "realme C51 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "3,250,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-c51_2_1.png"
      },
      {
        id: 77,
        name: "realme 11",
        description: "realme 11 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "4,590,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-11-vang-1.jpg"
      },
      {
        id: 78,
        name: "realme 11 Pro",
        description: "realme 11 Pro với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "7,790,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-11-pro.png"
      },
      {
        id: 79,
        name: "realme C51",
        description: "realme C51 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "2,390,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-c51_2.png"
      },


      {
        id: 80,
        name: "OnePlus Nord CE 3 Lite",
        description: "OnePlus Nord CE 3 Lite với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "5,690,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/e/d/edobfefy-doc-quy.jpg"
      },
      {
        id: 81,
        name: "OnePlus 11 5G 8GB",
        description: "OnePlus 11 5G 8GB với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "15,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/n/oneplus_11_-_black_-_rgb_1.jpg"
      },
      {
        id: 82,
        name: "OnePlus Nord 3 5G",
        description: "OnePlus Nord 3 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "11,950,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/o/n/oneplus-nord-3.png"
      },

      {
        id: 83,
        name: "Xiaomi Redmi 14C",
        description: "Xiaomi Redmi 14C với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "2,890,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi_redmi_14c_5_.png"
      },
      {
        id: 84,
        name: "Xiaomi 14T",
        description: "Xiaomi 14T với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "12,750,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi_14t_2_.png"
      },
      {
        id: 85,
        name: "Xiaomi POCO X6 Pro 5G",
        description: "Xiaomi POCO X6 Pro 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "8,490,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/_/t_i_xu_ng_22__6.png"
      },
      {
        id: 86,
        name: "Xiaomi Redmi Note 13",
        description: "Xiaomi Redmi Note 13 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "4,290,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-13_1__1_1.png"
      },
      {
        id: 87,
        name: "Xiaomi 14 Ultra 5G",
        description: "Xiaomi 14 Ultra 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,990,000₫",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-14-ultra_3.png"
      },


      {
        id: 90,
        name: "iPhone 13",
        description: "iPhone 13 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "13,390,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png"
      },
      {
        id: 91,
        name: "iPhone 15 Pro Max",
        description: "iPhone 15 Pro Max với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "29,590,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
      },
      {
        id: 92,
        name: "Samsung Galaxy S21 FE",
        description: "Samsung Galaxy S21 FE với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "9,000,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-g990_s21fe_backfront_za.png"
      },
      {
        id: 93,
        name: "Samsung Galaxy S24 Plus",
        description: "Samsung Galaxy S24 Plus với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "20,990,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-plus.png"
      },
      {
        id: 94,
        name: "iPhone 14 Pro Max",
        description: "iPhone 14 Pro Max với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "25,590,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png"
      },
      {
        id: 95,
        name: "Samsung Galaxy S23 FE 5G",
        description: "Samsung Galaxy S23 FE 5G với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "10,390,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-fe_6_.png"
      },
      {
        id: 96,
        name: "realme C51",
        description: "realme C51 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "3,250,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-c51_2_1.png"
      },
      {
        id: 97,
        name: "Samsung Galaxy S23 Ultra",
        description: "Samsung Galaxy S23 Ultra với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "23,990,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-xanh_2.png"
      },
      {
        id: 98,
        name: "Samsung Galaxy S23",
        description: "Samsung Galaxy S23 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "12,990,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-128gb_2_.png"
      },
      {
        id: 99,
        name: "realme 11",
        description: "Samsung Galaxy S23 với màn hình 6.7 inches, RAM 8GB, ROM 256GB.",
        screenSize: "6.7 inches",
        ram: "8 GB",
        storage: "256 GB",
        origin: "Hàn Quốc",
        price: "4,590,000 đ",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/e/realme-11-vang-1.jpg"
      }




      

    
];


// Hàm lấy giá trị query từ URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Lấy id sản phẩm từ URL
const productId = getQueryParam('id');

// Tìm sản phẩm theo id
const product = products.find(p => p.id == productId);

if (product) {
    // Cập nhật thông tin sản phẩm vào các phần tử HTML
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("screen-size").textContent = product.screenSize;
    document.getElementById("ram").textContent = product.ram;
    document.getElementById("storage").textContent = product.storage;
    document.getElementById("origin").textContent = product.origin;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-image").src = product.image;

    // Thêm sự kiện cho các nút
    document.querySelector(".add-to-cart").addEventListener("click", () => {
        addToCart(product);
    });

    document.querySelector(".buy-now").addEventListener("click", () => {
        addToCart(product);
        window.location.href = "cart.html"; // Điều hướng đến trang giỏ hàng
    });
} else {
    alert('Sản phẩm không tồn tại');
}




document.addEventListener("DOMContentLoaded", function () {
  const decreaseBtn = document.querySelector(".quantity-btn.decrease");
  const increaseBtn = document.querySelector(".quantity-btn.increase");
  const quantityInput = document.getElementById("quantity-input");
  const addToCartBtn = document.querySelector(".add-to-cart");
  const buyNowBtn = document.querySelector(".buy-now");

  // Hàm chuyển đổi giá từ chuỗi định dạng sang số thực
  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  // Hàm cập nhật giỏ hàng trong Local Storage
  const updateCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Cập nhật số lượng nếu đã tồn tại
    } else {
      cart.push(product); // Thêm sản phẩm mới
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng
    console.log("Cart Updated:", cart); // Debug (xem giỏ hàng)
  };

  // Giảm số lượng
  decreaseBtn.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value) || 1;
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  // Tăng số lượng
  increaseBtn.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value) || 1;
    quantityInput.value = currentValue + 1;
  });

  // Nút "Thêm vào giỏ hàng"
  addToCartBtn.addEventListener("click", () => {
    const product = {
      id: `product-${new Date().getTime()}`, // Tạo ID duy nhất dựa trên thời gian
      name: document.getElementById("product-name").textContent,
      price: parsePrice(document.getElementById("product-price").textContent),
      image: document.getElementById("product-image").src,
      quantity: parseInt(quantityInput.value) || 1,
    };

    updateCart(product);
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  });

  // Nút "Mua ngay"
  buyNowBtn.addEventListener("click", () => {
    const product = {
      id: `product-${new Date().getTime()}`, // Tạo ID duy nhất dựa trên thời gian
      name: document.getElementById("product-name").textContent,
      price: parsePrice(document.getElementById("product-price").textContent),
      image: document.getElementById("product-image").src,
      quantity: parseInt(quantityInput.value) || 1,
    };

    updateCart(product);  // Thêm sản phẩm vào giỏ hàng

    alert("Sản phẩm đã được thêm vào giỏ hàng và bạn sẽ được chuyển đến giỏ hàng ngay!");
    
    // Chuyển hướng người dùng đến trang giỏ hàng
    window.location.href = "cart.html";  // Thay thế "/cart" bằng URL thực tế của trang giỏ hàng
  });
});


