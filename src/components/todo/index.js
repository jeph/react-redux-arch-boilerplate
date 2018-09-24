import React from 'react';
import * as Props from './props';

const Todo = (props) => {
  const { title, completed } = props;
  return (
    <div>
      <h4>
        {title}
        <input type="checkbox" checked={completed} />
      </h4>
    </div>
  );
};

Todo.propTypes = Props.propTypes;
Todo.defaultProps = Props.defaultProps;

export default Todo;
