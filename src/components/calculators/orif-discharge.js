import './calculators.css';
import Calculators from '../../util/operations';

function OrificeDischarge() {

    const onClick = () => {
        Calculators.orificeDischarge();
    }

    return (
        <section id='calculator'>
            <h2>Orifice Discharge</h2>
            <div className='calc-screen' id='calc-screen'>
                <span>0</span>
            </div>
            <div className='inputs-container'>
                <label htmlFor="orifice">Orifice (in):</label>
                <br></br>
                <input id="orifice" name="orifice" className='input'/>
                <br></br>
                <label htmlFor="cfact">C-fact.:</label>
                <br></br>
                <input id="cfact" name="cfact" className='input'/>
                <br></br>
                <label htmlFor="psi">PSI:</label>
                <br></br>
                <input id="psi" name="psi" className='input'/>
                <br></br>
                <button className='calc-button' id='calc-button' onClick={onClick}>Calculate!</button>
            </div>
        </section>
    )
}

export default OrificeDischarge;