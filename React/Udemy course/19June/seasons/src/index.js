import React from 'react'
import ReactDom from 'react-dom'

//
// export default function App() {
//         window.navigator.geolocation.getCurrentPosition(
//         position=> console.log(position),
//         err=> console.log(err)
//         );
//         return <div>Lattitude </div>
// }

class App extends React.Component {
        //create constructor
        constructor(props) {
                super(props);
                //initilizae the state object
                this.state ={ lat: null};
                window.navigator.geolocation.getCurrentPosition(
                        position=> {
                                //call setSate to initilize the state
                                this.setState({ lat: position.coords.latitude});
                        },
                        err=> console.log(err)
                );
        }
        render(){
                return <div> Lattitude: {this.state.lat}</div>
        };
}
ReactDom.render(<App/>, document.getElementById('root'))
