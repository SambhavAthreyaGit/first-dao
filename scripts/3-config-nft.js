import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x5b379B1643A79667434EC39dc3369C199779365e");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Golden Eighth Note",
        description: "This NFT will give you access to museDAO!",
        image: readFileSync("scripts/assets/goldennote.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();