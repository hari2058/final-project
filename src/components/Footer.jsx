import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col bg-[rgb(167,193,168)] gap-2 p-2">
        <div className="flex justify-center items-center ">
          <h1 className="text-3xl font-medium">SASTO BAZAR</h1>
        </div>

        <div className="border"></div>

        <div className=" grid grid-cols-4 justify-around ">
          <div className=" grid justify-center items-center ">
            <p>We'd love to hear what you think!</p>
            <button className="border rounded-md bg-[rgb(238,239,224)] p-2 ">
              Give Feedback
            </button>
          </div>
          <div className=" grid justify-center items-center">
            <h2 className="text-2xl font-medium">Contact - Us</h2>
            <div className="grid gap-5">
              <p className="flex gap-3">
                <img src="mail.png" alt="" className="w-6" />
                <span>sastobazar@gmail.com</span>
              </p>
              <p className="flex gap-3">
                <img src="phone-call.png" alt="" className="w-6" />
                <span>9812345678</span>
              </p>
            </div>
          </div>
          <div className=" grid justify-center items-center">
            <div className="flex justify-center items-center">
              {" "}
              <span>
                <h3 className="text-2xl font-medium">Support</h3>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <span>Contact Us</span>
              <span>Shipping & Returns</span>
              <span>Order Status</span>
              <span>Gifts Crad</span>
            </div>
          </div>
          <div className=" grid justify-center items-center">
            <div>
              <span>
                <h3 className="text-2xl font-medium">About Us</h3>
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <span>Jobs</span>
              <span>Story</span>
              <span>Wholesale</span>
              <span>Blog</span>
              <span>Location</span>
            </div>
          </div>
        </div>
        <div className="border "></div>
        <div>
          <div className="flex gap-10  p-2">
            <span>TERMS OF USE</span>
            <span>ACCESSIBILITY STATEMENT</span>
            <span>PRIVACY POLICY</span>
          </div>
          <div className="flex justify-between p-2">
            <span>&#169; 2025 SAST0 BAZAR , ALL RIGHTS RESERVED</span>
            <span>TILOTTAMA,MANIGRAM, RUPANDEHI NEPAL</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
