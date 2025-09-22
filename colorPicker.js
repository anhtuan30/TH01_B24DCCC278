import react, {useState} from  'react';
import ColorBox from './colorBox';
function ColorPicker(){
    const [color, setColor] = useState('white')
    return (
        <div>
            <h2>
                Bai 2: Color Picker
            </h2>
        <button onClick ={() => setColor('red')}>Do</button>
        <button onClick ={() => setColor('green')}>Xanh</button>
        <button onClick ={() => setColor('yellow')}>Vang</button>
        <ColorBox color ={color}/>

        </div>
    )
}
export default ColorPicker;