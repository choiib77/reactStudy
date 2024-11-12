import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home(){
    return <>
        <main className="main">
            <h1>React Simte</h1>
            <Link to={'/subpage'}>Go to subpage & rarr;</Link>
            <Button btntext={"시작"} />
        </main>
    </>
}