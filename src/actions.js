import fetch from 'isomorphic-fetch'

export const TYPE = {
  //Query
  FETCH_CONVERSATIONS : 'FETCH_CONVERSATIONS',
  FETCH_CONVERSATIONS_SUCCESS : 'FETCH_CONVERSATIONS_SUCCESS',
  FETCH_CONVERSATIONS_FAILURE : 'FETCH_CONVERSATIONS_FAILURE',
  FETCHING_CONVERSATIONS : 'FETCHING_CONVERSATIONS',
  READ_MORE_CONVERSATIONS : 'READ_MORE_CONVERSATIONS',

  //Creation
  SEARCH_USERS : 'SEARCH_USERS',
  CREATE_CONVERSATION : 'CREATE_CONVERSATION',

  //Messaging
  REPLY : 'REPLY',
}

//const testing = process.env.NODE_ENV === 'test';
//const apiUrl = `${testing ? 'http://localhost' : ''}/api`;
const APP_STAGE = process.env.APP_STAGE ? process.env.APP_STAGE : 'TEST'
const api_url = APP_STAGE == 'TEST' ? 'http://test.com' : ''

export function fetchingConversations(){
  return {
    type: TYPE.FETCHING_CONVERSATIONS
  }
}

export function fetchConversationsSuccess(body) {
  return {
    type: TYPE.FETCH_CONVERSATIONS_SUCCESS,
    body
  }
}

export function fetchConversationsFailure(ex) {
  return {
    type: TYPE.FETCH_CONVERSATIONS_FAILURE,
    ex
  }
}

export function fetchConversations() {
  return dispatch => {
    dispatch(fetchingConversations())
    return fetch(api_url+'/inbox/private-conversation/')
      .then(response => response.json())
      .then(json => dispatch(fetchConversationsSuccess(json.body)))
      .catch(ex => dispatch(fetchConversationsFailure(ex)))
  }
}

