// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { makeStyles, Avatar, IconButton, createStyles } from "@material-ui/core";
import metal from "./assets/images/metal.gif";
import fire from "./assets/images/fire.gif";
import earth from "./assets/images/earth.gif";
import water from "./assets/images/water.gif";
import wind from "./assets/images/wind.gif";
import demon from "./assets/images/demon.gif";
import fireSkull from "./assets/images/fireSkull.gif";
import ghost from "./assets/images/ghost.gif";
import hellBeast from "./assets/images/hellBeast.gif";
import nightmare from "./assets/images/nightmare.gif";
import slime from "./assets/images/slime.gif";
import knight from "./assets/images/knight.gif";
import monk from "./assets/images/monk.gif";
import metalkeeper from "./assets/images/metalkeeper.gif";
import priestess from "./assets/images/priestess.gif";
import hashashin from "./assets/images/hashashin.gif";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        sizeXlarge: {
            width: theme.spacing(22),
            height: theme.spacing(22),
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
        sizeBuilding: {
            width: theme.spacing(14),
            height: theme.spacing(27),
        },
    }),
);

export const Collection = ({ activeAccount }) => {
    const classes = useStyles();

    const [elementals, setElementals] = useState([
        { img: knight, owned: false },
        { img: metalkeeper, owned: false },
        { img: monk, owned: false },
        { img: priestess, owned: false },
        { img: hashashin, owned: false },
        { img: demon, owned: false },
        { img: fireSkull, owned: false },
        { img: slime, owned: false },
        { img: ghost, owned: false },
        { img: hellBeast, owned: false },
        { img: nightmare, owned: false },
    ]);

    const [transformedEls, setTransformedEls] = useState([
        { img: metal, owned: false },
        { img: fire, owned: false },
        { img: earth, owned: false },
        { img: water, owned: false },
        { img: wind, owned: false },
    ]);

    const [items, setItems] = useState(new Array(228).fill(false))
    const [companions, setCompanions] = useState(
        [
            { img: "Adept Necromancer", owned: false },
            { img: "Corrupted Treant", owned: false },
            { img: "Earth Minion", owned: false },
            { img: "Expert Druid", owned: false },
            { img: "Fire Minion", owned: false },
            { img: "Fluttering Pixie", owned: false },
            { img: "Gelatinous Cube", owned: false },
            { img: "Glowing Wisp", owned: false },
            { img: "Grandmaster Warlock", owned: false },
            { img: "Grizzled Treant", owned: false },
            { img: "Ice Golem", owned: false },
            { img: "Iron Golem", owned: false },
            { img: "Skilled Battle Mage", owned: false },
            { img: "Venomous Chimera", owned: false },
            { img: "Vile Witch", owned: false },
            { img: "Water Minion", owned: false },
        ]
    )

    const [buildings, setBuildings] = useState(
        [
            { img: "Obelisk Active", owned: false },
            { img: "Obelisk", owned: false },
            { img: "Flying Obelisk", owned: false },
            { img: "Bloodmoon Tower", owned: false },
            { img: "Blue Tower", owned: false },
            { img: "Red Tower", owned: false },
            { img: "Bluefire Totem", owned: false },
            { img: "Redfire Totem", owned: false },
            { img: "Lightning Totem", owned: false },
            { img: "Green Skull Tower", owned: false },
            { img: "Purple Skull Tower", owned: false },
        ]
    )




    useEffect(() => {
        async function fetchGraphQL(operationsDoc, operationName, variables) {
            let result = await fetch('https://api.fxhash.xyz/graphql', {
                method: 'POST',
                body: JSON.stringify({
                    query: operationsDoc,
                    variables: variables,
                    operationName: operationName,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            var ress = await result.json();
            return ress;
        }

        async function fetchCollection(addr) {
            const { errors, data } = await fetchGraphQL(
                query_collection,
                'Query',
                {
                    "id": addr,
                    "skip": 0,
                    "take": 40,
                    "filters": {},
                    "sort": {
                        "id": "DESC"
                    }
                }
            )
            if (errors) {
                console.error(errors)
            }
            console.log(data)
            const result = data ? data.user.objkts : null;
            let gamePieces = result.map(({ issuer, metadata, assigned, id }) => ((issuer.author.id === "tz2HDnLqawEFd863vw8SvE4h1X8Cw6g1Xaqs" && 'Elementals, NFT Battler, Game Pieces' && assigned) ?
                {
                    elemental: (metadata.attributes[0].value),
                    challenger: (metadata.attributes[1].value),
                    companion: (metadata.attributes[2].value),
                    item: (metadata.attributes[3].value),
                } : null));

            let temp = elementals


            let tempItems = new Array(228).fill(false);
            let tempCompanions = companions;


            for (let index = 0; index < gamePieces.length; index++) {
                if (gamePieces[index]) {
                    if (gamePieces[index].elemental === "Knight") {
                        temp[0].owned = true;
                    } else if (gamePieces[index].elemental === "Bladekeeper") {
                        temp[1].owned = true;
                    } else if (gamePieces[index].elemental === "Monk") {
                        temp[2].owned = true;
                    } else if (gamePieces[index].elemental === "Priestess") {
                        temp[3].owned = true;
                    } else if (gamePieces[index].elemental === "Hashashin") {
                        temp[4].owned = true;
                    } else if (gamePieces[index].challenger === "Demon") {
                        temp[5].owned = true;
                    } else if (gamePieces[index].challenger === "Fire Skull") {
                        temp[6].owned = true;
                    } else if (gamePieces[index].challenger === "Slime") {
                        temp[7].owned = true;
                    } else if (gamePieces[index].challenger === "Ghost") {
                        temp[8].owned = true;
                    } else if (gamePieces[index].challenger === "Hell Beast") {
                        temp[9].owned = true;
                    } else if (gamePieces[index].challenger === "Nightmare") {
                        temp[10].owned = true;
                    }
                    tempItems[gamePieces[index].item - 1] = true;

                    for (let j = 0; j < companions.length; j++) {
                        if (gamePieces[index].companion === companions[j].img) {
                            tempCompanions[j].owned = true;
                        }
                    }
                }
            }

            setElementals(temp);
            setItems(tempItems);
            setCompanions(tempCompanions);

            let tempTransformedEls = transformedEls;

            let AlphaPass = result.map(({ issuer, metadata, assigned, id }) => ((issuer.author.id === "tz2HDnLqawEFd863vw8SvE4h1X8Cw6g1Xaqs" && 'Elementals, NFT Battler, Alpha Pass' && assigned) ?
                {
                    elemental: (metadata.attributes[0].value),
                    building: (metadata.attributes[2].value),
                } : null));

            let tempBuildings = buildings;
            for (let index = 0; index < AlphaPass.length; index++) {
                if (AlphaPass[index]) {
                    console.log(AlphaPass[index].elemental === "Water Elemental")
                    if (AlphaPass[index].elemental === "Metal Elemental") {
                        tempTransformedEls[0].owned = true;
                    } else if (AlphaPass[index].elemental === "Fire Elemental") {
                        tempTransformedEls[1].owned = true;
                    } else if (AlphaPass[index].elemental === "Earth Elemental") {
                        tempTransformedEls[2].owned = true;
                    } else if (AlphaPass[index].elemental === "Water Elemental") {
                        tempTransformedEls[3].owned = true;
                    } else if (AlphaPass[index].elemental === "Wind Elemental") {
                        tempTransformedEls[4].owned = true;
                    }

                    for (let j = 0; j < buildings.length; j++) {
                        if (AlphaPass[index].building === buildings[j].img) {
                            tempBuildings[j].owned = true;
                        }
                    }
                }
            }

            setTransformedEls(tempTransformedEls);
            setBuildings(tempBuildings);

        }
        if (activeAccount)
            fetchCollection(activeAccount.address);

    }, [activeAccount, transformedEls, elementals, items, companions, buildings]);


    return (
        <div>
            <div
                style={{ fontFamily: "Alagard", color: "white", width: "80%", marginInline: "10%" }}
            >


                <h2>Alpha Pass</h2>
                <div>
                    {transformedEls.map((el, index) => {
                        return <IconButton
                            key={index.toString()}

                            style={{ borderRadius: 0 }}
                        >
                            <Avatar
                                style={{
                                    imageRendering: "pixelated",
                                    filter: el.owned ? "grayscale(0)" : "grayscale(1)",
                                    borderRadius: 0
                                }}
                                src={el.img} alt={index.toString()} className={classes.sizeXlarge} />

                        </IconButton>
                    })
                    }
                </div>
                <h2>Alpha Pass Items</h2>
                <div>
                    {buildings.map((el, index) => {
                        return <IconButton
                            key={index.toString()}

                            style={{ borderRadius: 0 }}
                        >
                            <Avatar
                                style={{
                                    imageRendering: "pixelated",
                                    filter: el.owned ? "grayscale(0)" : "grayscale(1)",
                                    borderRadius: 0
                                }}
                                src={(HashToURL("ipfs://QmYSkfSizXkfV4tfkZrnYpXkTYa95jPUzc1NfbirXYiDNA", 'IPFS') + `/${el.img}.gif`).replace(/\s/g, '')} alt={index.toString()} className={classes.sizeBuilding} />

                        </IconButton>
                    })
                    }
                </div>
                <h2>Game Pieces</h2>
                <div>
                    {elementals.map((el, index) => {
                        return <IconButton
                            key={index.toString()}
                            style={{ borderRadius: 0, }}
                        >
                            <Avatar
                                style={{
                                    imageRendering: "pixelated",
                                    filter: el.owned ? "grayscale(0)" : "grayscale(1)",
                                    borderRadius: 0
                                }}
                                src={el.img} alt={index.toString()} className={classes.sizeXlarge} />

                        </IconButton>
                    })
                    }
                </div>

                <h2>Companions</h2>
                <div>
                    {companions.map((comp) => {
                        return <IconButton
                            key={comp.img}
                            style={{ borderRadius: 0 }}
                        >
                            <Avatar
                                style={{
                                    imageRendering: "pixelated",
                                    filter: comp.owned ? "grayscale(0)" : "grayscale(1)",
                                    borderRadius: 0
                                }}
                                src={(HashToURL("ipfs://QmSarDqHQv2d1jfEszAi8Amv2b8PWghJA1EmAeef4NQt5s", 'IPFS') + `/${comp.img}.gif`).replace(/\s/g, '')} alt={comp.img} className={classes.sizeBig} />
                        </IconButton>
                    })
                    }
                </div>

                <h2>Game Piece Items</h2>
                <div>
                    {items.map((item, index) => {
                        return <IconButton
                            key={index}
                            style={{
                                borderRadius: 0,
                                filter: item ? "grayscale(0)" : "grayscale(1)",
                            }}
                        >
                            <Avatar
                                style={{
                                    imageRendering: "pixelated",
                                    borderRadius: 0
                                }}
                                src={(HashToURL("ipfs://QmSarDqHQv2d1jfEszAi8Amv2b8PWghJA1EmAeef4NQt5s", 'IPFS') + `/item${index + 1}.png`).replace(/\s/g, '')} alt={index.toString()} className={classes.sizeBig} />
                        </IconButton>
                    })
                    }
                </div>
            </div>

        </div>
    );
}


const query_collection = `
query Query($id: String!, $take: Int, $skip: Int, $sort: ObjktsSortInput, $filters: ObjktFilter) {
    user(id: $id) {
      id
      objkts(take: $take, skip: $skip, sort: $sort, filters: $filters) {
        id
        assigned
        rarity
        iteration
        owner {
          id
          name
          flag
          avatarUri
          __typename
        }
        issuer {
          name
          flag
          author {
            id
            name
            flag
            avatarUri
            __typename
          }
          __typename
        }
        name
        metadata
        createdAt
        offers {
          id
          price
          __typename
        }
        __typename
      }
      __typename
    }
  }
  
`
const HashToURL = (hash, type) => {
    // when on preview the hash might be undefined.
    // its safe to return empty string as whatever called HashToURL is not going to be used
    // artifactUri or displayUri
    if (hash === undefined) {
        return ''
    }

    switch (type) {
        case 'HIC':
            return hash.replace('ipfs://', 'https://pinata.hicetnunc.xyz/ipfs/')
        case 'CLOUDFLARE':
            return hash.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
        case 'PINATA':
            return hash.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/')
        case 'IPFS':
            return hash.replace('ipfs://', 'https://ipfs.io/ipfs/')
        case 'DWEB':
            return hash.replace('ipfs://', 'http://dweb.link/ipfs/')
        default:
            console.error('please specify type')
            return hash
    }
}