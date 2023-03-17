import React from "react";
import {State} from "@/state/reducers/survey";
import Question from "./question";

const DraftSuverys = ({ draftSurvey, updateSuvery, createSurvey, cleanDraftSurvey }: {draftSurvey: State["draftSurvey"], updateSuvery: Function, createSurvey: Function, cleanDraftSurvey: Function }) => {
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
                disabled={!draftSurvey.active}
                onChange={(e) => updateSuvery("title", e.target.value)}
                className="p-2.5 rounded-[4px]"
                type="text"
                placeholder="Título"
                value={draftSurvey.draftSurvey.title}
              />
              <span className="text-[10px] mt-1">Help Text</span>
            </div>

            <div className="flex flex-col w-full">
              <label>Descripción</label>
              <input
                disabled={!draftSurvey.active}
                onChange={(e) => updateSuvery("description", e.target.value)}
                className="p-2.5 rounded-[4px]"
                type="text"
                placeholder="Descripcion"
                value={draftSurvey.draftSurvey.description}
              />
              <span className="text-[10px] mt-1">Descripción</span>
            </div>
            <Question active={draftSurvey.active} />
            {draftSurvey.active &&
            <div className="flex items-center gap-x-[12px] mt-4">
             <button
              onClick={() => cleanDraftSurvey()}
              className="bg-red-400 text-white font-semibold py-2 px-3 mt-5 rounded-[8px]"
            >
              Descartar borrador
            </button>
            <button
              onClick={() => createSurvey()}
              className="bg-purple-400 text-white font-semibold py-2 px-3 mt-5 rounded-[8px]"
            >
              Crear encuesta
            </button>
            </div>
            }
          </div>
        </div>
      </div>
  )
}

export default DraftSuverys;
