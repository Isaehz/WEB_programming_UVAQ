export default function AddTaskForm({ value, onChange, onSubmit, loading }) {
    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Nueva tarea</h3>
          <p className="mt-2 max-w-xl text-sm text-gray-500">
            Escribe algo y agrégalo a tu lista.
          </p>
          <form className="mt-5 sm:flex sm:items-center" onSubmit={onSubmit}>
            <div className="w-full sm:max-w-xs">
              <label htmlFor="title" className="sr-only">Título</label>
              <input
                id="title"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Comprar leche..."
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    );
  }