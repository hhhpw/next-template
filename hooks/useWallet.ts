import { notification } from "antd";
import { message } from "antd";
import { useAppDispatch } from "hooks/useRedux";
import { setAccount, setNetWork } from "store/wallet";

const useWallet = () => {

    const dispatch = useAppDispatch();

    const isInstalled = (): boolean => {
        const isMartianWalletInstalled = window.martian;
        if (!isMartianWalletInstalled) {
            notification.error({
                message: "请下载插件钱包",
            });
            return false;
        }
        window.martian.onNetworkChange((name: string) => {
            dispatch(setNetWork(name));
        });

        window.martian.onAccountChange((address: string) => {
            dispatch(setAccount(address));
        });
        return true;
    };

    const login = async () => {
        if (isInstalled()) {
            window.martian.connect()
                .then((res: any) => {
                    dispatch(setAccount(res.address));
                    getNetwork();
                })
                .catch((e: any) => {
                    message.error(e);
                });
        }
    };

    const isConnected = async () => {
        const res = await window.martian.isConnected();
        return res;
    };

    const getNetwork = async () => {
        const network = await window.martian.network(); // Testnet or Devnet or Custom
        dispatch(setNetWork(network));
    };

    return {
        login,
        isConnected,
        getNetwork
    };

};

export default useWallet;
