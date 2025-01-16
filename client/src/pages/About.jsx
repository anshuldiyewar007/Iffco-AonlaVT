import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { motion } from "framer-motion";
import aonlaNewImage from "../assets/Aonla-new-mobile.jpg";

export const About = () => {
  const { user } = useAuth();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="space-y-16 bg-gradient-to-b from-green-100 via-green-50 to-green-100 overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="space-y-6">
            <p className="text-xl text-green-800">
              Hi {user ? user.username : "Guest"}
            </p>
            <h1 className="text-4xl font-bold text-green-800">About Us</h1>
            <p className="text-lg leading-relaxed text-gray-700">
              IFFCO Aonla manufactures Ammonia and Urea and houses two
              production units with a combined capacity of 3480 MTPD of Ammonia
              and 6060 MTPD of Urea.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We are committed to sustainable production, maintaining harmony
              between industrial excellence and environmental sustainability
              across our 694.5-acre facility.
            </p>
            <div className="flex gap-4">
              <NavLink to="/contact">
                <button className="bg-gradient-to-r from-green-700 to-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition">
                  Connect Now
                </button>
                
              </NavLink>
              <NavLink to="/gallery">
              <button className="bg-white border-2 border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                Learn More
              </button>
              </NavLink>
            </div>
          </div>
          <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aonlaNewImage}
              alt="IFFCO Aonla Unit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Our Journey Through Time
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            <div className="space-y-16">
              {[
                {
                  year: "1988",
                  text: "Urea production facility commissioned on 18th May with a capacity of 2200 MTPD. Ammonia production facility commissioned on 15th May using the most advanced technology, producing 1350 MTPD.",
                },
                {
                  year: "1996",
                  text: "Second production unit commissioned with a production capacity of 1350 MTPD of Ammonia & 2200 MTPD of Urea.",
                },
                {
                  year: "2006",
                  text: "Adopted CO2 recovery technology for Urea production, pioneering this in India.",
                },
                {
                  year: "2008",
                  text: "Capacity enhancement project undertaken, boosting production significantly.",
                },
                {
                  year: "2017",
                  text: "Completed energy savings project, reducing composite energy consumption by 0.476 Gcal/MT Urea.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } items-center`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`w-5/12 bg-white p-6 rounded-lg shadow-lg border-2 border-green-100 ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg ${
                        index % 2 === 0 ? "right-[-2rem]" : "left-[-2rem]"
                      }`}
                    ></div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      {item.year}
                    </h3>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production Capacity Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Production Capacity & Technology
          </h2>
          <div className="overflow-hidden bg-white rounded-xl shadow-lg">
            <table className="w-full table-auto">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Product</th>
                  <th className="py-4 px-6 text-left">Daily Capacity (MTPD)</th>
                  <th className="py-4 px-6 text-left">Yearly Capacity (MTPA)</th>
                  <th className="py-4 px-6 text-left">Technology</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    product: "Aonla-I (Ammonia)",
                    daily: "1740",
                    yearly: "5,74,200",
                    tech: "Haldor Topsoe, Denmark",
                  },
                  {
                    product: "Aonla-I (Urea)",
                    daily: "3030",
                    yearly: "9,99,900",
                    tech: "Snampogretti, Italy",
                  },
                  {
                    product: "Aonla-II (Ammonia)",
                    daily: "1740",
                    yearly: "5,74,200",
                    tech: "Haldor Topsoe, Denmark",
                  },
                  {
                    product: "Aonla-II (Urea)",
                    daily: "3030",
                    yearly: "9,99,900",
                    tech: "Snampogretti, Italy",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-green-50 transition"
                  >
                    <td className="py-4 px-6">{row.product}</td>
                    <td className="py-4 px-6">{row.daily}</td>
                    <td className="py-4 px-6">{row.yearly}</td>
                    <td className="py-4 px-6">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
