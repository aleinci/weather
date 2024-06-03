export const Pressure = ({data}) =>{
    return(
        <div>
            <p className='text-xl font-semibold'>{data.main.pressure} hPa</p>
            <p>Pressure</p>
        </div>
    )
}

export const SeaPressure = ({data, className}) =>{
    return(
        <div className={className}>
            <p>sea ​​level pressure</p>
            <p className='text-xl'>{data.main.sea_level} hPa</p>
        </div>
    )
}

export const GroundPressure = ({data, className}) =>{
    return(
        <div className={className}>
            <p>ground ​​level pressure</p>
            <p className='text-xl'>{data.main.grnd_level} hPa</p>
        </div>
    )
}