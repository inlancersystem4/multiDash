import { Link } from "react-router-dom"

const LayoutSideBar = () => {
    return (
        <aside className="main--asidebar">
            <ul className="space-y-2">
                <li>
                    <Link to='/' className="link active" title="go home page">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 19.499V14.999C14.25 14.8001 14.171 14.6093 14.0303 14.4686C13.8897 14.328 13.6989 14.249 13.5 14.249H10.5C10.3011 14.249 10.1103 14.328 9.96967 14.4686C9.82902 14.6093 9.75 14.8001 9.75 14.999V19.499C9.75 19.6979 9.67098 19.8887 9.53033 20.0293C9.38968 20.17 9.19891 20.249 9 20.249H4.5C4.30109 20.249 4.11032 20.17 3.96967 20.0293C3.82902 19.8887 3.75 19.6979 3.75 19.499V10.8271C3.75168 10.7233 3.77411 10.6209 3.81597 10.5259C3.85783 10.4309 3.91828 10.3453 3.99375 10.274L11.4937 3.45836C11.632 3.33187 11.8126 3.26172 12 3.26172C12.1874 3.26172 12.368 3.33187 12.5062 3.45836L20.0062 10.274C20.0817 10.3453 20.1422 10.4309 20.184 10.5259C20.2259 10.6209 20.2483 10.7233 20.25 10.8271V19.499C20.25 19.6979 20.171 19.8887 20.0303 20.0293C19.8897 20.17 19.6989 20.249 19.5 20.249H15C14.8011 20.249 14.6103 20.17 14.4697 20.0293C14.329 19.8887 14.25 19.6979 14.25 19.499Z" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Index</span>
                    </Link>
                </li>
                <li>
                    <Link to='/about' className="link" title="go about page">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12V3" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.7907 7.5L4.20947 16.5" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.15009 13.65C3.04777 13.106 2.99755 12.5535 3.00009 12C2.99891 10.1387 3.57545 8.32287 4.65016 6.80317C5.72487 5.28346 7.24477 4.13477 9.00009 3.51562V10.2656L3.15009 13.65Z" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.9998 3C13.5768 3.00018 15.1261 3.41474 16.4925 4.20215C17.8589 4.98957 18.9944 6.12219 19.7852 7.48658C20.5761 8.85096 20.9946 10.3992 20.9988 11.9762C21.0029 13.5533 20.5926 15.1037 19.809 16.4722C19.0253 17.8408 17.8958 18.9794 16.5336 19.774C15.1714 20.5686 13.6244 20.9914 12.0473 20.9999C10.4703 21.0084 8.91878 20.6024 7.54809 19.8225C6.17739 19.0426 5.03568 17.9163 4.2373 16.5563" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>about</span>
                    </Link>
                </li>
            </ul>
            <ul className="space-y-2">
                <li>
                    <Link to='/' className="link" title="logout of site">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 6.75C15.4926 6.75 16.5 5.74264 16.5 4.5C16.5 3.25736 15.4926 2.25 14.25 2.25C13.0074 2.25 12 3.25736 12 4.5C12 5.74264 13.0074 6.75 14.25 6.75Z" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.5 11.9993C4.5 11.9993 9.75 6.74934 12.75 9.52434C14.4281 11.0712 15.75 13.4993 19.5 13.4993" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.2344 9.13281L6.75 21.7516" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.25 21.7508V16.5008L10.2656 13.6602" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Log out</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}


export default LayoutSideBar