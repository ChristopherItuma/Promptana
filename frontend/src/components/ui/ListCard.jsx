const ListCard = ({title, items, color, icon}) => {
  return (
    <div className="p-6 rounded-md space-y-2 font-poppins"  style={{backgroundColor:color}}>
      {/* Hedaings */}
       <div className="space-y-1">
        <div className="bg-foreground inline-block text-secondary text-xl p-2 rounded-md">
        {icon}
        </div>
        <h4 className="text-2xl font-semibold">{title}</h4>
       </div>
       {/* Lists */}
       <ul className="space-y-2">
        {
        items.map((item,index)=>(
          <li key={index} className='list-disc list-inside text-white'>
            {item}
          </li>
        ))
        }
       </ul>
    </div>
  )
}

export default ListCard