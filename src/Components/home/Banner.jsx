const Banner = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      {/* Carousel Container */}
      <div className="carousel w-full h-[300px]">
        {/* Slide 1 */}
        <div id="item1" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/LjWVDKH/header.jpg"
            className="w-full h-full object-cover block m-0 p-0"
            alt="Slide 1"
          />
          {/* Overlay Content */}
          <div className="absolute left-6 bottom-4 bg-gray-400 bg-opacity-50 p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-xl font-bold">Elden Ring</h2>
            <p className="text-sm mt-1">A dark fantasy RPG with epic boss battles and open-world lore.</p>
          </div>
        </div>
        
        {/* Slide 2 */}
        <div id="item2" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/Z1FQsMxf/god-of-war-ragnarok-title.jpg"
            className="w-full h-full object-cover block m-0 p-0"
            alt="Slide 2"
          />
          <div className="absolute left-6 bottom-6 bg-gray-400 bg-opacity-50 p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-xl font-bold">The Legend of Zelda</h2>
            <p className="text-sm mt-1">Explore vast worlds and solve ancient puzzles with Link.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="item3" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/N62MX8kv/1200-cb-20220913150240.png"
            className="w-full h-full object-cover block m-0 p-0"
            alt="Slide 3"
          />
          <div className="absolute left-6 bottom-6 bg-gray-400 bg-opacity-50 p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-xl font-bold">The Legend of Zelda</h2>
            <p className="text-sm mt-1">Explore vast worlds and solve ancient puzzles with Link.</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="item4" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/vvDbHj8P/ab67616d0000b2736842c99f481b8560a7db0b35.jpg"
            className="w-full h-full object-cover block m-0 p-0"
            alt="Slide 4"
          />
          <div className="absolute left-6 bottom-6 bg-gray-400 bg-opacity-50 p-4 rounded-lg text-white max-w-xs">
            <h2 className="text-xl font-bold">Hogwarts Legacy</h2>
            <p className="text-sm mt-1">Experience magic, mystery, and adventure in the wizarding world.</p>
          </div>
        
        </div>
      </div>

      {/* Navigation Dots */}
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
