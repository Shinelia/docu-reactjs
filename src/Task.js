import React from 'react';
import PropTypes from "prop-types";

/**
 * A task component
 * @param {string} props.title A task to execute
 * @param {string} [props.description] A description for the task
 * 
 * 
 * @example
 * <Task title={Ma tâche} />
 * <Task title={Ma tâche} description={Helloooo}/>

 */
const Task = (props) => {
    return ( 
        <div className="task">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
     );
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

Task.defaultProps = {
    title: "Lorem Ipsum",
    description: "Big description"
};
 
export default Task;