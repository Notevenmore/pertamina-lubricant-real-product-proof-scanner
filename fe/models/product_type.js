import axios from "axios";

export class ProductType {
  constructor(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
  }

  static async getData(query = "") {
    const response = await axios.post("/lubricants/api/getData", { query: query, tableName: "product_type" });
    const data = response.data;
    return data;
  }

  static async all() {
    const rows = await this.getData();
    const product_type = rows.map((row) => new ProductType(row.id, row.name, row.img));
    return product_type;
  }

  static async whereId(id) {
    const rows = await this.getData(`WHERE id = ${id}`);
    const product_type = rows.map((row) => new ProductType(row.id, row.name, row.img));
    return product_type;
  }
}
