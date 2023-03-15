import React from "react";
import {State} from "@/state/reducers/survey";

const DraftSuverys = ({ draftSurvey, updateSuvery }: {draftSurvey: State["draftSurvey"], updateSuvery: Function }) => {
  return (
      <div className="w-1/2 flex flex-col shadow">
        <div
          className="text-center text-[30px] font-semibold text-white bg-purple-400 py-[50px]"
        >
          Creación de encuesta
        </div>
        <div
          className="bg-gray-300 flex flex-col items-center pt-[50px] pb-[23px] px-[15px]"
        >
          <div className="w-[90%] max-w-[502px] flex flex-col items-center">
            <div className="flex flex-col w-full mb-4">
              <label>Título</label>
              <input
                onChange={(e) => updateSuvery("title", e.target.value)}
                className="p-2.5 rounded-[4px]"
                type="text"
                placeholder="Título"
              />
              <span className="text-[10px] mt-1">Help Text</span>
            </div>

            <div className="flex flex-col w-full">
              <label>Descripción</label>
              <input
                onChange={(e) => updateSuvery("description", e.target.value)}
                className="p-2.5 rounded-[4px]"
                type="text"
                placeholder="Título"
              />
              <span className="text-[10px] mt-1">Descripción</span>
            </div>

            <div
              className="relative w-full border-2 border-[#AAA4A4] rounded-[8px] py-4 px-8 mt-[45px]"
            >
              <button
                className="absolute right-[-26px] top-[50%] translate-y-[-50%]"
              >
                <i className="fa-solid fa-trash text-[#F52C2C]"></i>
              </button>
              <div className="flex flex-col w-full mb-4">
                <label>Tipo de pregunta</label>
                <select className="p-2.5 rounded-[4px]">
                  <option value="value1">Value 1</option>
                  <option value="value2" selected>Value 2</option>
                  <option value="value3">Value 3</option>
                </select>
                <span className="text-[10px] mt-1">Help Text</span>
              </div>
              <div className="flex flex-col w-full mb-4">
                <label>Pregunta</label>
                <input
                  className="p-2.5 rounded-[4px]"
                  type="text"
                  placeholder="Pregunta"
                />
                <span className="text-[10px] mt-1">Help Text</span>
              </div>
              <div className="flex flex-col w-full mb-4 relative">
                <label>Opción 1</label>
                <input
                  className="p-2.5 rounded-[4px]"
                  type="text"
                  placeholder="Opción 1"
                />
                <button className="absolute top-[30px] right-[-20px]">
                  <i className="fa-solid fa-ban text-[#F52C2C]"></i>
                </button>
                <span className="text-[10px] mt-1">Help Text</span>
              </div>
              <div className="flex flex-col w-full mb-4 relative">
                <label>Opción 2</label>
                <input
                  className="p-2.5 rounded-[4px]"
                  type="text"
                  placeholder="Opción 2"
                />
                <button className="absolute top-[30px] right-[-20px]">
                  <i className="fa-solid fa-ban text-[#F52C2C]"></i>
                </button>
                <span className="text-[10px] mt-1">Help Text</span>
              </div>
              <button
                className="p-[8px] bg-[#E8E8E8] rounded-[8px] flex items-center"
              >
                <i
                  className="fa-solid fa-circle-plus text-4 text-purple-400 bg-white rounded-[50%]"
                ></i>
                <span
                  className="ml-3 text-[#A8AAAF] text-[10px] font-semibold font-['Poppins']"
                  >Agregar opción</span
                >
              </button>
            </div>
            <button
              className="p-[8px] bg-[#E8E8E8] mt-[20px] mr-auto rounded-[8px] flex items-center"
            >
              <i
                className="fa-solid fa-circle-plus text-4 text-purple-400 bg-white rounded-[50%]"
              ></i>
              <span
                className="ml-3 text-[#A8AAAF] text-[10px] font-semibold font-['Poppins']"
                >Agregar opción</span
              >
            </button>
            {draftSurvey.active &&
            <button
              className="bg-purple-400 text-white font-semibold py-2 px-3 mt-5 rounded-[8px]"
            >
              Crear encuesta
            </button>}

          </div>
        </div>
      </div>
  )
}

export default DraftSuverys;
