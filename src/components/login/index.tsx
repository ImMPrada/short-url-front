
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className='font-sans text-lg text-center mb-4 xl:text-2xl text-gray-700 tracking-widest'>Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="bg-cyan text-white py-3.5 px-8 rounded-xl font-sans font-bold max-xl:w-full">Login</button>
        </form>
      </div>
    </div>
  );
}
