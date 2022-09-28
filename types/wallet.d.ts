export interface IWalletInfo {
    address: string;
    method: string;
    status: number;
    publicKey: string;
}

export enum ENetWork {
    Testnet = "Testnet",
    Custom = "Custom",
    Devnet = "Devnet"
}
