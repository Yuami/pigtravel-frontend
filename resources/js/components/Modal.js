import {Component} from "react";

class Modal extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('modal'));