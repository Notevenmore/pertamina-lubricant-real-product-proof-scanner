import axios from "axios";
import { Product } from "@/models/product";

export class ProductSell {
  constructor(id, v_type, description, consistency, base_oil, spesification, image, product_type, excess, utility, price, is_sold, product_name) {
    this.id = id;
    this.v_type = v_type;
    this.description = description;
    this.consistency = consistency;
    this.base_oil = base_oil;
    this.spesification = spesification;
    this.image = image;
    this.product_type = product_type;
    this.excess = excess;
    this.utility = utility;
    this.price = price;
    this.is_sold = is_sold;
    this.product_name = product_name;
  }

  static async getData(query = "") {
    const response = await axios.post("/api/getData", { query: query, tableName: "product_sell" });
    const data = response.data;
    return data;
  }

  static async all() {
    const rows = await this.getData();
    const product_sell = await Promise.all(
      rows.map(async (row) => {
        const product = await Product.whereId(row.product_id);
        return new ProductSell(row.id, product.v_type_id, product.description, product.consistency, product.base_oil, product.spesification, product.image, product.productType, product.excess, product.utility, product.price, row.is_sold);
      })
    );
    return product_sell;
  }

  static async whereId(id) {
    try {
      const rows = await this.getData(`WHERE id = '${id}'`);
      const product = await Product.whereId(rows[0].product_id);
      return new ProductSell(
        rows[0].id,
        product.v_type_id,
        product.description,
        product.consistency,
        product.base_oil,
        product.spesification,
        product.image,
        product.productType,
        product.excess,
        product.utility,
        product.price,
        rows[0].is_sold,
        `${product.productType[0].name} ${product.consistency}`
      );
    } catch (e) {
      return;
    }
  }
}
