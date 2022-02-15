import { Link } from "react-router-dom";

const SideBarView = () => {
    return (
        <section>
            <h2>About</h2>
            <ul>
                <li>
                    <Link to="/code-algos/">My tech stack</Link>
                </li>
                <li>
                    <Link to="/code-algos/one" activeclassname="active">View one</Link>
                </li>
            </ul>
        </section>
    )
}

export default SideBarView;