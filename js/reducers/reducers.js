import {
    NEW_GAME,
    MAKE_GUESS,
    TOGGLE_INFO_MODEL,
    UPDATE_GUESS_FIELD,
    fetchFewestGuesses
} from '../actions/actions';


const initialState = {
    guesses: [],
    feedback: 'Pick Between 1 and 100',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModel: false,
    guessDraft:"",
    fewestGuesses: 0
};

export default (state, action) => {
    state = state || initialState;
    if (action.type === NEW_GAME) {
        state = Object.assign({
        }, initialState, {
            fewestGuesses: state.fewestGuesses,
            correctAnswer: action.correctAnswer
        });
        return state;
    }
    else if (action.type === MAKE_GUESS) {
        const guess = parseInt(state.guessDraft, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }


        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 5)  {
            feedback = 'You\'re Hot!';
        }
        else if (difference >= 1) {
            feedback = "OMG, You're super close";
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
            feedback,
            guesses: state.guesses.concat(action.guess),
            guessDraft: " ",
            guesses: [...state.guesses,state.guessDraft]
        });

        return state;
    }
    else if (action.type === TOGGLE_INFO_MODEL) {
         state = Object.assign({}, state, {
             showInfoModel: !state.showInfoModel
        });

        return state;

    }

    else if (action.type === UPDATE_GUESS_FIELD) {
        state = Object.assign({},state,{
            guessDraft:action.value
        })
        return state;
    }
    else if (action.type === fetchFewestGuesses) {
      state = Object.assign({},state {
          fewestGuesses: action.guesses
      });
    }
    return state;
};
