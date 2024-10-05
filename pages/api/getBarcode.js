import bwipjs from "bwip-js";

export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("URL is required");
  }

  try {
    // Generate barcode
    bwipjs.toBuffer(
      {
        bcid: "code128", // Barcode type
        text: url, // Text to encode (the current URL)
        scale: 3, // 3x scaling factor
        height: 10, // Barcode height in mm
        includetext: true, // Show human-readable text
        textxalign: "center", // Align text to center
      },
      (err, png) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          // Send the generated barcode image
          res.setHeader("Content-Type", "image/png");
          res.send(png);
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Error generating barcode" });
  }
}
