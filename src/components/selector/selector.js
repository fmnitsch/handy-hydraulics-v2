import './selector.css'

function Selector(props) {
    
    return (
        <section className='calc-selector'>
        <h2 className='calc-header'>Calculators:</h2>
            <div className='calc-list'>
                <p id='elev-press' onClick={props.changeCalc}>Elevation pressure</p>
                <p id='orif-dis' onClick={props.changeCalc}>Orifice discharge</p>
                <p id='pipe-vol' onClick={props.changeCalc}>Pipe volume</p>
                <p id='sprink-dis' onClick={props.changeCalc}>Sprinkler discharge</p>
                <p id='press-loss' onClick={props.changeCalc}>Pressure loss</p>
            </div>
        </section>
    )

}

export default Selector;