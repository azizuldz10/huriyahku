// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Product Order Buttons
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            // Ganti nomor WhatsApp sesuai kebutuhan
            const whatsappLink = `https://wa.me/6212345678900?text=Saya%20tertarik%20dengan%20${encodeURIComponent(productName)}`;
            window.open(whatsappLink, '_blank');
        });
    });
});

// Image Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.querySelector('.lightbox');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);
    });
});

// Data Penjualan Chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    // Data penjualan bulanan (dalam box)
    const monthlyData = {
        '2024': [120, 150, 180, 210, 190, 230],
        '2023': [100, 130, 150, 170, 160, 200]
    };

    const salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
            datasets: [
                {
                    label: 'Penjualan 2024',
                    data: monthlyData['2024'],
                    borderColor: '#8B4513',
                    backgroundColor: 'rgba(139, 69, 19, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#8B4513',
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'Penjualan 2023',
                    data: monthlyData['2023'],
                    borderColor: '#DEB887',
                    backgroundColor: 'rgba(222, 184, 135, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#DEB887',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Grafik Penjualan Dodol (dalam Box)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: 20
                },
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#333',
                    bodyColor: '#666',
                    borderColor: '#ddd',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y} Box`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + ' Box';
                        }
                    },
                    title: {
                        display: true,
                        text: 'Jumlah Penjualan (Box)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Bulan',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear'
                }
            }
        }
    });

    // Tambahkan event listener untuk responsivitas
    window.addEventListener('resize', function() {
        salesChart.resize();
    });
});

// Animasi Counter Sederhana
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = counter.getAttribute('data-target');
    counter.innerText = target;
});

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script> 