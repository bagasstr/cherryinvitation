import React from "react";

const Payment = () => {
  return (
    <section className="section bg-secondary">
      <div className="container ">
        <div className="grid grid-cols-3 lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
          <div className="">
            <h1 className="text-white title">Tentang Kami</h1>
            <p className="text-left text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              repellendus eius voluptates excepturi laboriosam porro omnis dicta
              totam nostrum non cumque tempore, a explicabo, quos ratione,
              commodi est soluta nemo?
            </p>
          </div>
          <div>
            <h1>pembayaran</h1>
            <div>
              <div className="grid grid-cols-3 space-x-4">
                <img
                  src="https://cherryshopcom.netlify.app/assets/BCA-6881a9a4.png"
                  alt=""
                  width={200}
                  className="p-4 border rounded-md bg-100 "
                />
                <img
                  src="https://cherryshopcom.netlify.app/assets/BNI-15049466.png"
                  alt=""
                  width={200}
                  className="p-4 border rounded-md bg-100 "
                />
                <img
                  src="https://cherryshopcom.netlify.app/assets/GOPAY-ead97464.png"
                  alt=""
                  width={200}
                  className="p-4 border rounded-md bg-100 "
                />
                <img
                  src="https://cherryshopcom.netlify.app/assets/indomaret-logo-9481ac47.png"
                  alt=""
                  width={200}
                  className="p-4 border rounded-md bg-100 "
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png"
                  alt=""
                  width={200}
                  className="p-4 border rounded-md bg-100 "
                />
              </div>
            </div>
          </div>
          <div>
            <h1>kontak kami</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
