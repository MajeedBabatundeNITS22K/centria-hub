import NavBar from "../components/NavBar"
import { Footer } from "../components/Footer"
export default function NewsPage () {
    return (
        <div>
            <NavBar />
            <p className="h-[100vh]">This is News Page.</p>
            <Footer />
        </div>
    )
}