import React from 'react';
import {connect} from 'react-redux';
import {
    updateGuessField,
    makeGuess
} from '../actions/actions';





const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    feedback:state.feedback,
    correctAnswer: state.correctAnswer,
    guessDraft:state.guessDraft,
    fewestGuesses: state.fewestGuesses
});


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          started: false
        }
        this.grabVal = this.grabVal.bind(this);
        this.makeGuess = this.makeGuess.bind(this);
    }

    grabVal(event) {
        console.log(event.target.value)
       this.props.dispatch(updateGuessField(event.target.value))
    }

    componentDidMount() {
      setTimeout(()=>{
        this.setState({started:true})
      }, 0)
    }
    makeGuess(event) {
       this.props.dispatch(makeGuess())
    }

    render() {
        return (
          <div className={`Card ${this.state.started ? '' : 'hidden'}`}>
            <div className="bannerDiv">
                <h2 className="banner"> {this.props.feedback}</h2>
            </div>
            <div className='input-div'>
              <input placeholder=" 42" className = "input-field"  onChange={this.grabVal} value={this.props.guessDraft}></input>
            </div>
            <button className="guessButton" type ="submit" onClick= {this.makeGuess} >Guess</button>
            <p className = "guess">Guess # <span className='span'>{this.props.guesses.length}</span></p>
            <h3 className="array">{`${this.props.guesses}`}</h3>
            <h3 className="fewguesses">{`This is the fewest guesses ${this.props.fewestGuesses}`}</h3>
        </div>
        );
    }
}

export default connect(mapStateToProps)(Card);
