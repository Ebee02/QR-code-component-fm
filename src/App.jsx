import "./index.css";
function App() {
  const backgroundImageStyle = {
    backgroundImage: "url(../../../images/image-qr-code.png)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
    <>
      {/* <!-- main-container starts--> */}
      <div className="main-container h-screen antialiased text-slate-800 flex flex-col items-center justify-center bg-[#d6e2f0]">
        <div class=" w-[310px] bg-[#ffffff] p-4 border-none rounded-2xl shadow-gray-400 shadow-lg my-10">
          {/* <!-- image div starts --> */}
          <div
            class="image flex-1 h-[270px] rounded-xl mb-3 cursor-pointer"
            style={backgroundImageStyle}
          ></div>
          {/* <!-- image div end --> */}
          {/* <!-- content div start --> */}
          <div class="content flex-1 px-5">
            <h2 class="heading text-lg text-center font-bold text-[#1f3251] mb-2">
              Improve your front-end skills by building projects
            </h2>
            <p class=" text-center text-[#7b879d] font-medium">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
          {/* <!-- content div end --> */}
        </div>
        {/* <!-- main-container end --> */}

        {/* <!-- attribution div starts --> */}
        <div class="attribution text-lg font-semibold text-center mb-4">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#" class="text-[#3e52a3]">
            Tech-Rocket
          </a>
          .
        </div>
        {/* <!-- attribution div end --> */}
      </div>
    </>
  );
}

export default App;
