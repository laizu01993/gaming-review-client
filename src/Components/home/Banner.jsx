

const Banner = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      {/* Carousel Container */}
      <div className="carousel w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg">
        {/* Slide 1 */}
        <div id="item1" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/LjWVDKH/header.jpg"
            className="w-full h-full object-cover"
            alt="Elden Ring"
          />
          <div className="absolute left-4 sm:left-8 bottom-4 bg-gray-400 bg-opacity-50 p-2 sm:p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-base sm:text-xl font-bold">Elden Ring</h2>
            <p className="text-xs sm:text-sm mt-1">A dark fantasy RPG with epic boss battles and open-world lore.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
            <a href="#item4" className="btn btn-circle btn-sm md:btn-md">❮</a>
            <a href="#item2" className="btn btn-circle btn-sm md:btn-md">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="item2" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/Z1FQsMxf/god-of-war-ragnarok-title.jpg"
            className="w-full h-full object-cover"
            alt="God of War"
          />
          <div className="absolute left-4 sm:left-8 bottom-4 bg-gray-400 bg-opacity-50 p-2 sm:p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-base sm:text-xl font-bold">God of War: Ragnarök</h2>
            <p className="text-xs sm:text-sm mt-1">Kratos and Atreus face the Norse apocalypse in this epic sequel.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
            <a href="#item1" className="btn btn-circle btn-sm md:btn-md">❮</a>
            <a href="#item3" className="btn btn-circle btn-sm md:btn-md">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="item3" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/N62MX8kv/1200-cb-20220913150240.png"
            className="w-full h-full object-cover"
            alt="Zelda"
          />
          <div className="absolute left-4 sm:left-8 bottom-4 bg-gray-400 bg-opacity-50 p-2 sm:p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-base sm:text-xl font-bold">Zelda: Tears of the Kingdom</h2>
            <p className="text-xs sm:text-sm mt-1">Explore the skies and dungeons of Hyrule with Link’s new powers.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
            <a href="#item2" className="btn btn-circle btn-sm md:btn-md">❮</a>
            <a href="#item4" className="btn btn-circle btn-sm md:btn-md">❯</a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="item4" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/vvDbHj8P/ab67616d0000b2736842c99f481b8560a7db0b35.jpg"
            className="w-full h-full object-cover"
            alt="Hogwarts"
          />
          <div className="absolute left-4 sm:left-8 bottom-4 bg-gray-400 bg-opacity-50 p-2 sm:p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-base sm:text-xl font-bold">Hogwarts Legacy</h2>
            <p className="text-xs sm:text-sm mt-1">Live your wizard life in the 1800s magical world of Hogwarts.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
            <a href="#item3" className="btn btn-circle btn-sm md:btn-md">❮</a>
            <a href="#item1" className="btn btn-circle btn-sm md:btn-md">❯</a>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Banner;
