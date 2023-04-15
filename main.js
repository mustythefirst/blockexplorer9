const { Alchemy, Network } = require("alchemy-sdk");

const config = {
    apiKey: "6Oj277dnKnLSp174LzXjsaFr70oJX7BR",
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {

    // WOW contract address
    const address = "0x01a53B16c3f66F2299d796b2159A0346636a6De8";

    // Get owners 
    const owners = await alchemy.nft.getOwnersForContract(address);
    console.log(owners);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();