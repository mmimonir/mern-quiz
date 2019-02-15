module.exports = ({question, options, answer}) => {
    const error = {}

    if(!question){
        error.question = 'You Must Provide a Valid Question'
    }

    if(!options || options.length <2){
        error.options = 'You Must Provide at least 2 Options'
    }

    if (!answer) {
        error.answer = 'You Must Provide a Valid Answer'
    } else if(!options.includes(answer)){
        error.answer = 'You Must Provide Answer in Your Options'
    }

    return {
        error,
        isValid: Object.keys(error).length == 0
    }
}