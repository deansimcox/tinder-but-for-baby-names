"use client";

import React from "react";

import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMarsAndVenus,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import useGenderContext from "../contexts/GenderContext";

const Navbar = () => {
  const genderContext = useGenderContext();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="pt-8 pb-4 sm:py-10 mx-20"
    >
      <div className="flex justify-between">
        <div>
          <FontAwesomeIcon
            icon={faMars}
            size="2x"
            className={`${
              genderContext.gender === "boy" ? "opacity-100" : "opacity-50"
            } text-white hover:cursor-pointer hover:opacity-75 `}
            onClick={() => genderContext.updateGender("boy")}
          />
          <FontAwesomeIcon
            icon={faVenus}
            size="2x"
            className={`${
              genderContext.gender === "girl" ? "opacity-100" : "opacity-50"
            } text-white mx-5 hover:cursor-pointer hover:opacity-75 `}
            onClick={() => genderContext.updateGender("girl")}
          />
        </div>
        <h2 className="text-white hidden md:block pr-[8rem]">Find the name</h2>
        <img src="/menu.svg" alt="menu" className="" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
