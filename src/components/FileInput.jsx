import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dropzone from 'react-dropzone';

export default React.createClass({
    mixins: [PureRenderMixin],

    getFileUrl() {
        return this.props.file ? this.props.file : 'http://larics.fer.hr/wp-content/uploads/2016/04/default-placeholder.png';
    },

    _onDrop(files) {
        return this.props.attachFile(this.props.itemId, files[0]);
    },

    render() {
        let dropZoneStyle = {
            position: 'absolute',
            width: '50px',
            right: '50px',
            top: '0',
            bottom: '0',
            background: `url(${this.getFileUrl()})`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'no-repeat',
        };
        let divStyle = {
            position: 'relative',
            width: '50px',
            right: '50px',
            top: '0',
            bottom: '0',
        };

        return <Dropzone  style={dropZoneStyle}
                          onDrop={this._onDrop}
                          multiple= {false}
                          >
                <div  style={divStyle}
                      title="Upload File" />
            </Dropzone>
    }
});