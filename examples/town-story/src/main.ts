import {
    Ed25519Keypair,
    JsonRpcProvider,
    testnetConnection,
    RawSigner,
    SuiTransactionBlockResponse,
    TransactionBlock,
    SuiEvent
} from "@mysten/sui.js";
import {Buffer} from "buffer";
import {TownStoryLib} from "@mirrorworld/sui.townstory";

const provider: JsonRpcProvider = new JsonRpcProvider(testnetConnection);
const OwnerKey: string = "";
const BuyerKey: string = "";
const SellerKey: string = "";
const RoyaltyKey: string = "";
const FeePayerKey: string = "";

const OwnerKeypair = Ed25519Keypair.fromSecretKey(Buffer.from(OwnerKey, "base64").slice(1));
const BuyerKeypair = Ed25519Keypair.fromSecretKey(Buffer.from(BuyerKey, "base64"));
const SellerKeypair = Ed25519Keypair.fromSecretKey(Buffer.from(SellerKey, "base64"));
const RoyaltyKeypair = Ed25519Keypair.fromSecretKey(Buffer.from(RoyaltyKey, "base64"));
const FeePayerKeypair = Ed25519Keypair.fromSecretKey(Buffer.from(FeePayerKey, "base64"));

console.log("OwnerKey: ", OwnerKeypair.getPublicKey().toSuiAddress());
console.log("BuyerKeypair: ", BuyerKeypair.getPublicKey().toSuiAddress());
console.log("SellerKeypair: ", SellerKeypair.getPublicKey().toSuiAddress());
console.log("RoyaltyKeypair: ", RoyaltyKeypair.getPublicKey().toSuiAddress());
console.log("FeePayerKey: ", FeePayerKeypair.getPublicKey().toSuiAddress());

const OwnerSigner = new RawSigner(OwnerKeypair, provider);
const BuyerSigner = new RawSigner(BuyerKeypair, provider);
const SellerSigner = new RawSigner(SellerKeypair, provider);
const RoyaltySigner = new RawSigner(RoyaltyKeypair, provider);
const FeePayerSigner = new RawSigner(FeePayerKeypair, provider);

const PublishAtAddress: string = "0x0f8a2de3ecaa3d42dc31b3e288637e16b573fad83c43e0cc540c0835eba0779c";
const PackageAddress: string = "0x0f8a2de3ecaa3d42dc31b3e288637e16b573fad83c43e0cc540c0835eba0779c";

const PublisherAddress: string = "0x4775a0ee618b0ad287b279a3fdb357d5347d44798e982b5861ed00b5d80ecef8";

const AdminCapAddress: string = "0x106830f67d6e3ff8adad409d5f7932cf86ab5e525acab762ce95f511600d3d1c";

const ThiefIndexConfigAddress: string = "0x485ccb79379da03ae1d776cf139b781e31cd648574933cf80122b48762034cc2";

const UserConfigAddress: string = "0x1aaa1fef2ef4b5c1ff54143b8f53e7e8e11ce7cc6d41e9ea678ca1e2d3720d9c";

const MintConfigAddress: string = "0x7877e6c4b32e9b71e3b20f141c039af14d94ac49bc21fc3348c677359bf756a1";

const MintCapAddress: string = "0xf811952e3950740ae6add118499920b3586300cb9eb2c55551b5ea9ecd6cba11";

const VersionConfigAddress: string = "0x3ba080fa66a88d5d133d66fe871a58c6d7d44eb45c384c26b9d63251f8e85f24";


const townStoryLib: TownStoryLib = new TownStoryLib(PublishAtAddress, PackageAddress, provider);

(async () => {

    // Update Methods

    // await updateMintPriceTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, BigInt(100000));

    // await updateEnableMintTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, true);

    // await updateWhitelistMintPriceTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, BigInt(200000));

    // await updateEnableWhitelistTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, true);

    // await updateMaximumMintAllowTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, 5);

    // await updateEnableMaximumMintAllowTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, true);

    // await updateReceiverTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, "0xecf8ddeb9eb3a97837455358fb54da82a3648b794f6ace43a524956cb69d909b");

    // await updateImageUrlTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, "https://suiexplorer.com/object/image/", ".png");

    // await updateMetadataUrlTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, MintConfigAddress, "https://suiexplorer.com/object/metadata/", ".json");



    // Wihetlist Method

    // Address safe limit is 50
    // await addedAddressInWihtelistTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, UserConfigAddress, [SellerKeypair.getPublicKey().toSuiAddress()]);

    // await removeAddressInWihtelistTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, UserConfigAddress, [SellerKeypair.getPublicKey().toSuiAddress()]);

    // Mint Methods

    await wihetlistMintTx(SellerSigner, FeePayerSigner, VersionConfigAddress, MintConfigAddress, ThiefIndexConfigAddress, UserConfigAddress, MintCapAddress,
        "0x522dc8c46d42c35da275b2f3f0690312286bdb2f51445be9f4831a40c8d78b91");

    // await mintTx(BuyerSigner, FeePayerSigner, VersionConfigAddress, MintConfigAddress, ThiefIndexConfigAddress, UserConfigAddress, MintCapAddress,
    //     "0x5d15fedde05d5f71931d0a1326d5580d81fb77b1f9555cf182beaa99aaeb5cd4");
    //
    // await adminMintTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, MintConfigAddress, ThiefIndexConfigAddress, UserConfigAddress, MintCapAddress,
    //     AdminCapAddress, RoyaltyKeypair.getPublicKey().toSuiAddress());

})();

async function requestSuiFromFaucet(address: string) {
    await provider.requestSuiFromFaucet(
        address
    );
}


async function splitCoins(senderSigner: RawSigner, feeSigner: RawSigner, coin: string, amount) {
    const txb = new TransactionBlock();

    const [coins] = txb.splitCoins(txb.pure(coin), [txb.pure(amount)])

    console.log([coins]);

    txb.transferObjects([coins], txb.pure((await senderSigner.getAddress())))

    txb.setSender((await senderSigner.getAddress()));
    txb.setGasOwner((await feeSigner.getAddress()));

    const senderSig = await senderSigner.signTransactionBlock({transactionBlock: txb});
    const feeSig = await feeSigner.signTransactionBlock({transactionBlock: txb});

    const result = await provider.executeTransactionBlock({
        transactionBlock: (await txb.build()),
        signature: [senderSig.signature, feeSig.signature]
    })

    console.log(result);
}

async function transferObject(signer: RawSigner, objectId: string, newOwner: string) {
    const tx = new TransactionBlock();
    tx.transferObjects([
            tx.object(objectId)
        ],
        tx.pure(newOwner)
    );

    const result: SuiTransactionBlockResponse = await signer.signAndExecuteTransactionBlock({transactionBlock: tx});
    console.log({result});
}

async function updateMintPriceTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                 adminCap, mintConfig: string, mintPrice: bigint) {
    const txb: TransactionBlock = await townStoryLib.updateMintPriceTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, mintPrice, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateEnableMintTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                  adminCap, mintConfig: string, enableMint: boolean) {
    const txb: TransactionBlock = await townStoryLib.updateEnableMintTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, enableMint, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateWhitelistMintPriceTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                          adminCap, mintConfig: string, whitelistMintPrice: bigint) {
    const txb: TransactionBlock = await townStoryLib.updateWhitelistMintPriceTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, whitelistMintPrice, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateEnableWhitelistTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                       adminCap, mintConfig: string, enableWhitelist: boolean) {
    const txb: TransactionBlock = await townStoryLib.updateEnableWhitelistTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, enableWhitelist, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateReceiverTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                adminCap, mintConfig: string, receiverAddress: string) {
    const txb: TransactionBlock = await townStoryLib.updateReceiverTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, receiverAddress, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateMaximumMintAllowTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                        adminCap, mintConfig: string, maximumMintAllow: number) {
    const txb: TransactionBlock = await townStoryLib.updateMaximumMintAllowTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, maximumMintAllow, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateEnableMaximumMintAllowTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                              adminCap, mintConfig: string, enableMaximumMintAllow: boolean) {
    const txb: TransactionBlock = await townStoryLib.updateEnableMaximumMintAllowTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, enableMaximumMintAllow, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateImageUrlTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                adminCap, mintConfig: string, base: string, suffix: string) {
    const txb: TransactionBlock = await townStoryLib.updateImageUrlTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, base, suffix, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateMetadataUrlTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                   adminCap, mintConfig: string, base: string, suffix: string) {
    const txb: TransactionBlock = await townStoryLib.updateMetadataUrlTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, mintConfig, base, suffix, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}


////////

async function addedAddressInWihtelistTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                         adminCap: string, userConfig: string, addresses: string[]) {

    const txb: TransactionBlock = await townStoryLib.addedAddressInWihtelistTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, userConfig, addresses, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function removeAddressInWihtelistTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                                          adminCap: string, userConfig: string, addresses: string[]) {
    const txb: TransactionBlock = await townStoryLib.removeAddressInWihtelistTransaction((await senderSigner.getAddress()),
        versionConfig, adminCap, userConfig, addresses, (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function adminMintTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                           mintConfig: string, thiefIndexConfig: string, userConfig: string, mintCap: string,
                           adminCap: string, thiefReceiver: string) {
    const txb: TransactionBlock = await townStoryLib.adminMintTransaction((await senderSigner.getAddress()),
        versionConfig, mintConfig, thiefIndexConfig, userConfig, mintCap, adminCap, thiefReceiver,
        (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);

    console.log("Thief Address: ", (await townStoryLib.getThiefObject(result.digest)))
}

async function wihetlistMintTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                               mintConfig: string, thiefIndexConfig: string, userConfig: string, mintCap: string,
                               wallet: string) {
    const txb: TransactionBlock = await townStoryLib.wihetlistMintTransaction((await senderSigner.getAddress()),
        versionConfig, mintConfig, thiefIndexConfig, userConfig, mintCap, wallet,
        (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);

    console.log("Thief Address: ", (await townStoryLib.getThiefObject(result.digest)))
}

async function mintTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                      mintConfig: string, thiefIndexConfig: string, userConfig: string, mintCap: string,
                      wallet: string) {
    const txb: TransactionBlock = await townStoryLib.mintTransaction((await senderSigner.getAddress()),
        versionConfig, mintConfig, thiefIndexConfig, userConfig, mintCap, wallet,
        (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);

    console.log("Thief Address: ", (await townStoryLib.getThiefObject(result.digest)))
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
