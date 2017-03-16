import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import {Provider} from 'react-redux';

import store from '../js/store';
import reducer from '../js/reducers/reducers';

const should = chai.should();

import {Help} from '../js/components/help';

describe('Help component', function() {
  it('Renders the instructions and go back button', function() {

   const renderer = TestUtils.createRenderer();
   renderer.render(<Help />);
   const result = renderer.getRenderOutput();
   result.props.className.should.equal('help-screen');
   result.props.should.be.a('object');
   result.props.children[0].props.should.be.a('object');
   result.props.children[4].props.type.should.equal('submit')

  })


})
