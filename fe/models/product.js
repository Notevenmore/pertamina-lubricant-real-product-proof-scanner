import axios from "axios";
import { V_Type } from "./v_type";
import { ProductType } from "./product_type";
import Excess from "./excess";
import Utility from "./utility";
import Price from "./price";

export class Product {
  constructor(id, v_type_id, description, consistency, base_oil, spesification, image, productType, excess, utility, price) {
    this.id = id;
    this.v_type_id = v_type_id;
    this.description = description;
    this.consistency = consistency;
    this.base_oil = base_oil;
    this.spesification = spesification;
    this.image = image;
    this.productType = productType;
    this.excess = excess;
    this.utility = utility;
    this.price = price;
  }

  static async getData(query = "") {
    const response = await axios.post("/lubricants/api/getData", { query: query, tableName: "product" });
    const data = response.data;
    return data;
  }

  static async all() {
    const rows = await this.getData();
    const product = await Promise.all(
      rows.map(async (row) => {
        const v_type = await V_Type.whereId(row.v_type_id);
        const product_type = await ProductType.whereId(row.product_type_id);
        const excess = await Excess.getData(`WHERE product_id = ${row.id}`);
        const utility = await Utility.getData(`WHERE product_id = ${row.id}`);
        const price = await Price.getData(`WHERE product_id = ${row.id}`);
        return new Product(row.id, v_type, row.description, row.consistency, row.base_oil, row.spesification, row.image, product_type, excess, utility, price);
      })
    );
    return product;
  }

  static async whereId(id) {
    const rows = await this.getData(`WHERE id = ${id}`);
    const v_type = await V_Type.whereId(rows[0].v_type_id);
    const product_type = await ProductType.whereId(rows[0].product_type_id);
    const excess = await Excess.getData(`WHERE product_id = ${rows[0].id}`);
    const utility = await Utility.getData(`WHERE product_id = ${rows[0].id}`);
    const price = await Price.getData(`WHERE product_id = ${rows[0].id}`);
    return new Product(rows[0].id, v_type, rows[0].description, rows[0].consistency, rows[0].base_oil, rows[0].spesification, rows[0].image, product_type, excess, utility, price);
  }
}
