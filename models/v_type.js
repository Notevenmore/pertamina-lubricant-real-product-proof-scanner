import axios from "axios";

export class V_Type {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async getData(query = "") {
    const response = await axios.post("/api/getData", { query: query, tableName: "v_type" });
    const data = response.data;
    return data;
  }

  static async all() {
    const rows = await this.getData();
    const vTypes = rows.map((row) => new V_Type(row.id, row.name));
    return vTypes;
  }

  static async whereId(id) {
    const rows = await this.getData(`WHERE id = ${id}`);
    const vTypes = rows.map((row) => new V_Type(row.id, row.name));
    return vTypes;
  }
}
