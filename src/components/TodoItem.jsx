import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import TextInput from './TextInput';
import TodoDescription from './TodoDescription.jsx';
import FileInput from './FileInput';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        var itemClass = classNames({
            'todo': true,
            'completed': this.props.isCompleted,
            'editing': this.props.isEditing,
        });
        let toggleStyle = {
            top: '0px'
        };

        return <li className={itemClass}>
            <div className="view">
                <input type="checkbox"
                       className="toggle"
                       defaultChecked={this.props.isCompleted}
                       onClick={() => this.props.toggleComplete(this.props.id)} />
                <label htmlFor="todo"
                       ref="text"
                       onClick={() => this.props.showDescription(this.props.id)}
                       onDoubleClick={() => this.props.editItem(this.props.id)}
                >
                    {this.props.text}
                </label>
                <FileInput attachFile={this.props.attachFile}
                           itemId={this.props.id}
                           file={this.props.file} />
                <button className="destroy" onClick={() => this.props.deleteItem(this.props.id)}/>
            </div>
            <TextInput text={this.props.text}
                       itemId={this.props.id}
                       cancelEditing={this.props.cancelEditing}
                       doneEditing={this.props.doneEditing}
            />
            <TodoDescription description={this.props.description}
                             itemId={this.props.id}
                             isVisible={this.props.isVisible}
                             cancelEditing={this.props.cancelEditing}
                             doneDescEditing={this.props.doneDescEditing}
            />
        </li>
    }
};