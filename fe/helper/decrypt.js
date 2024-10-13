const crypto = require("crypto");
const secretKey = "PertaminaLubricantPertaminaLubri";
const algorithm = "aes-256-cbc";

export default function decryptData(query) {
  const [ivHex, encryptedHex] = query.split(":");
  const ivDecrypt = Buffer.from(ivHex, "hex");
  const encryptedTextOps = Buffer.from(encryptedHex, "hex");
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), ivDecrypt);
  let decrypted = decipher.update(encryptedTextOps);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  const result = JSON.parse(decrypted.toString());
  return result;
}
