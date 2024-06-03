export const Visibility = ({data, className}) => {
    return(
        <div className={className}>
          <p>Visibility</p>
          <p className='text-xl'>{(data.visibility / 1000).toFixed(1)}Km</p>  
        </div>
    )
}