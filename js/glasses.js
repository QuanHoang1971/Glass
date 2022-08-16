// khai báo class: có constructor truyền các thuộc tính biến ở bên main sang
// lớp đối tượng này sẽ export ra bên ngoài đc
export class Glasses {
  constructor(_id, _src, _virtualImg, _brand, _name, _color, _price, _desc) {
    this.id = _id;
    this.src = _src;
    this.virtualImg = _virtualImg;
    this.brand = _brand;
    this.name = _name;
    this.color = _color;
    this.price = _price;
    this.desc = _desc;
    this.status = true;
  }
}

//status là còn hàng hay hết? mặc định là true còn hàng
