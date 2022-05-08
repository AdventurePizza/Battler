// @ts-nocheck
import React from 'react';
import graph from "./assets/graph.png";
import meditate from "./assets/meditate.gif";


export const About = () => {



    return (
        <div style={{ fontFamily: "Alagard", color: "white", textAlign: "center" }}>
            <h1 style={{ fontSize: "4em" }}>
                About Elementals
            </h1>

            <div className="pixelart" style={{ textAlign: "center", width: "100%", imageRendering: "pixelated" }}>
                {
                    <img src={meditate} alt="meditate" width="50%" />
                }
            </div>

            <p style={{ fontSize: "1.8em", paddingInline: "10%" }}>
                Elementals is a self funding project and aims to grow as a Decentralized Autonomous Organization (DAO). In this section we will explain our vision, decision making and motivations to make the project more transparent and hopefully convince you to be part of the team
            </p>

            <p style={{ fontSize: "1.8em", paddingInline: "10%" }}>
                In early stages the organization process is mainly centralized and there are good reasons for that. To establish a decentralised system numerous contributors are necessary and one way of doing it is to catch people's attention. To gain people's interests we came up with the genesis release of the Elementals, which will enable us to share our vision with new contributors in an easier way.
            </p>

            <div style={{ textAlign: "center", width: "100%" }}>
                {
                    <img src={graph} alt="graph" width="50%" />
                }
            </div>

            <p style={{ fontSize: "1.8em", paddingInline: "10%" }}>
                At the genesis stage the main capital source of Elemental DAO is NFT sales. Which will be used on Elementals development and release of new content, and new content will make further NFT sales possible.
            </p>

            <p style={{ fontSize: "1.8em", paddingInline: "10%" }}>
                Check our <a href="https://app.dework.xyz/elementals/overview" target="_blank" rel="noreferrer">Dework </a> to view bounties and ways to participate.
            </p>
            <p style={{ fontSize: "1.8em", paddingInline: "10%" }}>
                Join us in <a href="https://discord.gg/MezCYs4gDH" target="_blank" rel="noreferrer" >Discord </a>
            </p>
            <p style={{ fontSize: "1.8em", paddingInline: "10%" }}>
                Check our other products <a href="https://adventurenetworks.net/#/" target="_blank" rel="noreferrer">Adventure Networks </a>
            </p>
        </div>
    );
}
