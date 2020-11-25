React App Notes

# react redux portfolio project

![](https://www.google.com/url?sa=i&url=https%3A%2F%2Fidolforums.com%2Ftopic%2F741200-television-shows-rankdown%2F%3Fdo%3DfindComment%26comment%3D28309589&psig=AOvVaw3UysRPX9DBVChER2DFRPKu&ust=1606342466208000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKC8p5WanO0CFQAAAAAdAAAAABAO)

## the plan
During this pandemic, many people have become new parents -- whether of new plants, new pets, or little humans. My project will be a daily tracker for these new parents to record the growth and care of their new little ones. For MVP, I’ll start with one type of bebe -- a human baby.

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
I don't plan on having too many direct navlinks because they should be accessed via relationships, but I should have a home page which directs to a user's dashboard upon login, and a user should be able to hit some edit profile/settings link to edit their information. Aside from that, user's bebes will be accessed through
i.e.
```
<Switch>
	<Route/>
	<Route/>
	<Route/>
</Switch>
```


## components
class components: class extends React.Component which must have a render() { return (JSX) } and have state, lifecycle methods, and can contain custom class methods.
pure components have state, lifecycle methods except for shouldComponentUpdate()
functional components: const X = (props) => {return (JSX)} are forwhen we don't need state of lifecycle methods

containers are components that render other components

## the class components
1. User Registration/Login User Form
3. Create Bebe Form
4. Update Bebe Form
6. Create Data Form
7. Update Data Form

## the stateless components (functional)
these stateless components should not have local state, but can access state from the redux store via props passed down to the child component.
1. NavBar to Display Routes/Links
2. Bebes Container
3. Calendar Container
3. Data Container
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
I initially forgot to indicate the use of postgres upon creation, so had to go back and replace the db gem + update the database.yml file in the initializers/config folder.

* set up models
* set up controllers
* configure routes (namespace routes api/v1)
*e.g. rails g resource User username:string*
* create serializers
* create db/run migrations

A good resource for determing whether to generate just the model, resources, or scaffold: https://medium.com/@matt.readout/rails-generators-model-vs-resource-vs-scaffold-19d6e24168ee

One of the things I struggled with in the process with creating with javascript project with rails API backend was building vertically so it'll be good to continue practicing this!

To start, I will need to build out the user model and making sure a user can register and login.
Then I should create the bebe model and ensure the relationships between a user and bebe are all working and that a logged-in user is able to create and view bebes.
Next, I will build the days model, the trackings model, and then ensuring everything works.

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
