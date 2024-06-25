import {Navlink , Outlet} from "react-router-dom";
export const AdminLayout = () => {
return <>
<header>
    <div className = "container">
        <nav>
            <ul>
                <li> <Navlink to = "/admin/users">users</Navlink></li>
                <li><Navlink to = "/admin/contacts">contacts</Navlink></li>
                <li><Navlink to = "/admin/services">services</Navlink></li>
                <li><Navlink to = "/admin/Home">Home</Navlink></li>
                
            </ul>
        </nav>
    </div>
    </header>
    <Outlet/>
    </>
};