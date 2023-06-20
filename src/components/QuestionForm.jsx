import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Entrer votre adresse mail ici ')
    const [isInputError, setisInputError] = useState(false)

    function checkValue(value) {
        return !value.includes('@')
    }

    return (
        <div>
            <input
                onBlur={(e) => { setisInputError(checkValue(e.target.value))} }
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    // checkValue(e.target.value)
                }}
            />
            <button onClick={() => alert(inputValue)}>Envoyer</button>


            {isInputError && (
                <div>🔥 Attention, il n'y a pas d'@, ceci n'est pas une adresse valide !</div>
            )}
            
        </div>
    )
}


export default QuestionForm
