const AnalogBase = {
    backgroundImage: 'url(./clock-bg.gif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '100%',
    border: '2px solid black',
    position: 'relative',
    height: '500px',
    width: '500px',
};

const AnalogHand = {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transformOrigin: '50% 100%',
    backgroundColor: '#000',
};

const AnalogSecondHand = Object.assign({}, AnalogHand, {
    width: '5px',
    height: '200px',
});

const AnalogMinuteHand = Object.assign({}, AnalogHand, {
    width: '6px',
    height: '150px',
});

const AnalogHourHand = Object.assign({}, AnalogHand, {
    width: '7px',
    height: '100px',
});

export default {
    base: AnalogBase,
    second: AnalogSecondHand,
    minute: AnalogMinuteHand,
    hour: AnalogHourHand,
};
