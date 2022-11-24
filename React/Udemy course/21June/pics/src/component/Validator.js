import React from 'react';

class Validator extends React.Component {
    // State is being initialized in a slightly different way than is shown
    // in the previous videos. You can ignore this different syntax for now.
    constructor(props) {
        super(props);
        this.state = { password: '' };
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label> Enter Password </label>
                        <input type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    {this.state.password.length < 4 ? 'Password must be at least 4 characters' : ''}
                </form>
            </div>
        );
    }
}

export default Validator;