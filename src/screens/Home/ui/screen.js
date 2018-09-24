import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppConstants from 'core/constants';
import Actions from '../store/actions';
import Navbar from 'components/navbar';
import Todo from 'components/todo';

class Home extends PureComponent {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  handleSortTodos = () => {
    const { sortTodos } = this.props;
    sortTodos();
  }

  renderTodo = (todo) => (
    <Todo
      key={todo.id}
      title={todo.title}
      completed={todo.completed}
    />
  )

  renderTodos = () => {
    const { todos } = this.props;
    return todos.map(this.renderTodo);
  }

  renderSortBtn = () => (
    <div>
      <button onClick={this.handleSortTodos}>Sort</button>
    </div>
  )

  renderContent = () => {
    const { loaded } = this.props;
    const body = loaded ? this.renderTodos() : this.renderEmptyState();
    return (
      <div>
        {this.renderSortBtn()}
        {body}
      </div>
    );
  }

  renderEmptyState = () => (
    <div>
      <p>
        No todos yet.  
      </p>
    </div>
  )

  renderLoading = () => (
    <div>
      <p>
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
        <div>
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
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
