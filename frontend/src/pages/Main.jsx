import Login from "../components/Login";

export default function Main() {
  return (
    <div className="bg-backscreen h-screen w-auto overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Video */}
        <video
          id="videoElement"
          src="https://esportsworldcup.com/assets/04_Gold_Exploration_01_4_c9e364c783.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* <script>
          document.getElementById('videoElement').playbackRate = 0.5; // Slows
          the video to half speed
        </script> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-backscreen bg-opacity-50"></div>

        {/* Main Content */}
        <div className="relative z-10 flex h-full">
          {/* Left side content */}
          <div className="w-1/2 flex flex-col p-8">
            <div className="items-start mb-8 relative z-10 ml-10 mt-8 flex ">
              <img src="/newlogo.png" alt="Logo" className="w-20 h-20 " />
              <img src="/BgremovedGamerzBase.png" alt="Logo" className="h-20" />
            </div>

            <div className="text-white mt-28">
              <h1 className="text-3xl md:text-6xl font-extrabold ml-10 mb-8 text-white">
                Welcome to Esports World
              </h1>
              <h1 className="text-5xl md:text-7xl font-extrabold ml-10 mb-12 text-line">
                GamerzBase
              </h1>
            </div>
          </div>

          {/* Right side home page */}
          <div className="w-1/2 flex items-center pl-10 pt-10 justify-center">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
