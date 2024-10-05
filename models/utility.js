import axios from "axios";
export default class Utility {
  constructor(id, content) {
    this.id = id;
    this.content = content;
  }

  static async getData(query = "") {
    const responseProductUtility = await axios.post("/api/getData", { query: query, tableName: "product_utility" });
    const product_utility = responseProductUtility.data;
    const utility = await Promise.all(
      product_utility.map(async (value) => {
        const responseUtility = await axios.post("/api/getData", { query: `WHERE id = ${value.utility_id}`, tableName: "utility" });
        return responseUtility.data[0];
      })
    );
    const data = utility.map((value) => new Utility(value.id, value.content));
    return data;
  }
}
