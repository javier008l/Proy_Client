import React from "react";
import { Button,Icon } from "antd";

import "./MenuTop.scss";

export default function Menu(props) {
    const { menuCollapsed, setMenuCollapsed} = props;

    return (
<div className="menu-top">
    <div className="menu-top__left">
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
            <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
    </div>
    <div className="menu-top__right">
        <h3>Logout</h3>
    </div>
</div>

    );
}