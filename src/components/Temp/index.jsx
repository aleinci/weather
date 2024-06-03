const FahrenheitToCelcius = (degFahrenheit) =>{
  return Math.floor((degFahrenheit - 32) * 5/9);
}

export const Temp = ({data}) => {
return(
        <div>
          <h1 className='text-5xl font-bold'>{FahrenheitToCelcius(data.main.temp)}°<span className="text-3xl absolute">C</span></h1>  
        </div>
    )
}

export const MaxMinTemp = ({data, className}) => {
return(
    <div className={className}>
      <p>temp max/min</p>
      <p className='text-xl'>{FahrenheitToCelcius(data.main.temp_max)}° / {FahrenheitToCelcius(data.main.temp_min)}°</p>
    </div>
  )
}