// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Module card click handler
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            moduleCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
        });
    });

    // Module card click handler
    const physicsCourse = document.getElementById('physics-course');
    const physicsDetail = document.getElementById('physics-detail');
    const backButton = document.querySelector('.back-button');

    physicsCourse.addEventListener('click', function() {
        physicsCourse.style.display = 'none';
        physicsDetail.style.display = 'block';
    });

    backButton.addEventListener('click', function() {
        physicsDetail.style.display = 'none';
        physicsCourse.style.display = 'block';
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const lessonItems = document.querySelectorAll('.lesson-item span');
        const assignmentItems = document.querySelectorAll('.assignment-item span');
        
        [...lessonItems, ...assignmentItems].forEach(item => {
            const text = item.textContent.toLowerCase();
            const parent = item.closest('.lesson-item, .assignment-item');
            if (text.includes(searchTerm)) {
                parent.style.display = 'flex';
            } else {
                parent.style.display = 'none';
            }
        });
    });

    // Notifications click handler
    const notifications = document.querySelector('.notifications');
    notifications.addEventListener('click', function() {
        alert('Yeni bildirim bulunmamaktadır');
    });

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Lesson item click handler
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach(item => {
        item.addEventListener('click', function() {
            const lessonTitle = this.querySelector('span').textContent;
            alert(`${lessonTitle} dersi başlatılıyor...`);
        });
    });

    // DOM Elements
    const courseCards = document.querySelectorAll('.module-card');
    const courseDetail = document.querySelector('.course-detail');
    const courseGrid = document.querySelector('.course-grid');

    // Event Listeners
    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('disabled')) {
                // Ders kartına tıklandığında ilgili ders sayfasına yönlendir
                const courseName = card.querySelector('h3').textContent.toLowerCase();
                window.location.href = `./courses/${courseName}.html`;
            }
        });
    });

    // Geri butonu işlevselliği
    document.querySelector('.back-button').addEventListener('click', () => {
        // Bir üst dizine dön
        window.location.href = '../';
    });

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        // Sayfa yüklendiğinde URL'yi kontrol et
        const path = window.location.pathname;
        
        // Eğer kurs sayfasındaysak
        if (path.includes('/courses/')) {
            // Kurs detayını göster
            courseDetail.style.display = 'block';
            courseGrid.style.display = 'none';
        } else {
            // Ana sayfadaysak ders detayını gizle
            courseDetail.style.display = 'none';
            courseGrid.style.display = 'grid';
        }
    });
}); 