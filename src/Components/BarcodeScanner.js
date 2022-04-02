import React, { Component } from 'react'
import Scanner from './Scanner'
import { TextareaAutosize, Paper} from '@material-ui/core'
import "../styles/barcode.css"

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
            <div>
                <Paper variant="outlined" style={{marginTop:0, height:window.innerHeight}}>
                    <Scanner onDetected={this._onDetected} />
                </Paper>

                <TextareaAutosize
                    style={{fontSize:32, width:320, height:100, marginTop:30}}
                    rowsMax={4}
                    defaultValue={'No data scanned'}
                    value={this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
                />

            </div>
        )
    }
}

export default BarcodeScanner
