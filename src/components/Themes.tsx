const Theme = () => {
  return (
    <div className="bg-[#242425] w-screen">
      <div className="flex justify-center items-center p-3">
        <div className="absolute text-white text-[64px] font-medium font-['Inter']">
          Themes
        </div>
        <div className="opacity-10 text-neutral-200 md:text-[120px] font-extrabold font-['Inter'] text-[90px]">
          TRACKS
        </div>
      </div>

      <div className="h-[95px] mx-auto text-center px-4">
        <span className="text-white text-2xl font-normal font-['Inter'] italic">
          Embark on a journey where the{" "}
        </span>
        <span className="text-white text-2xl font-extrabold font-['Inter']">
          boundaries
        </span>
        <span className="text-white text-2xl font-normal font-['Inter'] italic">
          {" "}
          of possibility are pushed to new horizons.
        </span>
      </div>

      <div className="flex justify-evenly items-center flex-wrap bg-[url('/images/blend.png')] bg-cover bg-no-repeat h-[490px] ">
        <div className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px] border-2 border-white text-center text-white mx-3">
          <p>Data Science</p>
          <img
            src="/images/datascience icon.png"
            className="absolute top-[40px] left-[-16px]"
          />
        </div>
        <div className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px] border-2 border-white text-center text-white mx-3">
          <p>Blockchain</p>
          <img
            src="/images/blockchain icon.png"
            className="absolute top-[40px] left-[-16px]"
          />
        </div>
        <div className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px] border-2 border-white text-center text-white mx-3">
          <p>UX Design</p>
          <img
            src="/images/ux design icon.png"
            className="absolute top-[25px] left-[-18px]"
          />
        </div>
        <div className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px] border-2 border-white text-center text-white mx-3">
          <p>Development</p>
          <img
            src="/images/development icon.png"
            className="absolute top-[40px] left-[-16px]"
          />
        </div>
        <div className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px] border-2 border-white text-center text-white mx-3">
          <p>Open Innovation</p>
          <img
            src="/images/open innovation icon.png"
            className="absolute top-[35px] left-[-16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Theme;
