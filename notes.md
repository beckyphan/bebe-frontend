React App Notes

# react redux portfolio project

## the plan
During this pandemic, many people have become new parents -- whether of new plants, new pets, or little humans. My project will be a daily tracker for these new parents to record the growth and care of their new little ones. For MVP, I’ll start with one type of bebe -- a human baby. I'll also limit some of the initial tracking attributes.

**User**
* :name - string
* :username - string
* :password - string
has_many :bebes, as: :parent

**Bebe**
* :name - string
* :kind - string
* :birthdate - date
* :bio- text
has_many :days
has_many :trackings, through: :days
belongs_to :parent

**Day**
* :picture - string
* :date - date
* :note - text
belongs_to bebe

**Tracking**
* :info_type - string
* :start_time - time
* :end_time - time
* :amount - float
* :amount_unit - string
* :note - text
belongs_to :day
belongs_to :bebe
validates_inclusion_of :info_type, :in => [‘’, ‘’ ‘’, ]

## the routes
1. Register/Login & Authenticate
2. Authorize => User Dashboard (See all Bebes)/Bebe Form
2. Authorize => Bebe Overview (See Bebe's Days)/Day Form
3. Authorize => Bebe's Day (See Bebe's Day's Trackings)/Tracking Form

Use of { Route, Link, BrowserRouter as Route, Redirect } from ‘react-router-dom’
i.e.
```
<Switch>
	<Route/>
	<Route/>
	<Route/>
</Switch>
```


## components
containers are components that render other components
class components: class extends React.Component which must have a render() { return (JSX) }
functional components: const X = (props) => {return (JSX)}

## the class components
1. User Registration/Login User
2. Bebes Container
3. Create Bebe Form
4. Update Bebe Form
5. Data Container
6. Create Data Form
7. Update Data Form

## the stateless components (functional)
1. NavBar to Display Routes/Links
2. Read/Display User’s Info
3. Read/Display Bebe’s Bio
4. Read/Display Bebe’s Days
5. Read/Display Bebe’s Day’s Data

## the actions
The actions triggered in this application will include:
* CREATE_USER, LOGIN_USER
* FETCH_BEBES, ADD_BEBE, EDIT_BEBE, REMOVE_BEBE
* FETCH_DAYS, ADD_DAY, REMOVE_DAY
* FETCH TRACKINGS, ADD_TRACKING, EDIT TRACKING, REMOVE_TRACKING

action creator/function creates an action object, and that action object is dispatched to the reducer which will change our state based on the action that was sent

Of note, when fetching data, due to asynchronous nature and return of a promise, a normal dispatch would not occur correctly with the connect(), so thunk allows the dispatch to be called at the end of the action i.e. the 2nd argument in connect(). The action function should return a function in which dispatch is passed in as an argument, the fetch request is run, the response is converted into a JSON object, and then that data returns the dispatch with a type and payload.
e.g.
```
export function fetchBebes() {
	return (dispatch) => {
		fetch(bebesURL)
		.then(resp => resp.json())
		.then(bebesData => dispatch({
			type: “FETCH_BEBES”,
			payload: bebesData
			})
		)
	}
}
```

### rails backend
rails new bebe-backend --api --database=postgresql --no-test-framework
(consider namespacing controllers into api/v1 to help with versioning organization in backend and use postgres for db)

* create & commit to github

* set up models
* set up controllers
* configure routes (namespace routes api/v1)
*e.g. rails g resource User username:string*
* create serializers

* create db/run migrations


### react frontend
create-react-app bebe-frontend
* add gem 'rack-cors' and configure cors.rb file within initializers folder to allow cross-origin resource sharing
* add gem ‘active_model_serializer’ to be able to generate serializers via ‘rails g serializer’
Update attributes for each serializer & relationships


> > src
>> App.js
>> index.js
create & commit to github
change App.js into class component

* install redux, react-redux, react-router-dom, redux-thunk —save

import into index.js file
- { createStore, applyMiddleware, compose } from ‘redux’
- thunk from ‘redux-thunk’
- { Provider } from ‘react-redux’
- reducer
- { BrowserRouter as Router } from ‘react-router-dom’

- set-up reducer
    - reducer is a function that takes in a state (set default as object) and an action
    - reducer will use switch/case to return an updated state based on what action was passed in
- create store in index.js

import into App.js file
- { connect } from ‘react-redux’
- { anyActions} } from actions folder to dispatch
- any container components
** remember to export default connect(mapStateToProps, mapDispatchToProps)(App)

connecting a function mapStateToProps allows us to access values in our store as props; 2nd argument in connect allows us to dispatch new actions directly from our component as props.

i.e. if you wanted to access this.props.accounts
then your function would be:
```
const mapStateToProps = (state) => {
	return {
		accounts: state.accounts
	}
}
```
