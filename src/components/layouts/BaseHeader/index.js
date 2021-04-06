import React from 'react'
import './styles.scss';


const BaseHeader = ({ title, username = 'Pasenme como prop desde la vista' }) => {
    return <div className="base-header-container">
        {
            <div className="base-header-user">
                {/* <div className="base-header-user-info">
                <div className="base-header-user-info-title"><strong>Hola,</strong> <span className="base-header-user-info-title-name">{username}</span></div>
        </div> */}
                <div className="base-header-title">
                    <div class="base-header-title-text">
                        {title}
                    </div>
                </div>
            </div>
        }
    </div>
}

export default BaseHeader;