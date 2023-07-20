import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import vi from "@/locales/vn.json";

const messages = {
  en,
  vi,
};

// Hàm để xác định ngôn ngữ mặc định của trình duyệt
function getBrowserLocale() {
  const defaultLocale = "vi"; // Ngôn ngữ mặc định khi không xác định được từ trình duyệt
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.language || defaultLocale;
  }
}

const i18n = createI18n({
  locale: getBrowserLocale(), // Ngôn ngữ mặc định dựa trên trình duyệt
  fallbackLocale: "en", // Ngôn ngữ fallback nếu locale không được tìm thấy
  messages,
});

export default i18n;
