const About = () => {
  return (
    <div className="lg:flex items-center mt-8 gap-5">
      <div className="w-1/2">
        <h2 className="font-bold text-3xl ">
          Welcome to Our NestShop
        </h2>
        <p className=" w-3/4 mt-6 text-gray-600 ">
          At Nestshop, we believe in creating a home that's as unique as you
          are. Our mission is to offer a wide range of quality home goods and
          lifestyle products that bring style, comfort, and functionality to
          every space. Whether you're looking for the latest decor trends,
          essential homeware, or unique finds, Nestshop is here to make your
          home shopping experience effortless and enjoyable.
        </p>
      </div>
      {/* rating card  */}
      <div className="w-1/2 lg:mr-10">
        <img className="w-full rounded-md " src="../../public/images/happy-financial-consultant-greeting-his-clients-while-meeting-them-their-home-me-are-shaking-hands.jpg" alt="" />
        
        <div className=" ml-8 mt-5">
          <div className="flex gap-10 items-center mb-8">
            <div className="bg-slate-100 w-40 shadow-lg p-4 rounded-md">
              <h4 className="text-xl font-bold">4.5</h4>
              <p className="text-gray-600">Our Rating</p>
            </div>
            <div className="bg-slate-100 w-40 shadow-lg p-4 rounded-md">
              <h4 className="text-xl font-bold">55</h4>
              <p className="text-gray-600">Project Chellange</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="bg-slate-100 w-40 shadow-lg p-4 rounded-md">
              <h4 className="text-xl font-bold">2000</h4>
              <p className="text-gray-600">Our Client</p>
            </div>
            <div className="bg-slate-100 w-40 shadow-lg p-4 rounded-md">
              <h4 className="text-xl font-bold">850+</h4>
              <p className="text-gray-600">Positive Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
