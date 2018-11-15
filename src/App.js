import React, {Component} from 'react';
import Logo from './img/logo.svg';
import './App.css';
import Keyboard from './Components/keyboard'
import Phone from './Components/phone'


class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
                {/*>*/}
                {/*Learn React*/}
                {/*</a>*/}
                {/*</header>*/}
                <div className="container">
                    <img src={Logo} className="sweet-logo" alt="logo"/>
                    <div className="content">
                        <h1 className="content__title">введите свой номер телефона для подключения</h1>
                        <div className="content__reg">

                            <Phone/>
                            <Keyboard/>
                        </div>
                       <div className="content__info">
                           <h3>Если у вас возникли вопросы:</h3>
                           <p><b>2121</b> (бесплатно для Украины)<br/> <b>info@sweet.tv</b> </p>
                       </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
