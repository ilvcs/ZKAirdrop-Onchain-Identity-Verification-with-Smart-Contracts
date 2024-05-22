const { ethers } = require("hardhat");
// zkAirdropVerifier  contract address: 0x2C6AB393D01DBC882640f7C83B420a4859616307
const UNIVERSAL_VERIFIER_CONTRACT_ADDRESS =
	"0xa3e4472aF76F06370d95feAde9Cf777B0CeC2544";
async function main() {
	const name = "ZKAirdrop Token";
	const symbol = "ZKERC20";

	const ZKAirdropVerifierFactory = await ethers.getContractFactory(
		"ERC20LinkedUniversalVerifier",
	);
	const zkAirdropVerifier = await ZKAirdropVerifierFactory.deploy(
		UNIVERSAL_VERIFIER_CONTRACT_ADDRESS,
		name,
		symbol,
	);

	await zkAirdropVerifier.waitForDeployment();
	console.log(
		"zkAirdropVerifier  contract address:",
		await zkAirdropVerifier.getAddress(),
	);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
