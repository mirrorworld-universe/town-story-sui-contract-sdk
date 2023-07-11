import {
    Ed25519Keypair,
    JsonRpcProvider,
    testnetConnection,
    RawSigner,
    SuiTransactionBlockResponse,
    TransactionBlock,
    SuiEvent, localnetConnection
} from "@mysten/sui.js";
import {Buffer} from "buffer";
import {TownStoryLib} from "@mirrorworld/sui.townstory";

const provider: JsonRpcProvider = new JsonRpcProvider(localnetConnection);
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

const PublishAtAddress: string = "0x0eacee563e2c3fa533dc60e39f8e840f23aae0d8156dde2b0c7a5850b8996913";
const PackageAddress: string = "0x0eacee563e2c3fa533dc60e39f8e840f23aae0d8156dde2b0c7a5850b8996913";

const AdminCapAddress: string = "0x64df22777ccc16f7c725e060c391e0dd4e65b39d02618fc7ff3563034ef78eb2";

const ThiefIndexConfigAddress: string = "0x6a566a61d023084dca375aba3332d771f8f0c915a69337482efcb3fdbc1a9b96";

const UserConfigAddress: string = "0xc1a462db73a66c7c1befb4a1ee38259442cdbcc216cee2b5b9ad967ca538c558";

const MintConfigAddress: string = "0xf990fb8b7a26c002067df490f161030e3a0989cb3dbb334f23e0c267fb2a66db";

const MintCapAddress: string = "0xf059e2f1af3ac524ca641256511cb41d8a0f6b91b12b349997ebbc0f0980ac16";

const VersionConfigAddress: string = "0x39c00bb87628d2bcc309f64277c7713abdae4875dd8207ba37a142ddd1132e93";


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



    // Wihetlist Method

    // Address safe limit is 50
    // await addedAddressInWihtelistTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, UserConfigAddress, [SellerKeypair.getPublicKey().toSuiAddress()]);

    // await removeAddressInWihtelistTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, UserConfigAddress, [SellerKeypair.getPublicKey().toSuiAddress()]);

    // Mint Methods

    // await wihetlistMintTx(SellerSigner, FeePayerSigner, VersionConfigAddress, MintConfigAddress, ThiefIndexConfigAddress, UserConfigAddress, MintCapAddress,
    //     "0x60f6761fafc9ce7f5c3d8257af533090889dc1595990bb02b671d70d389a0f74");

    // await mintTx(BuyerSigner, FeePayerSigner, VersionConfigAddress, MintConfigAddress, ThiefIndexConfigAddress, UserConfigAddress, MintCapAddress,
    //     "0x6d55423f66556b2b0d8801c8b116ee7788939364b2e118248104d1d8442a216c");
    //
    // await adminMintTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, MintConfigAddress, ThiefIndexConfigAddress, UserConfigAddress, MintCapAddress,
    //     AdminCapAddress, RoyaltyKeypair.getPublicKey().toSuiAddress());

    // Metadata

    // const imageUrlBase: string = "https://suiexplorer.com/image/new";
    // const metadataUrlBase: string = "https://suiexplorer.com/image/metadata/new";
    //
    // let indexStart: number = 1;
    // let indexEnd: number = 100;
    //
    // let indexes: number[] = [];
    // let imageUrls: string[] = [];
    // let metadataUrls: string[] = [];
    //
    // for (let i = indexStart; i <= indexEnd ; i++) {
    //     indexes.push(i);
    //     imageUrls.push(imageUrlBase + "/" + i);
    //     metadataUrls.push(metadataUrlBase + "/" + i);
    // }
    //
    // console.log(indexes);
    // console.log(imageUrls);
    // console.log(metadataUrls);

    // await addMetadataTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, ThiefIndexConfigAddress, indexes, imageUrls, metadataUrls);
    // await updateMetadataTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, ThiefIndexConfigAddress, indexes, imageUrls, metadataUrls);

    // let indexStart: number = 201;
    // let indexEnd: number = 300;
    //
    // for (let j = 0; j < 99; j++) {
    //     const imageUrlBase: string = "https://suiexplorer.com/image";
    //     const metadataUrlBase: string = "https://suiexplorer.com/image";
    //
    //     let indexes: number[] = [];
    //     let imageUrls: string[] = [];
    //     let metadataUrls: string[] = [];
    //
    //     for (let i = indexStart; i <= indexEnd ; i++) {
    //         indexes.push(i);
    //         imageUrls.push(imageUrlBase + "/" + i);
    //         metadataUrls.push(metadataUrlBase + "/" + i);
    //     }
    //
    //     // console.log(indexes);
    //     // console.log(imageUrls);
    //     // console.log(metadataUrls);
    //
    //     await addMetadataTx(OwnerSigner, FeePayerSigner, VersionConfigAddress, AdminCapAddress, ThiefIndexConfigAddress, indexes, imageUrls, metadataUrls);
    //
    //     indexStart = indexStart + 100;
    //     indexEnd = indexEnd + 100;
    //
    //     console.log(indexStart)
    //     console.log(indexEnd)
    //
    //     await delay(5000);
    //     console.log("tx index: ", j)
    // }

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

async function addMetadataTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                      adminCap: string, thiefIndexConfig: string, indexes: number[], imageUrls: string[], metadataUrls: string[]) {
    const txb: TransactionBlock = await townStoryLib.addMetadataTransaction((await senderSigner.getAddress()), versionConfig, adminCap, thiefIndexConfig, indexes, imageUrls, metadataUrls,
        (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

async function updateMetadataTx(senderSigner: RawSigner, feeSigner: RawSigner, versionConfig: string,
                             adminCap: string, thiefIndexConfig: string, indexes: number[], imageUrls: string[], metadataUrls: string[]) {
    const txb: TransactionBlock = await townStoryLib.updateMetadataTransaction((await senderSigner.getAddress()), versionConfig, adminCap, thiefIndexConfig, indexes, imageUrls, metadataUrls,
        (await feeSigner.getAddress()));

    const senderSig = await townStoryLib.signTransaction(txb, senderSigner);

    const feeSig = await townStoryLib.signTransaction(txb, feeSigner);

    const result = await townStoryLib.executeTransactionBlock(txb, [senderSig, feeSig]);

    console.log(result);
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
