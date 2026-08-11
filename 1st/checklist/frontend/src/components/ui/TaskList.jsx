export default function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
      return (
        <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-8 text-center">
          <p className="text-sm text-gray-500">No hay tareas todavía.</p>
        </div>
      );
    }
  
    const completed = tasks.filter((t) => t.completed).length;
  
    return (
      <fieldset className="mt-6">
        <legend className="text-base font-semibold leading-6 text-gray-900">
          Tareas ({completed}/{tasks.length} completadas)
        </legend>
        <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
          {tasks.map((task) => (
            <div key={task.id} className="relative flex items-start gap-3 py-4">
              <div className="ml-3 flex h-6 items-center">
                <input
                  id={`task-${task.id}`}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggle(task)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label
                  htmlFor={`task-${task.id}`}
                  className={`select-none font-medium ${
                    task.completed ? 'text-gray-400 line-through' : 'text-gray-900'
                  }`}
                >
                  {task.title}
                </label>
              </div>
              <button
                type="button"
                onClick={() => onDelete(task.id)}
                className="text-sm text-red-600 hover:text-red-500"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </fieldset>
    );
  }