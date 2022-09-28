import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Wallet from "components/Wallet/index";

import styles from "styles/home.module.scss";

const Home: NextPage = () => {
    return (
        <div className="w_container">
            {/* <Wallet /> */}
            <div>12312</div>
            <div className="w_grid">
                <div className="w_grid_item">12</div>
                <div className="w_grid_item">12</div>
                <div className="w_grid_item">12</div>
            </div>
        </div>
    );
};

export default Home;
