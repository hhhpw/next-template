
import { useEffect, useState } from "react";
import useWallet from "hooks/useWallet";
import { useAppSelector } from "hooks/useRedux";
import cs from "classnames";

import styles from "./index.module.scss";

const Wallet = () => {
    const [formatAccount, setFormatAccount] = useState("");
    const { login, isConnected } = useWallet();
    const account = useAppSelector((state) => state.wallet.account);
    const netWork = useAppSelector((state) => state.wallet.netWork);

    useEffect(() => {
        if (account) {
            setFormatAccount(`${account.slice(0, 3)}...${account.slice(-3)}`);
        }
    }, [account]);

    const handleLogin = () => {
        if (account) {
            return;
        }
        login();
    };

    const renderBtn = () => {
        if (formatAccount) {
            return <span>{formatAccount}</span>;
        }
        return <span>连接钱包</span>;
    };

    return (
        <div className={styles.wallet_wrap}>
            <div
                style={{ width: "130px" }}
                className={cs("w_button", {
                    "active": formatAccount ? true : false
                })}
                onClick={handleLogin}
            >
                {renderBtn()}
            </div>
        </div>
    );
};

export default Wallet;
