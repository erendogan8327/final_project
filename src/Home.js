import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <div id="add_project">
                <a>CLICK ME</a>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('root'))

export default Home;