import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default React.createClass({
    mixins: [PureRenderMixin],
    getInitialState(){
        return {value: this.props.description}
    },

    _handleOnBlur(e) {
        console.log('plop');
        return this.props.doneDescEditing(this.props.itemId, this.state.value);
    },

    _handleOnChange(e) {
        this.setState({value: e.target.value});
    },

    cancelEditing() {
        this.setState({'value': this.props.description});
        return this.props.cancelEditing(this.props.itemId);
    },
    render(){
        let descriptionStyle = {
            width: '100%'
        };

        return <textarea
            value={this.state.value}
            onChange={this._handleOnChange}
            onBlur={this._handleOnBlur}
            rows="5"
            cols="30"
            autoFocus={true}
            className={this.props.isVisible}
        />
    }
});