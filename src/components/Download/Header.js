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
                <div className="container-fluid full-height">
                    <div className="row full-height align-items-center justify-content-between">
                        <div className="col">
                            <p className="text-left mb-0 font-weight-bold header-title">
                                Instagram
                             </p>
                            <p className="text-left mb-0 header-subtitle">
                                Encuéntrala en Google Playstore
                             </p>
                        </div>
                        <div className="col text-right">
                            <button type="button" name="downloadButton" className="btn btn-outline-light download-button font-weight-bold">
                                INSTALAR
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;