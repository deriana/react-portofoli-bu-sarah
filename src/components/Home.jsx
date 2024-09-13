import "./home.css"
import Nav from "./Nav";

const Home = () => {

    return (
        <div className="home">
            <Nav />
            <div className="home-text">
                <h3>Hello, Im</h3>
                <h1>Deryana Maruf</h1>
                <h3>I am a WebDeveloper</h3>
            </div>
        </div>
    )
}

export default Home;