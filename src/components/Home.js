import React from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeOption from "./HomeOption";
import styled from "styled-components";

const HomeWrapper = styled.div`
    * {
        margin: 0;
    }
    .home__optionsContainer {
        display: flex;
    }
    .home__option {
      margin: 0 15px;
        text-align: center;
    }
`;

const Home = () => {
    return (
        <div>
            <h2>I am from Home Component</h2>
            <HomeWrapper>
                <div className="home__optionsContainer">
                    <HomeOption Icon={AccessAlarmIcon} title="Home" />
                    <HomeOption Icon={AccountCircleIcon} title="About" />
                    <HomeOption avatar="https://yt3.ggpht.com/ytc/AKedOLS3TL9Kjy_Okt4lTdpC-W_mFIsQ8ywpY-vxkXMFrUE=s48-c-k-c0x00ffffff-no-rj" />
                </div>
            </HomeWrapper>
        </div>
    );
};

export default Home;
