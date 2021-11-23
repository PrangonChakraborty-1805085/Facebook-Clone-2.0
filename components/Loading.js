//for spin effect in the page, install better-react-spinkit
import {Circle} from "better-react-spinkit"


function Loading() {
    return (
        <center style={{
            display: "grid",
            placeItems:"center",
            height:"100vh",
        }}>

            <div>
                {/* <img src="https://links.papareact.com/t4i" alt=""  */}
                <img className="h-40 w-100" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"  objectFit="contain"
                />
                <Circle color="#0000FF" size={60}></Circle>
            </div>
            </center>
    )
}

export default Loading
