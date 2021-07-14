import { Avatar } from "@material-ui/core";
import React from "react";

function HomeOption({ Icon, title, avatar }) {
    return (
        <div className="home__option">
            {Icon && <Icon className="home__icon" />}
            {title && <h3>{title}</h3>}
            {avatar && <Avatar src={avatar} />}
        </div>
    );
}

export default HomeOption;
