import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Entrer votre adresse ici ')
    const isInputError = inputValue.includes('@')

    function checkValue(value) {
        if (value.includes('@')) {
            setInputValue('')
        }
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                    checkValue(e.target.value)
                }}
            />
            <button onClick={() => alert(inputValue)}>Envoyer</button>

            {isInputError && (
                <div>🔥 Vous avez oublier votre @ dans votre adresse mail !</div>
            )}
        </div>
    )
}


export default QuestionForm
