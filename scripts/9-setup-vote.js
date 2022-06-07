import sdk from "./1-initialize-sdk.js";
const vote = sdk.getVote("0x4A19EB7869C52Aaaea1262962bcEC4C2FD4576e1");
const token = sdk.getToken("0xae930A0C9Fff8b73a50E2EBDF70F879Fda44206a");

(async () => {
  try {
    await token.roles.grant("minter", vote.getAddress());
    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error(
      "failed to grant vote contract permissions on token contract",
      error
    );
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = (Number(ownedAmount) / 100) * 90;

    await token.transfer(vote.getAddress(), percent90);
    console.log(
      "✅ Successfully transferred " + percent90 + " tokens to vote contract"
    );
  } catch (error) {
    console.error("failed to transfer tokens to vote contract", error);
  }
})();
