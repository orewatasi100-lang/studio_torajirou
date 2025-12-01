// DOM読み込み後に実行
document.addEventListener('DOMContentLoaded', () => {
    
    // --- メニューのふわっと開閉処理 ---
    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-list a');

    // ボタンクリックでメニューの開閉を切り替え
    menuToggle.addEventListener('click', () => {
        navOverlay.classList.toggle('active');
        
        // メニューが開いているときはボタンのテキストを変える等の処理も可能
    });

    // メニュー内のリンクをクリックしたら自動で閉じる
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navOverlay.classList.remove('active');
        });
    });

    // --- スクロールしたらふわっと表示させる処理 ---
    const fadeElements = document.querySelectorAll('.fade-in-scroll');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // 一度表示したら監視を止める（ちらつき防止）
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -100px 0px' // 画面の下から100px入ったら発火
    });

    fadeElements.forEach(el => {
        // 初期状態：少し下に下げて透明に
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // 監視開始
        scrollObserver.observe(el);
    });
});