export const Humidity = ({data}) => {
    return(
        <div className="humidity">
            {data.main ? <p className='text-xl font-semibold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
        </div>
    )
}