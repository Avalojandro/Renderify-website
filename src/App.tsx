import "./App.css";

function App() {
  return (
    <>
      <div className="pb-12 w-full pattern z-0 bg-[#eeeaff] px-12">
        <div className="z-50">
          <div className="text-center pt-12 lg:pt-24">
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
                <div className="bg-gray-700 text-left p-3 rounded-b-xl text-white">
                  <code> npm i renderify-js </code>
                  <div className="mt-16">
                    <a
                      href="https://github.com/Avalojandro/Renderify"
                      target="_blank"
                    >
                      <svg
                        className="ml-auto mt-auto size-8 fill-white hover:fill-pink-500 rotate-360 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z" />
                      </svg>
                    </a>
                  </div>
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
            <p className="text-gray-700 text-sm md:text-base font-normal">
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
            <p className="text-gray-700 text-sm md:text-base font-normal">
              If you want to display an alternative element when the condition
              is false, you can use the{" "}
              <pre className="inline font-semibold text-pink-500">elseShow</pre>{" "}
              prop to specify what should be rendered instead.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto items-center gap-8 pt-24">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 pb-2">
              Delay
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-normal">
              The{" "}
              <pre className="inline font-semibold text-pink-500">delay</pre>{" "}
              prop allows you to postpone the rendering of the children by a
              specified number of milliseconds. It accepts a numeric value and
              is useful when you want to introduce a slight delay before showing
              the content.
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
            <p className="text-gray-700 text-sm md:text-base font-normal">
              If you need to keep the non-rendered element in the DOM but simply
              hidden, you can use the{" "}
              <pre className="inline font-semibold text-pink-500">
                noDestroy
              </pre>{" "}
              prop. This ensures the element is preserved rather than removed,
              which can be useful for maintaining state or avoiding re-mounting.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 max-w-[1000px] mx-auto items-center gap-8 pt-24">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 pb-2">
              onShow / onHide
            </h2>
            <p className="text-gray-700 text-sm md:text-base font-normal">
              The{" "}
              <pre className="inline font-semibold text-pink-500">onShow</pre>{" "}
              and{" "}
              <pre className="inline font-semibold text-pink-500">onHide</pre>{" "}
              props are event callbacks that are triggered when the element is
              shown or hidden, respectively.
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

        <div className="text-center font-normal items-center text-gray-700 pt-24">
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
            by{" "}
            <a target="_blank" href="https://github.com/Avalojandro">
              <b className="hover:text-pink-600">Avalojandro</b>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;

// fff9ea
// 64cbd0
