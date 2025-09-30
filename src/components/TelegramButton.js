//import { useState } from 'react'

const TelegramButton = ({ onClick, disabled = false, isLoading = false }) => {
    return (
        <button
            className="btn-floating waves-effect waves-light main__action-btn-blue"
            onClick={onClick}
            disabled={disabled || isLoading}
            style={{
                backgroundColor: isLoading ? '#ccc' : '#0088cc',
                cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
        >
            <i className="material-icons">{isLoading ? 'hourglass_empty' : 'send'}</i>
        </button>
    )
}

export default TelegramButton