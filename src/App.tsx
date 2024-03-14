function App() {
  return (
    <div className="max-w-3xl px-4 mx-auto my-16">
      {[1, 2].map((item) => (
        <div key={item} className="flex bg-white p-6 rounded-lg mb-6 last:mb-0">
          <div className="text-center h-full bg-gray-100 p-3 rounded-lg *:pb-1 last:*:pb-0 *:font-bold text-indigo-700">
            <button className="text-indigo-700/40">+</button>
            <p>12</p>
            <button className="text-indigo-700/40">-</button>
          </div>
          <div className="pl-4">
            <div className="flex justify-between">
              <div className="flex items-center  *:mr-4 last:*:mr-0">
                <div className="w-8 h-8">
                  <img
                    src="https://randomuser.me/api/portraits/men/7.jpg"
                    alt="johndoe"
                    className="w-full h-auto rounded-full"
                  />
                </div>
                <p className="font-bold text-zinc-700">johndoe</p>
                <p className="text-gray-700/60 font-normal">1 month</p>
              </div>
              <div>
                <button className="flex items-center text-indigo-700 font-bold">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                  >
                    <path d="M23.808 32c3.554-6.439 4.153-16.26-9.808-15.932v7.932l-12-12 12-12v7.762c16.718-0.436 18.58 14.757 9.808 24.238z"></path>
                  </svg>
                  <span>Reply</span>
                </button>
              </div>
            </div>
            <p className="pt-6 text-gray-700/60">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
              amet, qui minim labore adipisicing minim sint cillum sint
              consectetur cupidatat.
            </p>
          </div>
        </div>
      ))}
      <div className="ml-12 pl-12 border-l-2 ">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex bg-white p-6 rounded-lg mb-6 last:mb-0"
          >
            <div className="text-center h-full bg-gray-100 p-3 rounded-lg *:pb-1 last:*:pb-0 *:font-bold text-indigo-700">
              <button className="text-indigo-700/40">+</button>
              <p>12</p>
              <button className="text-indigo-700/40">-</button>
            </div>
            <div className="pl-4">
              <div className="flex justify-between">
                <div className="flex items-center  *:mr-4 last:*:mr-0">
                  <div className="w-8 h-8">
                    <img
                      src="https://randomuser.me/api/portraits/men/7.jpg"
                      alt="johndoe"
                      className="w-full h-auto rounded-full"
                    />
                  </div>
                  <p className="font-bold text-zinc-700">johndoe</p>
                  <p className="text-gray-700/60 font-normal">1 month</p>
                </div>
                <div>
                  <button className="flex items-center text-indigo-700 font-bold">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                    >
                      <path d="M23.808 32c3.554-6.439 4.153-16.26-9.808-15.932v7.932l-12-12 12-12v7.762c16.718-0.436 18.58 14.757 9.808 24.238z"></path>
                    </svg>
                    <span>Reply</span>
                  </button>
                </div>
              </div>
              <p className="pt-6 text-gray-700/60">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
                amet, qui minim labore adipisicing minim sint cillum sint
                consectetur cupidatat.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
