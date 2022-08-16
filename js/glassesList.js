export class GlassesList {
  constructor() {
    this.glist = [];
  }
  // nhận 1 phần tử vào mảng dùng push
  addGlasses(glasses) {
    this.glist.push(glasses);
  }

  //   hiển thị kính ra
  renderGlasses() {
    //các thẻ HTML chứa nội dung của các đối tượng kính
    let content = "";

    //map chỉ duyệt mảng thôi, reduce ngoài việc duyệt mảng còn in ra giá trị return ra ngoài.  truyền vào 1 callback function

    // khi duyệt mảng và return ra ngoài thì sẽ truyền vào content
    content = this.glist.reduce((glContent, item, index) => {
      //glContent = glContent (nội dung cũ) + `Nội dung mới`

      //   kính muốn hiển thị sẽ nằm trong col-4, dùng class của bootstrap để ảnh kính vừa vặn trong col-4, thu nhỏ lại = vs thẻ cha
      //    dấu = là gán giá trị cho biến, nhưng vì muốn lấy ra đc nhiều kính nên phải viết glContent +=` ` để nó ko ghi đè lên col-4 cũ
      //  glContent = glContent nội dung cũ + nội dung mới. nối chuỗi dùng dấu +
      glContent += `
                <div class="col-4">
                    <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="Glasses">
                </div>
            `;
      // có 12 unit chia thành 3 cột vậy là col-4
      //   thêm data-id thông qua sự kiện onclick sang bên main để biết đang thử kính item nào.
      // bắt buộc phải thêm event vào onlick để biết đc bên main có sự kiện đấy
      //   vglasses__item ở css tạo hiệu ứng pointer thì chỉ cần đặt vào class là đc
      return glContent;
    }, "");
    // khai báo nội dung ban đầu của glContent " "
    //glContent chỉ là nội dung khi duyệt mảng thôi, khác vs content truyền ra bên ngoài

    return content;
    // phải return content đẩy ra ngoài renderGlasses
  }
}
