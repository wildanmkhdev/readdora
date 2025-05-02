import CountUp from "../../Reactbits/CountUp/CountUp";

const View = () => {
  const stats = [
    { title: "Student", value: 67, duration: 1 },
    { title: "Readers", value: 160, duration: 1.5 },
    { title: "Tech Enthusiast", value: 45, duration: 2 },
  ];

  return (
    <div className="container">
      <h2 className="sm:text-1xl mb-8 text-center text-2xl font-bold text-white lg:text-4xl">
        Website Static Overview
      </h2>
      <div className="flex flex-col items-center justify-center gap-6 p-4 md:flex-row">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-full max-w-xs rounded-2xl border border-white/20 p-6 text-center shadow-2xl backdrop-blur-lg sm:max-w-sm md:max-w-md lg:max-w-sm"
          >
            <h1 className="mb-2 font-mono text-4xl font-extrabold text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={stat.duration}
                className="inline"
              />
            </h1>
            <p className="text-base font-medium text-white sm:text-lg md:text-xl">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
