

const Hero = () => {
  return (
    <div className="relative w-full border-t-1 sm:flex londrina">
        <h1 className="absolute text-4xl w-60 ml-2 top-[2vw] left-[2vw]
        md:top-[3vw] md:left-[3vw] md:text-5xl lg:text-[5vw] lg:w-[35%]">
            Learn New Skills 
            <span className="text-blue-600"> Anytime</span>,
            <span className="text-red-600"> Anywhere</span>.
        </h1>
        <img
          className="w-full sm:w-[70%]"
          src="/images/Mask-group.svg" alt="" 
        />
        <img
          className="hidden sm:block w-full sm:w-[30%]"
          src="/images/study-img.svg" alt="" 
        />
    </div>
  )
}

export default Hero