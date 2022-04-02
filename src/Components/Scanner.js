import React, { Component } from 'react'
import Quagga from 'quagga'

class Scanner extends Component {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: window.innerWidth,
            height: window.innerHeight,
            facingMode: 'environment',
          },
        },
        locator: {
            halfSample: true,
            patchSize: "medium", // x-small, small, medium, large, x-large
            debug: {
                showCanvas: true,
                showPatches: true,
                showFoundPatches: true,
                showSkeleton: true,
                showLabels: true,
                showPatchLabels: true,
                showRemainingPatchLabels: true,
                boxFromPatches: {
                    showTransformed: true,
                    showTransformedBox: true,
                    showBB: true
              }
            }
        },
        numOfWorkers: 4,
        frequency: 10,
        decoder: {
            readers: ['ean_reader'],
            debug: {
                drawBoundingBox: true,
                showFrequency: true,
                drawScanline: true,
                showPattern: true
            },
        },
        locate: false,
      },
      function(err) {
        if (err) {
          return console.log(err)
        }
        Quagga.start()
      },
    )
    Quagga.onDetected(this._onDetected)
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected)
  }

  _onDetected = result => {
    this.props.onDetected(result)
  }

  render() {
    return <div id="interactive" className="viewport"/>
    }
}

export default Scanner
