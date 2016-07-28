import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
  
import * as actions from '../src/actions'
import nock from 'nock'
import expect from 'expect'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const test_url = 'http://test.com'
      
describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  xit('should create FETCH_CONVERSATIONS_FAILURE when fetching conversations is failed', () => {
  })
  
  it('should create FETCH_CONVERSATION_SUCCESS when fetching conversations has been done', () => {
    nock(test_url)
      .get('/inbox/private-conversation/')
      .reply(200, { body: { todos: ['do something'] }})

    const expectedActions = [
      { type: actions.TYPE.FETCHING_CONVERSATIONS },
      { type: actions.TYPE.FETCH_CONVERSATIONS_SUCCESS, body: { todos: ['do something']  } }
    ]
    const store = mockStore({})

    return store.dispatch(actions.fetchConversations())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})