const convertToDate = (unixTimestamp) => {
    return {
      hour:new Date(unixTimestamp * 1000).getHours().toLocaleString(),
      min:new Date(unixTimestamp * 1000).getMinutes().toLocaleString(),
      full:new Date(unixTimestamp * 1000).toLocaleString()
    }
} 

const Sunrise = ({sunriseTime}) => {
    const time = convertToDate(sunriseTime)
  return (
    <div>
      <h3 className='font-medium'>Sunrise</h3>
      <p className='font-bold text-2xl'>{time.hour}:{`${time.min < 10 ? "0" + time.min : time.min}`}</p>
    </div>
  );
};

const Sunset = ( {sunsetTime} ) => {
  // Lógica y renderizado del atardecer
  const time = convertToDate(sunsetTime)
  return (
    <div>
      <h3 className='font-medium'>Sunset</h3>
      <p className='font-bold text-2xl'>{time.hour}:{`${time.min < 10 ? "0" + time.min : time.min}`}</p>
    </div>
  );
};

const SunriseSunset = ({ sunrise, sunset }) => {
  return (
    <div className="sunrise-sunset">
      <Sunrise sunriseTime={sunrise} />
      <Sunset sunsetTime={sunset} />
    </div>
  );
};

export { SunriseSunset };