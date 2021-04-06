import React, { useState } from "react";

import Sidebar from "components/layouts/Sidebar";
import BaseHeader from "components/layouts/BaseHeader";

import "./styles.scss";

const MainLayout = ({ title, children }) => {

    return <div className="desktop-main-layout-container">
                <Sidebar></Sidebar>
                <div className='right-layout-container'>
                    <BaseHeader title={title}></BaseHeader>
                    <div className="right-layout-content">
                        {children}
                    </div>
                </div>
            </div>
}

export default MainLayout;





