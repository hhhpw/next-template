
import { FC } from "react";
import { Provider } from "react-redux";
import { wrapper } from "store";
import type { AppProps } from "next/app";
import Wallet from "components/Wallet/index";

import "antd/dist/antd.css";
import "styles/normalize.css";
import "styles/global.scss";
import "styles/antd.scss";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <Provider store={store}>
            <Wallet />
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;
