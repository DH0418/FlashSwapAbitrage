const Flashloan = artifacts.require("Flashloan");

module.exports = async function (deployer, network) {
  try {
    const lendingPoolAddresses = {
      mainnet: "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8",
      ropsten: "0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728",
      kovan: "0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5",
      development: "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8", // For Ganache mainnet forks
    };

    const lendingPoolAddressesProviderAddress = lendingPoolAddresses[network];

    if (!lendingPoolAddressesProviderAddress) {
      throw new Error(
        `Are you deploying to the correct network? (network selected: ${network})`
      );
    }

    await deployer.deploy(Flashloan, lendingPoolAddressesProviderAddress);
  } catch (error) {
    console.log(`Error in migration: ${error.message}`);
  }
};
