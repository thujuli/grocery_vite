function ButtonOval(props) {
    const {mode, children} = props
    const buttonStyle = `h-7 mx-16 px-4 rounded-3xl font-normal align-middle shadow-md text-xs ${
        mode === "dark" ? 'bg-[#2e4859] text-white' : 'bg-white text-black'
      }`;
    
      return (
        <button
          className={buttonStyle}
          style={{ fontFamily: "Roboto"}}
        >
          {children}
        </button>
  )
}

export default ButtonOval
