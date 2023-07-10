import { JsonRpcProvider, devnetConnection, RawSigner, TransactionBlock, Transactions, SuiTransactionBlockResponse } from '@mysten/sui.js';

export class TownStoryLib {
  publishedAtAddress: string;
  packageAddress: string;
  provider: JsonRpcProvider;

  constructor(marketPublishedAtAddress: string, marketPackageAddress: string, provider: JsonRpcProvider = new JsonRpcProvider(devnetConnection)) {
    this.publishedAtAddress = marketPublishedAtAddress;
    this.packageAddress = marketPackageAddress;
    this.provider = provider;
  }

  async executeTransactionBlock(txb: TransactionBlock, signatures: string[]): Promise<SuiTransactionBlockResponse> {
    const res = await this.provider.executeTransactionBlock({
      transactionBlock: await txb.build({ provider: this.provider }),
      signature: signatures,
    });

    return res;
  }

  async signTransaction(txb: TransactionBlock, signer: RawSigner): Promise<string> {
    return (await signer.signTransactionBlock({ transactionBlock: txb })).signature;
  }

  async addFeePayerAndGasBudgetInTransaction(
    txb: TransactionBlock,
    senderAddress: string,
    feePayerAddress: string | undefined = undefined,
    gasBudget: bigint | undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    if (feePayerAddress != undefined) {
      txb.setGasOwner(feePayerAddress);
    }

    if (gasBudget != undefined) {
      txb.setGasBudget(gasBudget);
    }

    if (gasCoinObjectAddress != undefined) {
      const obData = (
        await this.provider.getObject({
          id: gasCoinObjectAddress as string,
        })
      )?.data;

      txb.setGasPayment([
        {
          objectId: obData?.objectId as string,
          version: obData?.version as string,
          digest: obData?.digest as string,
        },
      ]);
    }

    txb.setSender(senderAddress);

    return txb;
  }

  async updateMintPriceTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    mintConfigObjectAddress: string,
    mintPrice: bigint,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_mint_price`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(mintConfigObjectAddress), txb.pure(mintPrice)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async updateEnableMintTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    mintConfigObjectAddress: string,
    enableMint: boolean,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_enable_mint`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(mintConfigObjectAddress), txb.pure(enableMint)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async updateWhitelistMintPriceTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    mintConfigObjectAddress: string,
    whitelistMintPrice: bigint,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_whitelist_mint_price`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(mintConfigObjectAddress), txb.pure(whitelistMintPrice)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async updateEnableWhitelistTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    mintConfigObjectAddress: string,
    enableWhitelist: boolean,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_enable_whitelist`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(mintConfigObjectAddress), txb.pure(enableWhitelist)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async updateMaximumMintAllowTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    mintConfigObjectAddress: string,
    maximumMintAllow: number,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_maximum_mint_allow`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(mintConfigObjectAddress), txb.pure(maximumMintAllow)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async updateEnableMaximumMintAllowTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    mintConfigObjectAddress: string,
    enableMaximumMintAllow: boolean,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_enable_maximum_mint_allow`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(mintConfigObjectAddress), txb.pure(enableMaximumMintAllow)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async updateReceiverTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    mintConfigObjectAddress: string,
    receiverAddress: string,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_receiver`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(mintConfigObjectAddress), txb.pure(receiverAddress)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async addedAddressInWihtelistTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    userConfigObjectAddress: string,
    addresses: string[],
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::added_address_in_wihtelist`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(userConfigObjectAddress), txb.pure(addresses)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async removeAddressInWihtelistTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    userConfigObjectAddress: string,
    addresses: string[],
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::remove_address_in_wihtelist`,
        arguments: [txb.pure(versionConfigObjectAddress), txb.pure(adminCapObjectAddress), txb.pure(userConfigObjectAddress), txb.pure(addresses)],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async addMetadataTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    thiefIndexConfigObjectAddress: string,
    indexes: bigint[],
    imageUrls: string[],
    metadataUrls: string[],
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::add_metadata`,
        arguments: [
          txb.pure(versionConfigObjectAddress),
          txb.pure(adminCapObjectAddress),
          txb.pure(thiefIndexConfigObjectAddress),
          txb.pure(indexes),
          txb.pure(imageUrls),
          txb.pure(metadataUrls),
        ],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async updateMetadataTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    adminCapObjectAddress: string,
    thiefIndexConfigObjectAddress: string,
    indexes: bigint[],
    imageUrls: string[],
    metadataUrls: string[],
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::update_metadata`,
        arguments: [
          txb.pure(versionConfigObjectAddress),
          txb.pure(adminCapObjectAddress),
          txb.pure(thiefIndexConfigObjectAddress),
          txb.pure(indexes),
          txb.pure(imageUrls),
          txb.pure(metadataUrls),
        ],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async wihetlistMintTransaction(
    userAddress: string,
    versionConfigObjectAddress: string,
    mintConfigObjectAddress: string,
    thiefIndexConfigObjectAddress: string,
    userConfigObjectAddress: string,
    mintCapObjectAddress: string,
    paymentCoinObjectAddress: string,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::wihetlist_mint`,
        arguments: [
          txb.pure(versionConfigObjectAddress),
          txb.pure(mintConfigObjectAddress),
          txb.pure(thiefIndexConfigObjectAddress),
          txb.pure(userConfigObjectAddress),
          txb.pure(mintCapObjectAddress),
          txb.pure(paymentCoinObjectAddress),
        ],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, userAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async mintTransaction(
    userAddress: string,
    versionConfigObjectAddress: string,
    mintConfigObjectAddress: string,
    thiefIndexConfigObjectAddress: string,
    userConfigObjectAddress: string,
    mintCapObjectAddress: string,
    paymentCoinObjectAddress: string,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::mint`,
        arguments: [
          txb.pure(versionConfigObjectAddress),
          txb.pure(mintConfigObjectAddress),
          txb.pure(thiefIndexConfigObjectAddress),
          txb.pure(userConfigObjectAddress),
          txb.pure(mintCapObjectAddress),
          txb.pure(paymentCoinObjectAddress),
        ],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, userAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async adminMintTransaction(
    adminCapOwnerAddress: string,
    versionConfigObjectAddress: string,
    mintConfigObjectAddress: string,
    thiefIndexConfigObjectAddress: string,
    userConfigObjectAddress: string,
    mintCapObjectAddress: string,
    adminCapObjectAddress: string,
    thiefReceiver: string,
    feePayer: string | undefined = undefined,
    gasBudget: bigint | undefined = undefined,
    gasCoinObjectAddress: string | undefined = undefined
  ): Promise<TransactionBlock> {
    const txb = new TransactionBlock();
    txb.add(
      Transactions.MoveCall({
        target: `${this.publishedAtAddress}::sneaky_thief::admin_mint`,
        arguments: [
          txb.pure(versionConfigObjectAddress),
          txb.pure(mintConfigObjectAddress),
          txb.pure(thiefIndexConfigObjectAddress),
          txb.pure(userConfigObjectAddress),
          txb.pure(mintCapObjectAddress),
          txb.pure(adminCapObjectAddress),
          txb.pure(thiefReceiver),
        ],
        typeArguments: [],
      })
    );

    await this.addFeePayerAndGasBudgetInTransaction(txb, adminCapOwnerAddress, feePayer, gasBudget, gasCoinObjectAddress);

    return txb;
  }

  async getThiefObject(txDigest: string) {
    let objects: any[] = [];

    const objectType = `${this.packageAddress}::sneaky_thief::Thief`;

    const txObject: SuiTransactionBlockResponse = await this.provider.getTransactionBlock({
      digest: txDigest,
      options: {
        showEffects: true,
      },
    });

    if (txObject.effects?.status?.status === 'success' && txObject.effects?.created !== undefined) {
      for (let i = 0; i < txObject.effects.created.length; i++) {
        const objectDetails = await this.provider.getObject({
          id: txObject.effects?.created[i].reference.objectId,
          options: {
            showType: true,
          },
        });

        if (objectDetails !== undefined && objectDetails.data?.type === objectType) {
          objects.push({
            objectId: objectDetails.data.objectId,
            objectOwner: (txObject.effects.created[i].owner as any).AddressOwner,
          });
        }
      }
    }

    return objects;
  }
}
