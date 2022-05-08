// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Button, makeStyles, Avatar, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        sizeXlarge: {
            width: theme.spacing(33),
            height: theme.spacing(33),
        }
    }),
);

export const Wall = ({ isMobile }) => {
    const [alpha, setAlpha] = useState([]);
    const classes = useStyles();

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

        async function fetchCollection() {
            const { errors, data } = await fetchGraphQL(
                query_collection,
                'Query',
                {
                    "id": 12191,
                    "skip": 0,
                    "take": 40,
                    "filters": {},
                    "sort": {
                        "id": "ASC"
                    }
                }
            )
            if (errors) {
                console.error(errors)
            }
            console.log(data)
            const nfts = data ? data.generativeToken.objkts : null;

            console.log(nfts);
            setAlpha(nfts);
        }
        fetchCollection();
    }, []);

    return (
        <div style={{ fontFamily: "Alagard", color: "white", width: "80%", marginLeft: "10%" }}>
            <h1 style={{ fontSize: "2em" }}>
                Wall of Honor
            </h1>

            <h1 style={{ fontSize: "1em" }}>
                This page dedicated to the Alpha Pass owners for enabling Elementals development.
            </h1>

            <div style={{ display: "flex", maxWidth: "80vw", flexWrap: "wrap" }}>
                {alpha.map((el, index) => {
                    return <div >
                        <div style={{ textAlign: "center" }}>
                            <Avatar
                                style={{
                                    imageRendering: "pixelated",
                                    borderRadius: 0,
                                    margin: 10
                                }}
                                src={(el.metadata.displayUri).replace('ipfs://', 'https://ipfs.io/ipfs/')} alt={index.toString()} className={classes.sizeXlarge} />

                            <Button
                                onClick={async () => {
                                    window.open("https://assemblr.xyz/?profile=" + el.owner.id, "_blank");
                                }}
                                style={{
                                    fontFamily: "Alagard", color: "white"
                                }}
                            >
                                {el.owner.name ? el.owner.name : ((el.owner.id).slice(0, 10) +
                                    "..." +
                                    (el.owner.id).slice(28, 36))}
                            </Button>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    );
}

let query_collection = `
query Query($id: Float, $take: Int, $skip: Int, $sort: ObjktsSortInput, $featureFilters: [FeatureFilter!]) {
    generativeToken(id: $id) {
      id
      objkts(take: $take, skip: $skip, sort: $sort, featureFilters: $featureFilters) {
        id
        version
        iteration
        owner {
          id
          name
          avatarUri
          __typename
        }
        name
        metadata
        rarity
        activeListing {
          id
          version
          price
          __typename
        }
        __typename
      }
      __typename
    }
  }
  `