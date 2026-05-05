// --- ส่วนของการคลิกปุ่มเดิม (ลบออกแล้วเนื่องจากเปลี่ยนเป็นลิ้งก์) ---

// --- ส่วนของ Light/Dark Mode ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// ฟังก์ชันสำหรับอัปเดตข้อความบนปุ่ม
function updateButtonText() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
}

// ตรวจสอบว่าเคยเลือกโหมดไหนไว้หรือไม่ (LocalStorage)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// อัปเดตข้อความปุ่มให้ถูกต้องตั้งแต่หน้าเว็บโหลดเสร็จ
updateButtonText();

themeToggle.addEventListener('click', () => {
    // สลับคลาส dark-mode
    body.classList.toggle('dark-mode');
    
    // อัปเดตข้อความบนปุ่มหลังจากสลับคลาสแล้ว
    updateButtonText();
    
    // บันทึกค่าลงใน LocalStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
