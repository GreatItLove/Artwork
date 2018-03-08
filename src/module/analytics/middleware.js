import { createMiddleware } from 'redux-beacon';
import { GoogleTagManager } from 'redux-beacon/targets/google-tag-manager';

const pageView = action => ({
  hitType: 'pageview',
  page: action.payload
});

const eventsMap = {
  '@@router/LOCATION_CHANGE': pageView
};

const middleware = createMiddleware(eventsMap, GoogleTagManager());

export default middleware;
