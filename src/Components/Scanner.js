import React, { Component } from 'react'
import Quagga from 'quagga'


class Scanner extends Component {
  componentDidMount() {
    let mywidth = 1200;
    let myheight =720;

    var w = window.innerWidth;
    if(w < 700){
      mywidth = 240;
      myheight = 500;
    }
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: mywidth,
            height: myheight,
            facingMode: 'environment',
            aspectRatio: {min: 1, max: 2}
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
