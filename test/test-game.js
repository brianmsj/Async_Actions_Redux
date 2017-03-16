import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';


const should = chai.should();

import {Game} from '../js/components/game';

describe('Game component', function() {
  it('Renders the entire nav and card', function() {

   const renderer = TestUtils.createRenderer();
   renderer.render(<Game guesses={[4,3]} showInfoModel={false} />);
   const result = renderer.getRenderOutput();
   result.props.className.should.equal('Game')

  })


})
