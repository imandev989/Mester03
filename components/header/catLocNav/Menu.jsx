import MenuItems from "./MenuItems";
import { getItems } from "./categorize.js";
import "./styles.css";


const Menu = () => {
  const menuItems = getItems();
  // console.log("MAIN", menuItems)
  return (
    <div className=" hidden lg:flex items-center cursor-pointer">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          
          // console.log("IMAN",menu);
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </div>
 
  );
};

export default Menu;
