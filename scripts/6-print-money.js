import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xae930A0C9Fff8b73a50E2EBDF70F879Fda44206a");

(async () => {
  try {
    const amount = 1000000;
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();
    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$jq in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
