import expe from "../../public/asdf.jpg";

function Experiance() {
  const cardItem = [{ logo: expe, name: "Fresher" }];

  return (
    <div name="Experiance"
    className="max-w-screen-3xl container mx-auto px-4 md:px-20 my-16 ">
      <h1 className="text-3xl font-bold mb-5">Fresher</h1>
      <p>I have no Experiance IT industry.</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {cardItem.map(({ logo, name }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
          >
            <img src={logo} className="w-[150px] rounded-full" alt={name} />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;



