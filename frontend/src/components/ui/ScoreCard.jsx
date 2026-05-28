
const ScoreCard = ({title, value}) => {
  return (
    <div className="md:px-5 md:py-5 px-3 py-5 shadow-2xl bg-primary rounded-md space-y-4">
      <p className="text-secondary/80 text-sm  md:text-xl font-normal md:italic">{title}</p>
      <h3 className="text-white font-bold text-4xl">{value}</h3>
    </div>
  )
}

export default ScoreCard