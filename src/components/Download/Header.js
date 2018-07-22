import React, {
    Component
} from 'react';
import './style.css';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header className="Instagram-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-m6">
                            Instagram
                        </div>
                        <div className="col">
                            Descarga
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;