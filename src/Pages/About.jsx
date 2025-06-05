const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome to <span className="text-green-500">NestShop</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At NestShop, we believe in making your home a true reflection of
            your personality. From elegant décor to everyday essentials, our
            curated collections bring quality, comfort, and modern style to
            every room. Whether you're revamping your space or searching for
            something special, we're here to make your experience simple and
            satisfying.
          </p>
        </div>

        {/* Image & Stats */}
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-none mb-6">
            <img
              src="../../public/images/happy-financial-consultant-greeting-his-clients-while-meeting-them-their-home-me-are-shaking-hands.jpg"
              alt="Consulting"
              className="w-full object-cover h-64 md:h-80"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "4.5", subtitle: "Our Rating" },
              { title: "55", subtitle: "Project Challenges" },
              { title: "2,000+", subtitle: "Our Clients" },
              { title: "850+", subtitle: "Positive Reviews" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow hover:shadow-md dark:hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {stat.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
