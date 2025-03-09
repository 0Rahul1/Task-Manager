
import Task from './Task';

function TaskList({ tasks, onRemoveTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet. Add some!</p>
      ) : (
        tasks.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            onRemove={() => onRemoveTask(index)} 
          />
        ))
      )}
    </div>
  );
}

export default TaskList;