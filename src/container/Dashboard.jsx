import React from "react";
import { Flex, Button } from "antd";

import Ticket from "./Ticket.jsx";
import { NavLink } from "react-router-dom";

function Dashboard() {
  const ButtonCustomStyle = {
    backgroundColor: "#1890ff",
    borderColor: "#1890ff",
    color: "#fff",
    transition: "background-color 0.3s, color 0.3s",
  };
  const ButtonHoverStyle = {
    backgroundColor: "#096dd9",
    borderColor: "#096dd9",
    color: "#fff",
  };

  return (
    <>
      <div className=" bg-[#CCE8F4] p-3 gap-10 ">
        <section className="flex justify-around items-center flex-row">
          <div className="flex justify-center items-center flex-col w-2/3 gap-4">
            <h1 className=" text-5xl text-[#22324A] font-extrabold ">
              Support Desk
            </h1>
            <p className="text-md font-normal w-7/12 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
              quas quisquam ut, culpa dolorem exercitationem.
            </p>
          </div>
          <div className="flex justify-center items-center w-1/3">
            <img
              src="https://media.tenor.com/_SqCUgNPLysAAAAC/skillpvp-ticket-support.gif"
              alt=""
            />
          </div>
        </section>
      </div>
      <div className="p-3 flex justify-center items-center">
        <Flex gap="small" wrap="wrap">
          <Button
            type="primary"
            style={{ ...ButtonCustomStyle, ...ButtonHoverStyle }}
            className=""
          >
            Primary Button
          </Button>
          <Button>Default Button</Button>
          <NavLink to="/ticket">
            <Button type="dashed">Dashed Button</Button>
          </NavLink>
          <NavLink to="/coindesk">
            <Button type="text">Text Button</Button>
          </NavLink>
          <Button type="link">Link Button</Button>
        </Flex>
      </div>
    </>
  );
}

export default Dashboard;
