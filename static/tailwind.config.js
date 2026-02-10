/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html"], // บอกให้ Tailwind ไปหา class ในไฟล์ html ทุกไฟล์ในโฟลเดอร์ templates
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // เพิ่มบรรทัดนี้เพื่อเปิดใช้งาน DaisyUI
  ],
}