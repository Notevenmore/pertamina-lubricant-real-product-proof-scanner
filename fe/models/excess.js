import axios from "axios";

export default class Excess {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }

  static async getData(query = "") {
    const responseProductExcess = await axios.post("/lubricants/api/getData", { query: query, tableName: "product_excess" });
    const product_excess = responseProductExcess.data;
    const excess = await Promise.all(
      product_excess.map(async (value) => {
        const responseExcess = await axios.post("/lubricants/api/getData", { query: `WHERE id = ${value.excess_id}`, tableName: "excess" });
        return responseExcess.data[0];
      })
    );
    const data = excess.map((value) => new Excess(value.id, value.content));
    return data;
  }
}
