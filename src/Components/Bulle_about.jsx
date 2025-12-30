function Bulle_about({text}) {
  return (
        <div className="bg-black w-40 h-40 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer m-15">
            <div>
                <h2 className="text-white text-center p-4">{text}
                </h2>
            </div>
        </div>
  );
}

export default Bulle_about;