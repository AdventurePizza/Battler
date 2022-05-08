// @ts-nocheck
import { Button } from "@material-ui/core";

import { TezosToolkit } from '@taquito/taquito'

import {
    BeaconWallet
} from '@taquito/beacon-wallet'


const Tezos = new TezosToolkit('https://mainnet.api.tez.ie')
const wallet = new BeaconWallet({
    name: 'hicetnunc.xyz',
    preferblackNetwork: 'mainnet',
})
Tezos.setWalletProvider(wallet)


export const Mint = ({ showUnsync, isMobile }) => {

    return (
        <div>
            <div
                style={{ fontFamily: "Alagard", color: "white", display: isMobile ? "grid" : "flex" }}
            >

                {showUnsync &&
                    <>
                        <div style={{ width: isMobile ? "100&" : "50%" }}>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 20, fontSize: "1.6em" }}>
                                <h>Alpha Pass</h>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>

                                <iframe
                                    alt="Game Pieces"
                                    title="Game Pieces"
                                    width={isMobile ? window.innerWidth : "500"}
                                    height={isMobile ? window.innerWidth : "500"}
                                    src="https://ipfs.io/ipfs/QmYSkfSizXkfV4tfkZrnYpXkTYa95jPUzc1NfbirXYiDNA/?fxhash=oodrd1zJkMucsRLrjGjHFTPLVJiV7ctbFxp5GKuiFqQwKZoJEkV"
                                    sandbox="allow-scripts allow-same-origin"
                                    allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking;">
                                </iframe>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {

                                        Tezos.wallet
                                            .at('KT1BJC12dG17CVvPKJ1VYaNnaT5mzfnUTwXv')
                                            .then((contract) => {
                                                console.log(`collecting it ....`);
                                                return contract.methods.mint(12191).send({
                                                    amount: 36000000,
                                                    mutez: true,
                                                    storageLimit: 650,
                                                });
                                            })
                                            .then((op) => {
                                                console.log(`Waiting for ${op.hash} to be confirmed...`);
                                                return op.confirmation(3).then(() => op.hash);
                                            })
                                            .then((hash) => {
                                                console.log(`Operation injected: https://tzstats.com/${hash}`);
                                            })
                                            .catch((error) => {
                                                console.log(`Error: ${JSON.stringify(error, null, 2)}`);
                                            });

                                    }}
                                >
                                    Mint Alpha Pass 36 ꜩ
                                </Button>


                            </div>
                            <div style={{ display: "flex", textAlign: "center", marginTop: 30, width: "80%", marginLeft: "10%" }}>
                                By Minting an Elementals Alpha Pass, you are entitled to future Elementals DAO benefits which include DAO membership, early access, unique community and capital distributions

                                Elementals is a self funding project and aims to grow as a Decentralized Autonomous Organization(DAO). With minting you support further development of the project, new content, growth of the community
                            </div>
                        </div>

                        <div style={{ width: isMobile ? "100&" : "50%" }}>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 20, fontSize: "1.6em" }}>
                                <h>Game Pieces</h>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>

                                <iframe
                                    alt="Game Pieces"
                                    title="Game Pieces"
                                    width={isMobile ? window.innerWidth : "500"}
                                    height={isMobile ? window.innerWidth : "500"}
                                    src="https://ipfs.io/ipfs/QmSarDqHQv2d1jfEszAi8Amv2b8PWghJA1EmAeef4NQt5s/?fxhash=ooWoY61u2r3uev2j5M4g3BnSVDKY86Pk6jGzWGmbmfbBQ1ZarQj"
                                    sandbox="allow-scripts allow-same-origin"
                                    allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking;">
                                </iframe>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {

                                        Tezos.wallet
                                            .at('KT1BJC12dG17CVvPKJ1VYaNnaT5mzfnUTwXv')
                                            .then((contract) => {
                                                console.log(`collecting it ....`);
                                                return contract.methods.mint(12204).send({
                                                    amount: 1000000,
                                                    mutez: true,
                                                    storageLimit: 650,
                                                });
                                            })
                                            .then((op) => {
                                                console.log(`Waiting for ${op.hash} to be confirmed...`);
                                                return op.confirmation(3).then(() => op.hash);
                                            })
                                            .then((hash) => {
                                                console.log(`Operation injected: https://tzstats.com/${hash}`);
                                            })
                                            .catch((error) => {
                                                console.log(`Error: ${JSON.stringify(error, null, 2)}`);
                                            });

                                    }}
                                >
                                    Mint Game Piece 1 ꜩ
                                </Button>
                            </div>
                            <div style={{ display: "flex", textAlign: "center", marginTop: 30, width: "80%", marginLeft: "10%" }}>
                                Mint your first Elemental Game Piece, 4 Playable Elementals, Fire Knight, Ground Monk, Water Priestess, Wind Hashashin and a myriad of collectible game pieces for the future. Land a boss enemy, a unique companion or one of the many items you'll need in the future.

                                As part of the mint process, you'll receive attack and health attributes for each Elemental which vary damage, defend and determine the strength and health of your Elemental.
                            </div>
                        </div>
                    </>
                }
            </div >
        </div>
    );
}
