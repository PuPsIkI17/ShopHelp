import React, { Component } from 'react'
import Scanner from './Scanner'

class BarcodeScanner extends Component {
    state = {
        results: [],
    }

    _scan = () => {
        this.setState({ scanning: !this.state.scanning })
    }

    _onDetected = result => {
        this.setState({ results: [] })
        this.setState({ results: this.state.results.concat([result]) })
        window.location.replace("/" + result.codeResult.code)
    }

    render() {
        return (
            <Scanner onDetected={this._onDetected} />    
        )
    }
}

export default BarcodeScanner
