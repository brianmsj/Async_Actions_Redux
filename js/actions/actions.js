export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const TOGGLE_INFO_MODEL = 'TOGGLE_INFO_MODEL';
export const toggleInfoModel = () => ({
    type: TOGGLE_INFO_MODEL
});

export const UPDATE_GUESS_FIELD = 'UPDATE_GUESS_FIELD';
export const updateGuessField = value => ({
    type: UPDATE_GUESS_FIELD,
    value
})
export const FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES'
export const 

export const fetchFewestGuesses = guesses => dispatch {
    const url = new URL('localhost:8081/fewestGuesses');
    const data = {
      format: 'json',
      guesses: guesses
    }
   return fetch(url).then(response => {
     if (!response.ok) {
       throw new Error(response.statusText);
     }
     return response.json();
)}.then(data => {
    const fewestGuesses = data.guesses.guesses;
    return dispatch(
      fetchFewestGuessesSuccess(fewestGuesses)
    )
}).catch(error =>
   dispatch(fetchFewestGuessesError(error))
};

export const saveFewestGuesses = score => dispatch {
    const url = new URL('localhost:8081/fewestGuesses')
}
