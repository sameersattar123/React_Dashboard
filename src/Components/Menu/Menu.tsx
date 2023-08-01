import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <>
      <div className="Menu">
        {menu.map((item) => {
          return (
            <div className="item" key={item.id}>
              <span className="title">{item.title}</span>
              {item.listItems.map((ListItem) => {
                return (
                  <Link to={ListItem.url} className="listItem" key={ListItem.id}>
                    <img src={ListItem.icon} alt="" />
                    <span className="listItemTitle">{ListItem.title}</span>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
