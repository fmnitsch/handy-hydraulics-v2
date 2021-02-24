import './calculators.css';
import Calculators from '../../util/operations';

function PipeVolume() {

    const onClick = () => {
        Calculators.pipeVolume();
    }

    return (
        <section id='calculator'>
            <h2>Pipe Volume</h2>
             <div className='calc-screen' id='calc-screen'>
                <span>0</span>
            </div>
            <div className='inputs-container'>
                <label htmlFor="PV-diam">Diameter (in):</label>
                <br></br>
                <input id="PV-diam" name="PV-diam" className='input'/>
                <br></br>
                <label htmlFor="PV-length">Length (ft):</label>
                <br></br>
                <input id="PV-length" name="PV-length" className='input'/>
                <br></br>
                <button className='calc-button' id='calc-button' onClick={onClick}>Calculate!</button>
            </div>
        </section>
    )
}

export default PipeVolume;