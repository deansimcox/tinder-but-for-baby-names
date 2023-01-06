"use client";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFetchRandomName } from "../store/api";
import useAppContext from "../contexts/GenderContext";

const Namecard = () => {
  const appContext = useAppContext();
  const nameResponse = useFetchRandomName(appContext.gender);
  const randomName = nameResponse.data?.name;

  console.log("appContext", appContext);

  const getNewName = () => {
    nameResponse.refetch();
  };

  return (
    <main className="drop-shadow-2xl h-[60vh] w-[80vw] md:w-[50vw] lg:w-[35vw] bg-slate-300 rounded-lg overflow-hidden">
      <article className="flex flex-col items-center justify-around h-[100%] w-[100%]">
        <h2 className="shadow-md rounded-full px-8 py-2 bg-slate-300 font-medium text-gray-700 text-center text-6xl">
          {randomName}
        </h2>
        <div className="flex justify-around w-[100%]">
          <button
            className="shadow-md bg-red-500 hover:bg-red-600 active:bg-red-700 p-6 rounded-full text-white"
            onClick={() => getNewName()}
          >
            <FontAwesomeIcon icon={faXmark} size="3x" className="h-5 w-12" />
          </button>
          <button
            className="shadow-md bg-green-500 hover:bg-green-600 active:bg-green-700 p-6 rounded-full text-white"
            onClick={() => getNewName()}
          >
            <FontAwesomeIcon icon={faCheck} size="3x" />
          </button>
        </div>
      </article>
    </main>
  );
};

export default Namecard;
