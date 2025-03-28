import { useState } from 'react';
import './Drawer.css'

interface DrawerProps {
    drawerVisible: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ drawerVisible }) => {
    const [activeItem, setActiveItem] = useState("");

    const handleItemClick = (itemName: any) => {
        setActiveItem(itemName);
    };
    return (
        <div>
            <div className='logoSection' style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingLeft: drawerVisible ? 32 : 0, paddingBottom: drawerVisible ? '' : 8 }}>
                <img src="src/assets/increase.png" alt="" className="logo" />
                <p className="companyName" style={{ display: drawerVisible ? "flex" : "none" }}>
                    Datta Able
                </p>
            </div>
            <p className="drawerHead" style={{ display: drawerVisible ? "flex" : "none", paddingLeft: 32 }}>NAVIGATION</p>

            <div className={`ItemSection ${activeItem === "Dashboard" ? "active" : ""}`}
                onClick={() => handleItemClick("Dashboard")} style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/home.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <div className='drawerItem' style={{ display: drawerVisible ? "flex" : "none" }}>
                    Dashboard
                </div>
            </div>
            <p className="drawerHead" style={{ display: drawerVisible ? "flex" : "none", paddingLeft: 32 }}>UI COMPONENTS</p>
            <div className={`ItemSection ${activeItem === "Color" ? "active" : ""}`}
                onClick={() => handleItemClick("Color")} style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/edit.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <p className='drawerItem' style={{ display: drawerVisible ? "flex" : "none" }}>
                    Color
                </p>
            </div>
            <div className={`ItemSection ${activeItem === "Typography" ? "active" : ""}`}
                onClick={() => handleItemClick("Typography")}
                style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/text.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <p className="drawerItem" style={{ display: drawerVisible ? "flex" : "none" }}>
                    Typography
                </p>
            </div>
            <div className={`ItemSection ${activeItem === "Icons" ? "active" : ""}`}
                onClick={() => handleItemClick("Icons")}
                style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/feather-pen.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <p className="drawerItem" style={{ display: drawerVisible ? "flex" : "none" }}
                    onClick={() => handleItemClick("Icons")}>
                    Icons
                </p>
            </div>
            <p className="drawerHead" style={{ display: drawerVisible ? "flex" : "none", paddingLeft: 32 }}>PAGES</p>
            <div className={`ItemSection ${activeItem === "Login" ? "active" : ""}`}
                onClick={() => handleItemClick("Login")}
                style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/lock.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <p className="drawerItem" style={{ display: drawerVisible ? "flex" : "none" }}>
                    Login
                </p>
            </div>
            <div className={`ItemSection ${activeItem === "Register" ? "active" : ""}`}
                onClick={() => handleItemClick("Register")}
                style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/user.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <p className="drawerItem" style={{ display: drawerVisible ? "flex" : "none" }}>
                    Register
                </p>
            </div>

            <p className="drawerHead" style={{ display: drawerVisible ? "flex" : "none", paddingLeft: 32 }}>OTHERS</p>
            <div className={`ItemSection ${activeItem === "Menu levels" ? "active" : ""}`}
                onClick={() => handleItemClick("Menu levels")}
                style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/align-right.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <p className="drawerItem" style={{ display: drawerVisible ? "flex" : "none" }}>
                    Menu levels
                </p>
            </div>
            <div className={`ItemSection ${activeItem === "Sample Page" ? "active" : ""}`}
                onClick={() => handleItemClick("Sample Page")} style={{ justifyContent: drawerVisible ? 'left' : 'center', paddingTop: drawerVisible ? '' : 8, paddingBottom: drawerVisible ? '' : 8 }}>
                <img className="drawericon" src="src/assets/left.png" alt="" style={{ paddingLeft: drawerVisible ? 32 : 0 }} />
                <p className="drawerItem" style={{ display: drawerVisible ? "flex" : "none" }}>
                    Sample Page
                </p>
            </div>
        </div>
    );
};
export default Drawer;