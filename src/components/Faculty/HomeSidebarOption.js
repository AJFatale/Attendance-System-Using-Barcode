import React from 'react';
import './HomeSidebarOption.css';

function HomeSidebarOption({ title, Icon}) {
    return (
        <div className="homeSidebarOption">
            {Icon && <Icon className="homeSidebarOption_icon" />}
            {Icon ? <h4>{title}</h4>:<p>{title}</p>}
        </div>
    );
}

export default HomeSidebarOption;
