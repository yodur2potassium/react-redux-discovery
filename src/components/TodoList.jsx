import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    getItems() {
        if (this.props.todos) {
            return this.props.todos.filter(
                (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
            );
        }
        return [];
    }

    isCompleted(item) {
        return item.get('status') === 'completed';
    }

    render() {
        let containerStyle = {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%"
        };
        return <section className="main">
            <div style={containerStyle}
                className="todo-list">
                {this.getItems().map(item =>
                    <TodoItem key={item.get('text')}
                              text={item.get('text')}
                              id={item.get('id')}
                              file={item.get('file')}
                              description={item.get('description')}
                              isCompleted={this.isCompleted(item)}
                              isEditing={item.get('editing')}
                              isVisible={item.get('isVisible')}
                              showDescription={this.props.showDescription}
                              doneEditing={this.props.doneEditing}
                              doneDescEditing={this.props.doneDescEditing}
                              cancelEditing={this.props.cancelEditing}
                              toggleComplete={this.props.toggleComplete}
                              deleteItem={this.props.deleteItem}
                              attachFile={this.props.attachFile}
                              editItem={this.props.editItem}/>
                )}
            </div>
        </section>
    }
};