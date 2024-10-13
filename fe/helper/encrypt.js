const crypto = require("crypto");
const secretKey = "PertaminaLubricantPertaminaLubri";
const algorithm = "aes-256-cbc";

export default function encryptData(data) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
  let encrypted = cipher.update(JSON.stringify(data));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const encrypt = iv.toString("hex") + ":" + encrypted.toString("hex");
  return encrypt;
}
