import video from "./../assets/tutorial-video.mp4";

function Tutorial() {
  return (
    <div className="flex flex-col gap-4 items-center p-20 justify-center w-full h-[100vh]">
      <div className="flex flex-col justify-start w-full gap-4 mt-20">
        <h1 className="text-3xl font-nunito font-semibold text-black">
          How the app works
        </h1>
        <div>
          <p className="text-lg font-nunito text-black">
            This is a short tutorial on how to use the app, to get you started.
          </p>
        </div>
      </div>
      <video
        src={video}
        controls
        className="w-full border-4 rounded-lg border-black"
      />
    </div>
  );
}
export default Tutorial;
