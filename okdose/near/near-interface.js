export class NearInterface {
  constructor({ walletToUse }) {
    this.wallet = walletToUse;
  }

  async viewMethod(contractId, method, args = {}) {
    return await this.wallet.viewMethod({ contractId: contractId, method: method, args: args});
  }
}
