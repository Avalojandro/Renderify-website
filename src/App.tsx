import "./App.css";

function App() {
  return (
    <>
      <div className="pb-12 w-full pattern z-0 bg-[#eeeaff] px-12">
        <div className="z-50">
          <div className="text-center pt-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold pb-1">
              &lt;Renderify /&gt;
            </h1>

            <p className="pt-2 pb-8 text-sm md:text-lg text-gray-700 font-semibold">
              Render components easily and elegantly
            </p>

            <div className="max-w-[600px] mx-auto">
              <div className="bg-gray-800 rounded-xl shadow-2xl">
                <div className="flex space-x-2 p-3">
                  <div className="rounded-full w-4 h-4 cursor-pointer bg-pink-500 hover:bg-pink-700"></div>
                  <div className="rounded-full w-4 h-4 cursor-pointer bg-yellow-300 hover:bg-yellow-500"></div>
                  <div className="rounded-full w-4 h-4 cursor-pointer bg-emerald-400 hover:bg-emerald-600"></div>
                </div>
                <div className="bg-gray-700 text-left p-3 rounded-b-xl text-white pb-24">
                  <code> npm install renderify</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto items-center gap-8 pt-24">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 pb-2">
              Usage
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Renderify lets you dynamically render elements based on a
              condition in a clean and easy-to-control way. Simply import
              Renderify into your file, provide a boolean condition, and place
              the content you want to render inside its children.
            </p>
          </div>
          <div className="">
            <pre className="bg-gray-800 text-sm rounded-xl overflow-auto p-4 text-white whitespace-pre-wrap break-words max-w-full box-border">
              <div className="text-base/8">
                <span className="text-pink-500">&lt;Renderify</span>
                <br />
                &nbsp;
                <span className="text-purple-300">condition</span>
                <span className="text-white ">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ isTrue }`}</span>&nbsp;
                <span className="text-pink-500">&nbsp;&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-teal-300">&lt;MyComponent /&gt;</span>
                <br />
                <span className="text-pink-500">&lt;/Renderify&gt;</span>
              </div>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto items-center gap-8 pt-24">
          <div className="order-2 md:order-1">
            <pre className="bg-gray-800 text-sm rounded-xl p-4 text-white overflow-auto whitespace-pre-wrap break-words max-w-full box-border">
              <div className="text-base/8">
                <span className="text-pink-500">&lt;Renderify</span>
                <br />
                &nbsp;
                <span className="text-purple-300">condition</span>
                <span className="text-white ">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ isTrue }`}</span>
                <br />
                &nbsp;
                <span className="text-purple-300">elseShow</span>
                <span className="text-white ">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ <AnotherComponent /> }`}</span>
                <span className="text-pink-500">&nbsp;&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-teal-300">&lt;MyComponent /&gt;</span>
                <br />
                <span className="text-pink-500">&lt;/Renderify&gt;</span>
              </div>
            </pre>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 pb-2">
              elseShow
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              If you want to display an alternative element when the condition
              is false, you can use the{" "}
              <pre className="inline font-semibold">elseShow</pre> prop to
              specify what should be rendered instead.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto items-center gap-8 pt-24">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 pb-2">
              Delay
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              The <pre className="inline font-semibold">delay</pre> prop allows
              you to postpone the rendering of the children by a specified
              number of milliseconds. It accepts a numeric value and is useful
              when you want to introduce a slight delay before showing the
              content.
            </p>
          </div>
          <div>
            <pre className="bg-gray-800 text-sm rounded-xl p-4 text-white overflow-auto whitespace-pre-wrap break-words max-w-full box-border">
              <div className="text-base/8">
                <span className="text-pink-500">&lt;Renderify</span>
                <br />
                &nbsp;
                <span className="text-purple-300">condition</span>
                <span className="text-white ">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ isTrue }`}</span>
                <br />
                &nbsp;
                <span className="text-purple-300">delay</span>
                <span className="text-white ">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ 500 }`}</span>
                <span className="text-pink-500">&nbsp;&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-teal-300">&lt;MyComponent /&gt;</span>
                <br />
                <span className="text-pink-500">&lt;/Renderify&gt;</span>
              </div>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto items-center gap-8 pt-24">
          <div className="order-2 md:order-1">
            <pre className="bg-gray-800 text-sm rounded-xl p-4 text-white overflow-auto whitespace-pre-wrap break-words max-w-full box-border">
              <div className="text-base/8">
                <span className="text-pink-500">&lt;Renderify</span>
                <br />
                &nbsp;
                <span className="text-purple-300">condition</span>
                <span className="text-white">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ isTrue }`}</span>
                <br />
                &nbsp;
                <span className="text-purple-300">elseShow</span>
                <span className="text-white">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ <AnotherComponent /> }`}</span>
                <br />
                <span className="text-purple-300">&nbsp;noDestroy</span>
                <span className="text-pink-500">&nbsp;&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-teal-300">&lt;MyComponent /&gt;</span>
                <br />
                <span className="text-pink-500">&lt;/Renderify&gt;</span>
              </div>
            </pre>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 pb-2">
              noDestroy
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              If you need to keep the non-rendered element in the DOM but simply
              hidden, you can use the{" "}
              <pre className="inline font-semibold">noDestroy</pre> prop. This
              ensures the element is preserved rather than removed, which can be
              useful for maintaining state or avoiding re-mounting.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto items-center gap-8 pt-24">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 pb-2">
              onShow / onHide
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              The <pre className="inline font-semibold">onShow</pre> and{" "}
              <pre className="inline font-semibold">onHide</pre> props are event
              callbacks that are triggered when the element is shown or hidden,
              respectively.
            </p>
          </div>
          <div>
            <pre className="bg-gray-800 text-sm rounded-xl p-4 text-white overflow-auto whitespace-pre-wrap break-words max-w-full box-border">
              <div className="text-base/8">
                <span className="text-pink-500">&lt;Renderify</span>
                <br />
                &nbsp;
                <span className="text-purple-300">condition</span>
                <span className="text-white">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ isTrue }`}</span>
                <br />
                &nbsp;
                <span className="text-purple-300">onShow</span>
                <span className="text-white">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ () => {} }`}</span>
                <br />
                &nbsp;
                <span className="text-purple-300">onHide</span>
                <span className="text-white">&nbsp;=&nbsp;</span>
                <span className="text-yellow-300">{`{ () => {} }`}</span>
                <span className="text-pink-500">&nbsp;&gt;</span>
                <br />
                &nbsp;&nbsp;
                <span className="text-teal-300">&lt;MyComponent /&gt;</span>
                <br />
                <span className="text-pink-500">&lt;/Renderify&gt;</span>
              </div>
            </pre>
          </div>
        </div>

        <div className="text-center items-center text-gray-700 pt-24">
          <span> Made with</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 mx-1 inline text-pink-600"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          <span>
            {" "}
            by <a target="_blank" href="https://github.com/Avalojandro"><b className="hover:text-pink-600">Avalojandro</b></a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;

// fff9ea
// 64cbd0
