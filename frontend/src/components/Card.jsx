const Card = ({icon, title, subtitle, bgColor}) => {
  return (
    <div className={`bg-${bgColor} p-6 text-white/60 rounded-md shadow-2xl space-y-3`}>
      <div className="text-2xl text-secondary">{icon}</div>
      <h5 className="text-xl italic text-white">{title}</h5>
      <p className="text-sm">{subtitle}</p>
    </div>
  )
}

export default Card