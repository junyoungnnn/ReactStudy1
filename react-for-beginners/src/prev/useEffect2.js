import {useState, useEffect} from "react";

function Hello(){
    // function HiFn(){
    //     console.log("created :)");
    //     return ByFn;
    // }
    // function ByFn(){
    //     console.log("bye :(");
    // }
    useEffect(() =>{
        console.log("hi :)");
        return ()=>{
            console.log("bye :(");
        }
    }, []);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
    <div>
        {showing ? <Hello/> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
    );
}

export default App;