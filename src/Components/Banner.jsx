import mbappe from "../assets/mbappe.png";
import football from "../assets/soccer-goal-top-png-8 4.png"
import psg from "../assets/Card-psg.png"
import line from "../assets/Line Marker.png"


const Banner = () => {
  return (
    <div className="relative bg-black w-full h-[600px] flex justify-between items-center">
      <div>
        <img src={mbappe} className="absolute bottom-0 -m-[21px] animate-pulse duration-1000" ></img>
      </div>

      <div className="text-center flex flex-col items-center gap-8 relative">
        <h1 className="banner-font text-5xl font-extrabold text-orange-600">Select Your Fav Players</h1>
            <img src={line} className="absolute top-12 -right-10"></img>
        <p className="text-white  w-[600px] text-center">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>

      <div>
        <div className="absolute top-20 right-24">
            <img src={psg} className=""></img>
        </div>
        <div className="bg-white/10 absolute bottom-0 right-0 pt-20 pl-20 rounded-tl-full"
        >
            <img src={football} className="" ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
