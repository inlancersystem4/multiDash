import LayoutSideBar from "../component/LayoutSideBar"

const Layout = ({ children }) => {
    return (
        <main className="main--layout p-3">
            <LayoutSideBar />
            <div className="px-2.5 h-full">
                {children}
            </div>
        </main>
    )
}

export default Layout