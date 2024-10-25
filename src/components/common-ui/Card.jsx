// eslint-disable-next-line react/prop-types
const Card = ({ src, title, instructor, price, students }) => {
  return (
    <div className="h-[350px] w-[300px] rounded-t-lg shadow-lg">
      <img
       className="border-2 rounded-t-lg w-80 aspect-video"
       src={src} alt="" 
       />

       <div className="montserrat p-4 h-[50%] flex flex-col justify-around">
        <h1 className="font-[800]">
            {title}
        </h1>
        <div className="flex flex-col gap-2 mt-2">
            <p>Created by {instructor}</p>
            <p>({students}) enrolled</p>
        </div>
            <h2 className="text-4xl mt-2 font-bold">$ {price}</h2>
       </div>
    </div>
  )
}

export default Card