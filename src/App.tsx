import React from 'react';
import Button from './components/Button/Button';
import TextField from '@mui/material/TextField';

const App = () => {
    const [inc, setInc] = React.useState(0);
    const [maxInc, setMaxInc] = React.useState(5);

    const [disabledButton, setDisabledButton] = React.useState(true);
    const [maxValue, setMaxValue] = React.useState(5);
    const [minValue, setMinValue] = React.useState(0);

    function callBackInc() {
        setInc(inc + 1)
    }

    function callBackReset() {
        setInc(0)
    }

    function changeMinValue(minValue: number) {
        setDisabledButton(false)
        setMinValue(minValue)
    }

    function changeMaxValue(maxValue: number) {
        setDisabledButton(false)
        setMaxValue(maxValue)
    }

    function setValues() {
        setInc(minValue)
        setDisabledButton(false)
    }

    return (
        <div className="container-xxl">
            <div className="row">
                <div className="col-md-4">
                    <div className="incBox">
                        <TextField 
                            label="Max value" 
                            color="primary" 
                            error={false} 
                            type="number" 
                            focused 
                            onChange={e => changeMaxValue(+e.currentTarget.value)} 
                            value={maxValue}
                        />

                        <TextField 
                            className="mt-4" 
                            label="Min value" 
                            color="primary" 
                            type="number" 
                            focused 
                            onChange={e => changeMinValue(+e.currentTarget.value)} 
                            value={minValue}
                        />

                        <div className="btnBox mt-3">
                            <Button title='SET' callBack={setValues} inc={inc} disabled={disabledButton}/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="incBox">
                        <p className={inc === maxInc ? 'maxValue + inc' : 'inc'}>{inc}</p>
                        <div className="btnBox">
                            <Button title='INC' callBack={callBackInc} inc={inc} disabled={inc === maxInc ? true : false}/>
                            <Button title='RESET' callBack={callBackReset} inc={inc} disabled={inc === minValue ? true : false}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;