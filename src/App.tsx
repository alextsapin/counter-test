import React from 'react';
import Button from './components/Button/Button';

const App = () => {
    const [inc, setInc] = React.useState(0);
    
    function callBackInc() {
        setInc(inc + 1)
    }

    function callBackReset() {
        setInc(0)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-4 col-md-4">
                    <div className="incBox">
                        <p className={inc === 5 ? 'red + inc' : 'inc'}>{inc}</p>
                        <div className="btnBox">
                            <Button title='INC' callBack={callBackInc} inc={inc} parameter={5}/>
                            <Button title='RESET' callBack={callBackReset} inc={inc} parameter={0}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;