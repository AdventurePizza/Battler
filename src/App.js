
import { DAppClient } from "@airgap/beacon-sdk";
import React, { useEffect, useState } from 'react';
import { Button, IconButton, AppBar, Box, Toolbar, Typography, Menu, Container, MenuItem } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';

import { Battle } from "./Battle";
import { Collection } from "./Collection";
import { Mint } from "./Mint";
import { Wall } from "./Wall"
import { About } from "./About";
import { Alpha } from "./Alpha";
import { News } from "./News";

import { useNavigate } from "react-router-dom";

const dAppClient = new DAppClient({ name: "Beacon Docs" });



const pages = ['Battle', 'Collection', 'Mint', 'Wall of Honor', "About", "News"];

const App = ({ Tab }) => {
  const navigate = useNavigate();
  const [activeAccount, setActiveAccount] = useState();
  const [synced, setSynced] = useState("sync");
  const [showUnsync, setShowUnsync] = useState(false);
  const isMobile = window.innerWidth <= 500;
  const isMobileLandscape = window.innerHeight <= 500;

  const [elementals, setElementals] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [alpha, setAlpha] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    console.log(event.currentTarget)
    setAnchorElNav(null);
  };


  useEffect(() => {
    console.log("tab " + Tab)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      const nfts = data ? data.user.objkts : null;
      console.log(nfts)
      let filtered = nfts.filter(function (nft) {
        return nft.issuer.author.id === "tz2HDnLqawEFd863vw8SvE4h1X8Cw6g1Xaqs" && nft.issuer.name === "Elementals, NFT Battler, Game Pieces" && nft.assigned
      })

      console.log(filtered);
      setElementals(filtered);


      let alphaPass = nfts.filter(function (nft) {
        return nft.issuer.author.id === "tz2HDnLqawEFd863vw8SvE4h1X8Cw6g1Xaqs" && nft.issuer.name === "Elementals, NFT Battler, Alpha Pass" && nft.assigned
      })

      console.log(alphaPass.length)

      if (alphaPass.length > 0) {
        setAlpha(true);
      } else {
        setAlpha(false);
      }
    }
    if (activeAccount)
      fetchCollection(activeAccount.address);

  }, [activeAccount]);


  return (
    <div>
      <AppBar position="static" style={{ background: "#330033" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              style={{ fontFamily: "Alagard", color: "white" }}
            >
              Elementals
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} >
                    <Typography >{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-around" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    navigate("/" + (page.toLocaleLowerCase()).replace(/\s/g, ''));
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  style={{ fontFamily: "Alagard", color: "white" }}
                >
                  {page}
                </Button>
              ))}
            </Box>



            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>

              {alpha &&
                <Button
                  size={"large"}
                  title={"Alpha Pass"}
                  onClick={() => {
                    //open alpha page,
                    navigate("/alpha");
                  }}
                  style={{ fontFamily: "Alagard", color: "gold", textTransform: "none" }}
                >
                  <b>α</b>{" "}
                </Button>
              }
              {alpha && <div> | </div>}
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
                onClick={
                  async () => {
                    if (!showUnsync)
                      await sync();
                    else {
                      window.open("https://assemblr.xyz/?profile=" + activeAccount.address, "_blank");
                    }
                  }}
                style={{ fontFamily: "Alagard", color: "white" }}
              >
                <u>{synced}</u>{" "}
              </Button>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>

      {
        Tab === pages[0] &&
        <Battle
          showUnsync={showUnsync}
          isMobile={isMobile}
          isMobileLandscape={isMobileLandscape}
          elementals={elementals}
        />
      }
      {
        Tab === pages[1] &&
        <Collection
          activeAccount={activeAccount}
        />
      }
      {
        Tab === pages[2] &&
        <Mint
          activeAccount={activeAccount}
          showUnsync={showUnsync}
          isMobile={isMobile}
        />
      }
      {
        Tab === pages[3] &&
        <Wall
          isMobile={isMobile}
        />
      }
      {
        Tab === pages[4] &&
        <About />
      }
      {
        Tab === pages[5] &&
        <News />
      }
      {
        Tab === "Alpha" && alpha &&
        <Alpha />
      }
    </div >

  );
}
export default App;


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

