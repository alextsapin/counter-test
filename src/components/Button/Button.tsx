import React from 'react';

type PropsType = {
    title: string
    inc: number
    parameter: number
    callBack: () => void
}

const Button = (props: PropsType) => {
    return <button className="btn btn-primary mx-2" onClick={props.callBack} disabled={props.inc === props.parameter ? true : false}>{props.title}</button>
}

export default Button;