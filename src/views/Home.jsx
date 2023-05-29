import { Hero } from "../components/Home/Hero";
import { List } from "../components/Home/List";
import { Landing } from "../components/Home/Landing";
import '../assets/scss/fontawesome-all.css'
import '../assets/scss/magnific-popup.css'
import '../assets/scss/swiper.css'

const Home = () => {
    return (
        <div>
            <Landing />
            <h2>List of countries we offer tour for</h2>
            <Hero />
            <List />
        </div>
    )
}

export default Home;