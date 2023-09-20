import { AppThunk } from '../store/store.types';

import { setTopFeed } from '../store';

import { compareCreatedDatesForTop, makeTopFeed } from '../services/helpers';

const setNewPostsThunk: AppThunk = (qty = 5) => (dispatch, getState) => {
  const articles = getState().all.articles ?? [];
  dispatch(setTopFeed(makeTopFeed(articles, compareCreatedDatesForTop, qty as number)));
};

export default setNewPostsThunk;
