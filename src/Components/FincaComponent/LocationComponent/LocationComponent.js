import classes from './LocationComponent.module.css';
import reliefMap from '../../../imgs/Finca/marked-relief.png';

const LocationComponent = () => {
    return(
        <>
            <div className={classes.locationContainer}>
                <p>Muy adentro de la región selvática de México, Finca don Rafa se encuentra rodeada por la sierra madre de Chiapas a una altura promedio de 1,400 metros sobre el nivel del mar. Con los factores climáticos que solamente ésta región del mundo puede ofrecer nos hemos dedicado a fomentar el sabor y la calidad característicos del café Mexicano.</p>
                <img src={reliefMap} alt='relief Chiapas map' />
            </div>
        </>
    )
};

export default LocationComponent;