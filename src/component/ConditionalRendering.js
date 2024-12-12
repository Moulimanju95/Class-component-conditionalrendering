import React , {Component} from 'react';

class ConditionalRendering extends Component{
constructor(props){
    super(props);
    this.state ={
        isLoggedIn: false,
    }
};

toggleLogin = () => {
this.setState(prevState => ({
isLoggedIn: !prevState.isLoggedIn
}));
};

render(){
    return(
        <div>
        {this.state.isLoggedIn ? (
            <h1>Welcome</h1>
        ) : (<h1>Please Login</h1>)
    }
    <button onClick={this.toggleLogin}>
        {this.state.isLoggedIn ? 'LogOut' : 'LogIn' }
    </button>
    </div>
    );
}
}

export default ConditionalRendering;