import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';


const should = chai.should();

import {Card} from '../js/components/card';

describe('Card component', function() {
  it('Renders the form, values and guess button', function() {

   const renderer = TestUtils.createRenderer();
   renderer.render(<Card guesses={[52,54,55]} feedback={'Make your guess!'} correctAnswer={42} guessDraft="" />);
   const result = renderer.getRenderOutput();

  })


})
