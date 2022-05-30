import React from 'react';
import { menuItems } from "./menuItems";

import MenuItems from './MenuItemscomp'
const Main= () => {
    return (
        <div>
            
<div>

<nav>
   <ul className="menus">
    {menuItems.map((menu, index) => {
     return <MenuItems items={menu} key={index} />;
    })}
   </ul>
  </nav>



</div>


        </div>
    );
}

export default Main;