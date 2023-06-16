


function CareScale(props) {
    const scaleValue = props.scaleValue

    const range = [1, 2, 3]

    return (
        <div>
            <div>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>
                            {props.careType === 'light' ? '☀️' : '💧'} </span>
                                : null 

                )}
            </div>
        </div>
        
    )
}

export default CareScale