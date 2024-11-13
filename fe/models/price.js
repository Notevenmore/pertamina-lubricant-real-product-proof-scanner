import axios from "axios";
export default class Price {
  constructor(id, product_id, amount, price) {
    this.id = id;
    this.product_id = product_id;
    this.amount = amount;
    this.price = price;
  }

  static async getData(query = "") {
    const response = await axios.post("/lubricants/api/getData", { query: query, tableName: "price" });
    const data = response.data;
    return data;
  }
}
