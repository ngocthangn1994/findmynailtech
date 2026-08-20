import logo from "../assets/logo_footer.png";
function Footer() {
  const nailTechs = ["Top Rated", "Available Today", "Near Me", "Services"];
  const customers = ["How It Works", "Bookings", "Reviews", "Help Center"];
  const company = ["About Us", "Careers", "Contact", "Blog"];
  const legal = [
    "Terms of Service",
    "Privacy Policy",
    "Cancellation Policy",
    "Cookies Policy",
  ];
  return (
    <>
      <div className="bg-black grid grid-cols-5 p-10 text-white">
        <div className="w-full h-12">
          <img className="w-full h-full object-cover" src={logo} />
          <div className="text-center">
            <p>Beautiful nails</p>
            <p>Deliveried to your door.</p>
          </div>
        </div>
        <div>
          <p className="font-bold">Find Nail Techs</p>
          {nailTechs.map((item) => (
            <div className="">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-bold">For Customers</p>
          {customers.map((item) => (
            <div className="">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-bold">Company</p>
          {company.map((item) => (
            <div className="">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-bold">Legal</p>
          {legal.map((item) => (
            <div className="">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Footer;
