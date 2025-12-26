function Bouton( {text}) {
    return (
        <>
            <div className="flex justify-center mb-20">
                <button className="px-6 py-3 mt-5 bg-black text-white text-lg font-semibold rounded-full hover:scale-110 transition-all duration-300 hover:cursor-pointer">
                    {text}
                </button>
            </div>
        </>
    )}
    
export default Bouton