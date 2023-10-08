import { Container } from "../../layout/container";
import Header from "../../layout/header";
import Show from "../../layout/show"
import Bottom from "../../layout/bottom/bottom";
import './style.css'

function Home() {
    return (
        <div>     
            <Header/>
            <Show />
            <Container/>
            <a className="contact" href="https://stackoverflow.com/questions/71544511/headings-must-have-content-and-the-content-must-be-accessible-by-a-screen-reader"> </a>
            <Bottom/>
        </div>
    )
}

export default Home;
