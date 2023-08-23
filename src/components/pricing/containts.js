const cards = [
  {
    type: "CƠ BẢN",
    price: 700.0,
    desc: "Dành cho shop nhỏ",
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
        content: "Quà tặng: Không có",
      },
      {
        interest: false,
        content: "Không hỗ trợ chèn khung sản phẩm",
      },
    ],
  },
  {
    type: "TIÊU CHUẨN",
    price: 700.0,
    desc: "1.000.000",
    cardListItem: [
      {
        interest: true,
        content: "Dành cho shop vừa và nhỏ",
      },
      {
        interest: true,
        content: "Hỗ trợ đăng tải banner",
      },
      {
        interest: true,
        content: `${(
          <b>Quà tặng:</b>
        )} Tặng 1 khung sản phẩm và hướng dẫn sử dụng phần mềm chèn ảnh canva`,
      },
      {
        interest: true,
        content: "Tối đa 3 lần chỉnh sửa",
      },
      {
        interest: true,
        content: "Hỗ trợ chèn khung 5 sản phẩm",
      },
    ],
  },
];

export default cards;
