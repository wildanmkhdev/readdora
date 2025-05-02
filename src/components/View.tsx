import CountUp from "../../Reactbits/CountUp/CountUp";

const View = () => {
  return (
    <div className="container">
      <h2 className="sm:text-1xl mb-8 text-center text-2xl font-bold text-white lg:text-4xl">
        Website Static Overview
      </h2>
      <div className="flex flex-col items-center justify-center gap-6 p-4 md:flex-row">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-xs rounded-2xl border border-white/20 p-6 text-center shadow-2xl backdrop-blur-lg sm:max-w-sm md:max-w-md lg:max-w-sm"
          >
            <h1 className="mb-2 font-mono text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="inline"
              />
            </h1>
            <p className="text-base font-medium text-white sm:text-lg md:text-xl">
              Visitors Reached!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
