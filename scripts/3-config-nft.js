import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x765135f6b1d0e447a59023d38f6db3838f42b430"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "nyancat",
        description: "This NFT will give you access to jqDAO",
        image: readFileSync("scripts/assets/nyancat.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("Failed to create new NFT", error);
  }
})();
