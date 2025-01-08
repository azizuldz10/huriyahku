document.addEventListener('DOMContentLoaded', function() {
    // Data produk
    const products = {
        'dodol-wijen': {
            title: 'Dodol Wijen Premium',
            image: '../assets/images/1.jpg',
            rating: 5,
            reviews: 125,
            price: 'Rp 25.000',
            weight: '250gr (1/4 KG)',
            description: 'Dodol Wijen memberikan sentuhan unik dengan tambahan biji wijen yang kaya akan rasa dan tekstur. Kombinasi dodol yang lembut dan biji wijen yang renyah menciptakan sensasi rasa yang baru dan menyenangkan. Bijinya menambah aroma yang khas serta memberikan manfaat kesehatan dari kandungan nutrisi wijen.'
        },
        'dodol-campur': {
            title: 'Dodol Campur Spesial',
            image: '../assets/images/2.jpg',
            rating: 4.5,
            reviews: 98,
            price: 'Rp 25.000',
            weight: '250gr (1/4 KG)',
            description: 'Dodol Campur Spesial menghadirkan variasi rasa dalam satu kemasan. Nikmati berbagai varian dodol pilihan yang dikemas dengan menarik, cocok untuk oleh-oleh atau hadiah spesial.'
        },
        'dodol-ketan-hitam': {
            title: 'Dodol Ketan Hitam',
            image: '../assets/images/3.jpg',
            rating: 5,
            reviews: 75,
            price: 'Rp 25.000',
            weight: '250gr (1/4 KG)',
            description: 'Dodol Ketan Hitam menghadirkan kelezatan dari beras ketan hitam yang kaya akan serat dan nutrisi. Rasa manis yang lembut berpadu dengan aroma khas ketan hitam, menciptakan dodol yang istimewa dan memuaskan. Teksturnya yang kenyal dan rasa yang unik membuatnya menjadi favorit di berbagai kalangan.'
        },
        'dodol-original': {
            title: 'Dodol Original Klasik',
            image: '../assets/images/4.jpg',
            rating: 5,
            reviews: 88,
            price: 'Rp 25.000',
            weight: '250gr (1/4 KG)',
            description: 'Dodol Rasa Original adalah pilihan klasik yang tidak pernah lekang oleh waktu. Dibuat dari bahan-bahan alami berkualitas tinggi seperti beras ketan dan gula kelapa, dodol ini menawarkan rasa manis yang pas dengan tekstur kenyal yang khas. Cocok dinikmati oleh semua kalangan.'
        },
        'dodol-paket': {
            title: 'Paket Dodol 1KG',
            image: '../assets/images/5.jpg',
            rating: 5,
            reviews: 92,
            price: 'Rp 90.000',
            weight: '1KG (4 x 250gr)',
            description: 'Paket hemat berisi 4 bungkus dodol (1kg total). Bisa request varian rasa yang diinginkan dalam paket ini. Sangat cocok untuk oleh-oleh atau acara keluarga. Lebih hemat dengan kualitas yang sama.'
        }
    };

    // Modal elements
    const modal = document.getElementById('quickViewModal');
    const closeModal = document.querySelector('.close-modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalRating = document.getElementById('modalRating');
    const modalPrice = document.getElementById('modalPrice');
    const modalWeight = document.getElementById('modalWeight');
    const modalDescription = document.getElementById('modalDescription');
    const modalOrderWA = document.getElementById('modalOrderWA');
    const modalOrderShopee = document.getElementById('modalOrderShopee');

    // Quick view buttons
    const quickViewButtons = document.querySelectorAll('.quick-view');

    // Generate stars HTML
    function generateStars(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= rating) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }
        return starsHTML;
    }

    // Open modal with product details
    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product');
            const product = products[productId];

            modalImage.src = product.image;
            modalImage.alt = product.title;
            modalTitle.textContent = product.title;
            modalRating.innerHTML = `${generateStars(product.rating)} <span>(${product.reviews} ulasan)</span>`;
            modalPrice.textContent = product.price;
            modalWeight.textContent = `Berat: ${product.weight}`;
            modalDescription.textContent = product.description;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Order buttons in modal
    modalOrderWA.addEventListener('click', () => {
        const productName = modalTitle.textContent;
        const productPrice = modalPrice.textContent;
        const message = encodeURIComponent(`Halo, saya tertarik dengan ${productName} (${productPrice}). Mohon informasi lebih lanjut.`);
        const whatsappLink = `https://wa.me/6285156789101?text=${message}`;
        window.open(whatsappLink, '_blank');
    });

    modalOrderShopee.addEventListener('click', () => {
        // Ganti dengan link Shopee yang sesuai
        const shopeeLink = 'https://s.shopee.co.id/qS5god8Sn';
        window.open(shopeeLink, '_blank');
    });
}); 