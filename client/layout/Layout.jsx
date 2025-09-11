import { Outlet } from "react-router-dom";


function Layout(){
    return(
        <div>
            <h1>This is the layout</h1>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
export default Layout;