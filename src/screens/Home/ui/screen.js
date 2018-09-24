import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppConstants from 'core/constants';
import Actions from '../store/actions';
import Navbar from 'components/navbar';
import Todo from 'components/todo';

class Home extends PureComponent {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  handleToggleCheckTodo = (id, checked) => {
    const { toggleCheckTodo } = this.props;
    toggleCheckTodo({ id, checked });
  }

  handleAddTodo = ev => {
    const { submitTodo } = this.props;
    ev.preventDefault();
    submitTodo();
  }

  handleInputChange = ev => {
    const { changeText } = this.props;
    changeText(ev.target.value);
  }

  renderTodo = (todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
      onCheck={this.handleToggleCheckTodo}
    />
  )

  renderTodos = () => {
    const { todos } = this.props;
    return todos.map(this.renderTodo).reverse();
  }

  renderAddTodoForm = () => (
    <div className="col-md-12">
      <form onSubmit={this.handleAddTodo}>
        <input
          className="form-control"
          placeholder="Add Todo..."
          value={this.props.todo}
          onChange={this.handleInputChange}
        />
      </form>
    </div>
  )

  renderContent = () => {
    const { loaded, todos } = this.props;
    const body = (loaded && todos && todos.length) ? this.renderTodos() : this.renderEmptyState();
    return (
      <div className="mt-4">
        <div className="mx-auto col-md-8">
          {this.renderAddTodoForm()}
          {body}
        </div>
      </div>
    );
  }

  renderEmptyState = () => (
    <div className="p-5">
      <p className="text-white text-center">
        No todos yet.  
      </p>
    </div>
  )

  renderLoading = () => (
    <div className="p-5">
      <p className="text-white text-center">
        Loading...
      </p>
    </div>
  )

  renderView = () => {
    const { loading } = this.props;
    return loading ? this.renderLoading() : this.renderContent();
  }

  render() {
    return (
      <div>
        <Navbar title={AppConstants.APP_TITLE}/>
        <div className="container">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.home.todos,
  loading: state.home.loading,
  loaded: state.home.loaded,
  todo: state.home.todo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
