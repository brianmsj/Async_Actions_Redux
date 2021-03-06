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
export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS'
export const fetchFewestGuessesSuccess = guesses => ({
    type: FETCH_FEWEST_GUESSES_SUCCESS,
    guesses
})
export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR'
export const fetchFewestGuessesError = error => ({
    type: FETCH_FEWEST_GUESSES_ERROR,
    error
})

export const RECEIVE_GUESSES_DATA = 'RECEIVE_GUESSES_DATA'
export const receiveGuessesData = guesses => ({
  type: RECEIVE_GUESSES_DATA,
  guesses
})

export const fetchFewestGuesses = () => dispatch => {
  const url = new URL('localhost:8081/fewestGuesses');

  return fetch('http://localhost:8081/fewestGuesses').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(data => {
    console.log('data',data)
    const fewestGuesses = data.guesses;
    return dispatch(
      fetchFewestGuessesSuccess(fewestGuesses)
    )
  }).catch(error =>{
    dispatch(fetchFewestGuessesError(error))
  });  
}
export const saveFewestGuesses = guesses => dispatch => {
      console.log(guesses);
      return fetch('http://localhost:8081/fewestGuesses', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(guesses)
    })
    .then(response=> response.json())
    .then(json=> {
      dispatch(receiveGuessesData(json.guesses))})

}
