import React from "react";
import Image from "next/image";
import i2 from "@/app/images/i2.jpg";

function Page() {
  return (
    <div>
      {" "}
      <div className="img">
        <Image
          src={i2}
          style={{
            width: "100%",
            height: "250",
          }}
          className="hidden md:block"
          alt="pizza"
        />
      </div>{" "}
    </div>
  );
}

export default Page;
