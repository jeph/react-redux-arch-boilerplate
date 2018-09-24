import React from 'react';
import * as Props from './props';
import './stylesheet.css';

const Todo = (props) => {
  const { id, title, completed, onCheck } = props;

  const onChange = (ev) => onCheck(id, ev.target.checked);
  const titleClass = completed ? "text-muted" : "";

  return (
    <div className="row justify-content-between border rounded my-3 bg-white p-3">
      <h4 className={`col-md-9 ${titleClass}`}>{title}</h4>
      <div className="col">
        <input
          type="checkbox"
          className="form-control"
          checked={completed}
          onChange={onChange} />
      </div>
    </div>
  );
};

Todo.propTypes = Props.propTypes;
Todo.defaultProps = Props.defaultProps;

export default Todo;
