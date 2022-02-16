
import React from 'react'


function JokesSetup({questions, answers, getAnotherJoke}) {



    return (
        <div className="container">
            <h1 className="text-success text-center">Jokes from Jokes API</h1>
            <div className='question'>
                <span id='question' className="d-block p-2 bg-primary text-white">{questions}</span>
            </div>
            <pre></pre>
            <div className='answer'> 
                <span id='answer' className="d-block p-2 bg-warning text-white">{answers}</span>
            </div>
            <pre></pre>
            <button onClick={getAnotherJoke} className="btn btn-success btn-lg">Next Joke..</button>
        </div>
    )
}

export default JokesSetup
 