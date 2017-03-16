import React from 'react';
import {connect} from 'react-redux';
import {
   toggleInfoModel
} from '../actions/actions';




const mapStateToProps = (state, props) => ({
    showInfoModel: state.showInfoModel
});


export class Help extends React.Component {
    constructor(props) {
        super(props);
        this.renderGame = this.renderGame.bind(this);
    }

    renderGame() {
      this.props.dispatch(toggleInfoModel())
    }

    render() {
          return (
            <div className="help-screen">
              <h1 className="help-title">What do I do?</h1>
              <p className="helplist">This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
              <ul className="helplist">
                <li className='list'>1. I pick a random secret number between 1 to 100 and keep it hidden.</li>
                <li className='list'>2. You need to guess until you can find the hidden secret number.</li>
                <li className='list'>3. You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
              </ul>
              <p className="helplist">So, Are you Ready?</p>
              <button className ="goback" type="submit" onClick={this.renderGame}>Go Back</button>
            </div>
          )}


}

export default connect(mapStateToProps)(Help);
