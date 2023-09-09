import { createStore } from "vuex";

export default createStore({
  state: {
    cards: [
      {
        type: "CƠ BẢN",
        price: "700.000",
        desc: "Dành cho shop nhỏ",
        active: false,
        cardListItems: [
          {
            interest: true,
            content: "Số lượng 3 - 5 banner\n" + "(bao gồm 1 bộ key visual)",
          },
          {
            interest: true,
            content: "Hỗ trợ đăng tải banner",
          },
          {
            interest: true,
            content: "Tối đa 2 lần chỉnh sửa",
          },
          {
            interest: false,
            content: `<strong>Quà tặng:</strong> Không có`,
          },
          {
            interest: false,
            content: "Không hỗ trợ chèn khung sản phẩm",
          },
        ],
      },
      {
        type: "TIÊU CHUẨN",
        price: "1.000.000",
        desc: "Dành cho shop vừa và nhỏ",
        active: true,
        cardListItems: [
          {
            interest: true,
            content: "Số lượng 8 - 10 banner\n" + "(bao gồm 1 bộ key visual)",
          },
          {
            interest: true,
            content: "Hỗ trợ đăng tải banner",
          },
          {
            interest: true,
            content: "Tối đa 3 lần chỉnh sửa",
          },
          {
            interest: true,
            content: `<strong>Quà tặng:</strong> Tặng 1 khung sản phẩm và hướng dẫn sử dụng phần mềm chèn ảnh canva`,
          },

          {
            interest: true,
            content: "Hỗ trợ chèn khung 5 sản phẩm",
          },
        ],
      },
      {
        type: "CHUYÊN NGHIỆP",
        price: "3.000.000",
        desc: "Dành cho shop thương hiệu",
        active: false,
        cardListItems: [
          {
            interest: true,
            content: "Số lượng 35 - 40 banner\n" + "(bao gồm 3 bộ key visual)",
          },
          {
            interest: true,
            content: "Hỗ trợ đăng tải banner",
          },
          {
            interest: true,
            content: "Tối đa 5 lần chỉnh sửa",
          },
          {
            interest: true,
            content: `<strong>Quà tặng:</strong> Tặng 2 khung sản phẩm và hướng dẫn sử dụng phần mềm chèn ảnh canva`,
          },
          {
            interest: true,
            content: "Hỗ trợ chèn khung 10 sản phẩm",
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
