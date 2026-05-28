const Button = ({ButtonText, variant}) => {
  return (
    <button className={`${variant == "primary"?"bg-secondary":"bg-foreground"} font-poppins px-6 
      md:px-8 py-2 rounded-md  text-alternate`}>{ButtonText}</button>
  )
}

export default Button