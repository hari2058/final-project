import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-row-3 bg-[rgb(129,154,145)] text-white p-2 ">
        <div>
          <div className="flex relative justify-center">
            <div className="p-2">
              <Link to={"/"}>
                <h1 className=" flex justify-center text-3xl ">SASTO BAZAR</h1>
              </Link>
            </div>

            <Link to={"/Login"}>
              <button
                type="button"
                className=" absolute right-15  top-2 border rounded-sm p-1 cursor-pointer"
              >
                LOGIN
              </button>
            </Link>

            <button
              type="button"
              className=" absolute right-0 top-2 border rounded-sm p-1"
            >
              CART
            </button>
          </div>
        </div>
        <div className="border "></div>
        <div className="flex flex-row justify-around p-3">
          <Link to={"/"}>
            <h3>HOME</h3>
          </Link>
          <Link to={"/Shop"}>
            <h3>SHOP</h3>
          </Link>

          <Link to={"/Products"}>
            <h3>PRODUCTS</h3>
          </Link>
          <Link to={"/Contact"}>
            <h3>CONTACT</h3>
          </Link>
          <Link to={"/AboutUs"}>
            <h3>ABOUT US</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
