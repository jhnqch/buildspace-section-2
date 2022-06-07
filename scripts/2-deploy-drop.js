import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import { readFile } from "fs/promises";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "jqDAO Membership",
      description: "A DAO created by John",
      image: readFileSync("./scripts/assets/nyancat.png"),
      primary_sale_recipient: AddressZero,
    });
    const editionDrop = sdk.getEditionDrop(editionDropAddress);
    const metadata = await editionDrop.metadata.get();
    console.log(
      "✅ Successfully deployed editionDrop contract, address: ",
      editionDropAddress
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();
