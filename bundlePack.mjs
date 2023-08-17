import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
    // Initialize with Private Key
    const privateKeySdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "binance");
    
    // TODO: Initialize in read-only mode or with some other mechanism
    // Assuming you want to use a client ID:
    const readOnlySdk = new ThirdwebSDK("binance", { clientId: process.env.YOUR_CLIENT_ID });

    const packAddress = "0xbA2D5fEaad95a448F0f3114bb99d7162694ca500";
    const cardAddress = "0xB8a33200A4a09d8c5F5313D6a19A9609B916479e";

    const pack = privateKeySdk.getContract(packAddress, "pack");
    const card = privateKeySdk.getContract(cardAddress, "edition");
    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage = "ipfs://Qmc8iWUVg2RZBJLbzhBU9vxDt1hVm9kXzK5FujAtgoRJgo/fawl3r_space_age_loot_chest_5a2de240-ae57-493f-abd1-24cbe1a16e2b.png";

    console.log("Creating pack");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Starter Pack",
            description: "F3 Warrior Lootbox",
            image: packImage,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 2,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 3,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 4,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 5,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 6,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 7,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 8,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 9,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 10,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 11,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 12,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 13,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 14,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 15,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 16,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 17,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 18,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 19,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 20,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 21,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 22,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 23,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 24,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 25,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 27,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 28,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 29,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 30,
                quantityPerReward: 1,
                totalRewards:100,
            },
            {
                contractAddress: cardAddress,
                tokenId: 31,
                quantityPerReward: 1,
                totalRewards:20,
            },
            {
                contractAddress: cardAddress,
                tokenId: 32,
                quantityPerReward: 1,
                totalRewards:20,
            },
            {
                contractAddress: cardAddress,
                tokenId: 33,
                quantityPerReward: 1,
                totalRewards:20,
            },
            {
                contractAddress: cardAddress,
                tokenId: 34,
                quantityPerReward: 1,
                totalRewards:20,
            }
        ],
        rewardsPerPack: 4,
    });

    console.log("Packs created");
})();