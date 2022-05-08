// @ts-nocheck
import React from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import { makeStyles, Avatar, IconButton, createStyles } from "@material-ui/core";
import fx from "./assets/fx.png";
import fist from "./assets/fist.png";

const unityContext = new UnityContext({
    loaderUrl: "buildUnity/Build/buildUnity.loader.js",
    dataUrl: "buildUnity/Build/buildUnity.data.unityweb",
    frameworkUrl: "buildUnity/Build/buildUnity.framework.js.unityweb",
    codeUrl: "buildUnity/Build/buildUnity.wasm.unityweb",
});

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        sizeBig: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
        sizeSmall: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
        sizeVerySmall: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
    }),
);

export const Battle = ({ showUnsync, isMobile, isMobileLandscape, elementals }) => {

    const classes = useStyles();

    return (
        <div style={{ fontFamily: "Alagard", color: "white", textAlign: "center" }}>

            {
                showUnsync &&
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Unity
                        unityContext={unityContext}
                        //matchWebGLToCanvasSize={true}
                        style={{ width: isMobile ? "100vw" : "80vw", height: isMobile ? "auto" : "80vh" }}
                    />
                </div>
            }


            <div className="panel" style={{ display: "flex", width: "100%", overflowY: "auto", backgroundColor: "#330033", position: "absolute", bottom: 0 }}>
                {elementals &&
                    elementals.map(({ metadata, id }) => (
                        <IconButton
                            key={id}
                            onClick={() => {
                                console.log(metadata)
                                let forge = (metadata.attributes[0].value + "." + metadata.attributes[6].value + "." + metadata.attributes[5].value + "." + metadata.attributes[7].value + "." + metadata.attributes[8].value + "." + metadata.attributes[9].value + "." + metadata.attributes[10].value);

                                unityContext.send("GameManager", "setCharacter", forge);
                            }}
                        >
                            <Avatar variant="rounded" src={(metadata.displayUri).replace('ipfs://', 'https://ipfs.io/ipfs/', 'IPFS')} alt={id} className={isMobileLandscape ? classes.sizeSmall : classes.sizeBig} />

                        </IconButton>
                    ))
                }
                {elementals.length === 0 &&
                    <div style={{ width: "99vw", overflow: "hidden", fontFamily: "Alagard", color: "white", textAlign: "center" }}>
                        <h1>
                            Looks like you dont have any elementals you can mint via fxhash or our page.
                        </h1>


                        <IconButton
                            onClick={() => {
                                window.open("https://www.fxhash.xyz/generative/slug/elementals-nft-battler-game-pieces", "_blank")
                            }}
                        >
                            <Avatar variant="rounded" src={fx} alt={"fxhash"} className={classes.sizeBig} />

                        </IconButton>

                        <IconButton
                            onClick={() => {
                                window.open("https://elementals.run/mint")
                            }}
                        >
                            <Avatar variant="rounded" src={fist} alt={"fist"} className={classes.sizeBig} />

                        </IconButton>
                    </div>
                }
            </div>
        </div>
    );
}