import './calculators.css';
import Calculators from '../../util/operations';

function SprinklerDischarge() {

    const onClick = () => {
        Calculators.sprinklerDischarge();
    }

    return (
        <section id='calculator'>
            <h2>Sprinkler Discharge</h2>
            <div className='calc-screen' id='calc-screen'>
                <span>0</span>
            </div>
            <div className='inputs-container'>
                <label htmlFor="k">K:</label>
                <br></br>
                <input id="k" name="k" className='input'/>
                <br></br>
                <label htmlFor="pressure-psi">Pressure (psi):</label>
                <br></br>
                <input id="pressure-psi" name="pressure-psi" className='input'/>
                <br></br>
                <button className='calc-button' id='calc-button' onClick={onClick}>Calculate!</button>
            </div>
        </section>
    )
}

export default SprinklerDischarge;