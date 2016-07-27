import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
  
import * as actions from '../src/actions'
import nock from 'nock'
import expect from 'expect.js'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

//  it('creates FETCH_CONVERSATION_SUCCESS when fetching todos has been done', () => {
//    nock('http://example.com')
//      .get('/inbox/private-conversation/')
//      .reply(200, { body: { todos: ['do something'] }})
//
//    const expectedActions = [
//      { type: actions.TYPE.FETCHING_CONVERSATIONS },
//      { type: actions.TYPE.FETCH_CONVERSATIONS_SUCCESS, body: { todos: ['do something']  } }
//    ]
//    const store = mockStore({ todos: [] })
//
//    return store.dispatch(actions.fetchConversations())
//      .then(() => { // return of async actions
//        expect(store.getActions()).toEqual(expectedActions)
//      })
//  })
})