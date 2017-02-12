import React from 'react';
import {Link} from 'react-router';

export default function App(props) {
    return (
        <div id="main">
            <div className="navigator">
                <div><b>Navigation</b></div>
                <ul>
                    <li>
                        <Link to={'/inbox'}>Inbox</Link>
                    </li>
                    <li>
                        <Link to={'/spam'}>Spam</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}