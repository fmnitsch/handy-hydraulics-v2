import './calculators.css';
import Calculators from '../../util/operations';

function ElevationPressure() {

    const onClick = () => {
        Calculators.elevationPressure();
    }

    return (
        <section id='calculator'>
            <h2>Elevation pressure</h2>
            <div className='calc-screen' id='calc-screen'>
                <span>0</span>
            </div>
            <div className='inputs-container'>
                <label htmlFor="height">Height (ft):</label>
                <br></br>
                <input id="height" name="height" className='input'/>
                <br></br>
                <button className='calc-button' id='calc-button' onClick={onClick}>Calculate!</button>
            </div>
        </section>
    )
}

export default ElevationPressure;