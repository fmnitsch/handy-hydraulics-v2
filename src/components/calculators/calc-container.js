import './calculators.css';
import ElevationPressure from './elev-pressure';
import OrificeDischarge from './orif-discharge';
import PipeVolume from './pipe-volume';
import PressureLoss from './press-loss';
import SprinklerDischarge from './sprink-discharge'

function CalcContainer(props) {

    if(props.calcDisplay === 'elev-press') {
        return (
            <ElevationPressure />
        );
    }; 

    if(props.calcDisplay === 'orif-dis') {
        return (
            <OrificeDischarge />
        );
    }; 

    if(props.calcDisplay === 'pipe-vol') {
        return (
            <PipeVolume />
        );
    }; 

    if(props.calcDisplay === 'sprink-dis') {
        return (
            <SprinklerDischarge />
        );
    }; 

    if(props.calcDisplay === 'press-loss') {
        return (
            <PressureLoss />
        );
    }; 
};

export default CalcContainer