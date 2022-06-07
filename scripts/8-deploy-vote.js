import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "My amazing DAO",
      voting_token_address: "0xae930A0C9Fff8b73a50E2EBDF70F879Fda44206a",
      voting_delay_in_blocks: 0,
      voting_period_in_blocks: 6570,
      voting_quorum_fraction: 0,
      proposal_token_threshold: 0,
    });
    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress
    );
  } catch (error) {
    console.error("Failed to deploy vote contract", error);
  }
})();
