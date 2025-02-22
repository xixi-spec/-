// 弹窗显示
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
    setTimeout(function() {
        document.getElementById("popup").classList.add("show");
    }, 10);
}

// 关闭弹窗
function closePopup() {
    document.getElementById("popup").classList.remove("show");
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 300);
}

// 增强的搜索功能
function searchRecipes() {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.recipe-card, .regional-food-item');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const shouldShow = text.includes(searchTerm);
        card.style.display = shouldShow ? 'block' : 'none';
        card.style.opacity = shouldShow ? '1' : '0';
        card.style.transform = shouldShow ? 'translateY(0)' : 'translateY(20px)';
    });
}

// 优化的选项卡切换
function switchTab(tabId) {
    // 更新按钮状态
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') === `switchTab('${tabId}')`) {
            btn.classList.add('active');
        }
    });

    // 更新内容区域
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}


// 添加卡片悬停动画
document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

function filterRecipes(type) {
    // 获取元素
    const healthyRecipes = document.getElementById('healthy-recipes');
    const regionalFood = document.getElementById('regional-food');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // 1. 移除所有按钮的高亮状态
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 2. 为当前点击的按钮添加高亮
    const activeButton = document.querySelector(`.filter-btn[onclick="filterRecipes('${type}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // 3. 切换内容显示
    switch (type) {
        case 'all':
            healthyRecipes.style.display = 'block';
            regionalFood.style.display = 'block';
            break;
        case 'healthy':
            healthyRecipes.style.display = 'block';
            regionalFood.style.display = 'none';
            break;
        case 'regional':
            healthyRecipes.style.display = 'none';
            regionalFood.style.display = 'block';
            break;
    }
}

// 4. 初始化页面时强制刷新状态
document.addEventListener('DOMContentLoaded', () => {
    filterRecipes('all'); // 默认显示全部内容并高亮按钮
});
// 提交按钮点击事件
document.getElementById('submit-oil-form').addEventListener('click', function () {
    // 显示图片区域
    const oilImages = document.getElementById('oil-images');
    oilImages.style.display = 'flex'; // 显示图片区域

    // 可选：滚动到图片区域
    oilImages.scrollIntoView({ behavior: 'smooth', block: 'start' });
});