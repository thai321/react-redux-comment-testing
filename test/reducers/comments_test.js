import { expect } from '../test_helper';

import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  let action;
  beforeEach(() => {
    action = { type: SAVE_COMMENT, payload: 'a comment' };
  });

  it('handles action with unknown type', () => {
    // expect(commentReducer(undefined, {}).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('it handles action of SAVE_COMMENT', () => {
    expect(commentReducer([], action)).to.eql(['a comment']);
  });

  it('it handles action of SAVE_COMMENT', () => {
    action.payload = 'second comment';
    expect(commentReducer(['first comment'], action))
    .to.eql(['first comment' ,'second comment']);
  });
});
