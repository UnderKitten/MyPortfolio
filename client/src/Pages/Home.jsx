import Position from "../Components/Position";

const Home = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col-reverse text-[30px] justify-around items-center gap-1">
        <div>
          <h1>Hello there!</h1>
          <h1>
            My name is{" "}
            <strong className="text-fuchsia-500">MAXIM CHURZIN</strong>
          </h1>
          <div className="text-fuchsia-500 font-bold pt-10">
            <Position />
          </div>
        </div>
        <img
          className="rounded-full h-50"
          src="../src/assets/profile.jpg"
          alt="Profile picture"
        />
      </div>
    </div>
  );
};

export default Home;
