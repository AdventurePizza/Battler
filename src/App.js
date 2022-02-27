// @ts-nocheck
import "./App.css";
import React, { useEffect, useState } from "react";

//ui
import { Button } from "@material-ui/core";

//logic
import { DAppClient } from "@airgap/beacon-sdk";
import Unity, { UnityContext } from "react-unity-webgl";
//import { FirebaseContext } from "./firebaseContext";

const dAppClient = new DAppClient({ name: "Beacon Docs" });

const unityContext = new UnityContext({
  loaderUrl: "buildUnity/Build/buildUnity.loader.js",
  dataUrl: "buildUnity/Build/buildUnity.data",
  frameworkUrl: "buildUnity/Build/buildUnity.framework.js",
  codeUrl: "buildUnity/Build/buildUnity.wasm",
});

function App() {
  //const { getNfts } = useContext(FirebaseContext);
  const [activeAccount, setActiveAccount] = useState();
  const [synced, setSynced] = useState("sync");
  const [showUnsync, setShowUnsync] = useState(false);

  async function setCharacters(objktIds) {

    unityContext.send("GameManager", "setCharacters", objktIds);
  }

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
          "take": 20,
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
      let traits = result.map(({ issuer, metadata, assigned, id }) => ((issuer.author.id === "tz2DNkXjYmJwtYceizo3LwNVrqfrguWoqmBE" && issuer.name === "Batch 2 Test Collection" && assigned) ?
        (metadata.attributes[0].value + "." + metadata.attributes[1].value + "." + metadata.attributes[2].value) : null));
      traits = traits.join();
      setTimeout(setCharacters, 5000, traits);

      /*
      const result = data ? data.hic_et_nunc_token_holder : null;
      console.log(result)
      setCollections(result)
      let objktIds = result.map(({ token }) => (token.id))
      objktIds = objktIds.join();
      console.log(objktIds)
      setTimeout(setCharacters, 5000, objktIds);
      return result
      */
    }
    if (activeAccount) {
      //getNfts(activeAccount.address);
      fetchCollection(activeAccount.address);
    }

  }, [activeAccount]);


  useEffect(() => {
    async function getAcc() {
      setActiveAccount(await dAppClient.getActiveAccount());
      if (activeAccount) {
        setSynced(
          activeAccount.address.slice(0, 6) +
          "..." +
          activeAccount.address.slice(32, 36)
        );
        setShowUnsync(true);
      } else {
        setSynced("sync");
        setShowUnsync(false);
      }
    }
    getAcc();
  }, [activeAccount]);

  async function unsync() {
    setActiveAccount(await dAppClient.getActiveAccount());
    if (activeAccount) {
      // User already has account connected, everything is ready
      dAppClient.clearActiveAccount().then(async () => {
        setActiveAccount(await dAppClient.getActiveAccount());
        setSynced("sync");
        setShowUnsync(false);
      });
    }
  }

  async function sync() {
    setActiveAccount(await dAppClient.getActiveAccount());
    //Already connected
    if (activeAccount) {
      setSynced(activeAccount.address);
      setShowUnsync(true);
      return activeAccount;
    }
    // The user is not synced yet
    else {
      try {
        console.log("Requesting permissions...");
        const permissions = await dAppClient.requestPermissions();
        setActiveAccount(await dAppClient.getActiveAccount());
        console.log("Got permissions:", permissions.address);
        setSynced(permissions.address);
        setShowUnsync(true);

      } catch (error) {
        console.log("Got error:", error);
      }
    }
  }


  return (
    <div>
      <div
        className="top-left"
        style={{ position: "absolute", display: "flex", alignItems: "center", backgroundColor: "black", padding: 6, color: "white" }}
      >
        Elementals
      </div>


      <Unity
        unityContext={unityContext}
        //matchWebGLToCanvasSize={true}
        style={{ width: "100vw", height: "100vh" }}
      />

      <div
        className="top-right"
        style={{ position: "absolute", display: "flex", alignItems: "center", backgroundColor: "black", color: "white" }}
      >
        {showUnsync && (
          <Button
            size={"small"}
            title={"unsync"}
            onClick={() => {
              unsync();
            }}
            style={{ fontFamily: "Alagard", color: "white" }}
          >
            <u>unsync</u>{" "}
          </Button>
        )}

        {showUnsync && <div> | </div>}
        <Button
          title={"sync"}
          size={"small"}
          onClick={async () => {
            await sync();
          }}
          style={{ fontFamily: "Alagard", color: "white" }}
        >
          <u>{synced}</u>{" "}
        </Button>
      </div>
    </div>
  );
}

export default App;

const query_collection = `
query Query($id: String!, $take: Int, $skip: Int, $sort: UserCollectionSortInput, $filters: ObjktFilter) {
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
      offer {
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