
/*
    Footer component
 */

// Major section: Footer component
const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">


        <div>
          <h2 className="text-lg font-bold text-white">
            New Generation High School
          </h2>
          <p className="mt-2 text-sm leading-6">
            New school where every student is welcome and taught.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold text-white">Our address</h3>
          <p className="mt-2 text-sm leading-6">
            123 School Avenue
            <br />
            Calgary, AB, Canada
          </p>
        </div>


        <div>
          <h3 className="font-semibold text-white">Contact us</h3>
          <p className="mt-2 text-sm leading-6">
            Phone: (000) 000-0000
          </p>
          <a
            href="mailto:newgeneration@gmail.com"
            className="text-sm text-indigo-300 hover:text-white"
          >
            newgeneration@gmail.com
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
