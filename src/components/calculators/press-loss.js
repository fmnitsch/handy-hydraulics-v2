import './calculators.css';
import Calculators from '../../util/operations';

function PressureLoss() {

    const onClickFL = () => {
        Calculators.frictionLoss();
    }

    const onClickPSupp = () => {
        Calculators.pSuppPsi();
    }

    return (
        <section id='calculator'>
            <h2>Pressure loss</h2>
            <hr></hr>
            <div id='double-calc-container'>
                <div id='fric-loss-calc'>
                <h2>Friction loss</h2>
                    <div className='calc-screen' id='calc-screen'>
                        <span>0</span>
                    </div>
                <div className='inputs-container'>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="q-discharge">Q-discharge (gpm):</label></td>
                                <td><input id="q-discharge" name="q-discharge" className='input'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="PL-length">Length (ft):</label></td>
                                <td><input id="PL-length" name="PL-length" className='input'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="PL-diam">Diameter (in):</label></td>
                                <td><input id="PL-diam" name="PL-diam" className='input'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="c">C:</label></td>
                                <td><input id="c" name="c" className='input'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='button' className='calc-button' id='calc-friction-loss' onClick={onClickFL}>Calculate!</button>
                </div>
            </div>
            <div className='vl'></div>
                <div id='p-supp-calc'>
                    <h2>P-supp</h2>
                    <div className='calc-screen' id='calc-screen2'>
                        <span>0</span>
                    </div>
                    <div className='inputs-container'>
                        <label htmlFor="p-discharge">P-discharge (psi):</label>
                        <input id="p-discharge" name="p-discharge" className='input'/>
                        <br></br>
                        <label htmlFor="elev-add">Elevation add (ft):</label>
                        <input id="elev-add" name="elev-add" className='input'/>
                        <br></br>
                        <button type='button' className='calc-button' id='calc-pSupp-psi' onClick={onClickPSupp}>Calculate!</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PressureLoss;