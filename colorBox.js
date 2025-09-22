
import react from "react";
function ColorBox({color}){
    return(
        <div
        style ={{
            height: '125px',
            width: '125px',
            backgroundColor: color,
            border:'1px solid black',
            marginTop:'25px',

        }}>
        </div>
    );
}
export default ColorBox;