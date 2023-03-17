import {IQuestion, ISurvey} from "@/interfaces/survey";
import {State} from "@/state/reducers/survey";
import React from "react";

const Suverys = ({ surveys, surveyToShow, selectSurvey, newSurvey, draftSurvey }: {surveys: ISurvey[] | null, surveyToShow: State["surveyToShow"], selectSurvey: Function, newSurvey: Function, draftSurvey: State["draftSurvey"] }) => {
  return (
      <div className="w-1/2">
        <div
          className="text-center text-[30px] font-semibold text-white bg-purple-400 py-[50px] shadow"
        >
          {
            draftSurvey && draftSurvey.active ? draftSurvey.draftSurvey.title : surveyToShow.surveyToShow?.title
          }
        </div>
        <div
          className="bg-gray-300 flex flex-col items-center pt-[50px] pb-[23px] px-[15px]"
        >
          <div className="w-[90%] max-w-[502px] text-black flex flex-col text-left">
            <span className="mb-[25px] text-black">
            {
              draftSurvey && draftSurvey.active ? draftSurvey.draftSurvey.description : surveyToShow.surveyToShow?.description
            }
            </span>
            {
              draftSurvey && draftSurvey.active ?
              draftSurvey.draftSurvey.questions.map((item: IQuestion) => (
                 (item.type == "seleccionSimple" || item.type == "seleccionMultiple") ?
                 <div className="flex flex-col">
                  <span className="font-semibold text-black">{item.quiestion}</span>
                  <div className="mt-2">
                    <div className="flex items-center gap-x-2">
                      <input type="radio" />
                      <label>Opcion 1</label><br />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input type="radio" />
                      <label>Opcion 2</label><br />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input type="radio" />
                      <label>Opcion 3</label><br />
                    </div>
                  </div>
                </div>
                  :
                 <div className="flex flex-col mt-4">
                  <span className="font-semibold text-black">{item.quiestion}</span>
                  <div className="mt-2">
                    <textarea
                      className="w-full rounded-[8px] resize-none p-2.5"
                      //rows="5"
                    ></textarea>
                  </div>
                </div>
              ))
              :
              surveyToShow.surveyToShow?.questions.map((item: IQuestion) => (
                 (item.type == "seleccionSimple" || item.type == "seleccionMultiple") ?
                 <div className="flex flex-col">
                  <span className="font-semibold text-black">{item.quiestion}</span>
                  <div className="mt-2">
                    <div className="flex items-center gap-x-2">
                      <input type="radio" />
                      <label>Opcion 1</label><br />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input type="radio" />
                      <label>Opcion 2</label><br />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <input type="radio" />
                      <label>Opcion 3</label><br />
                    </div>
                  </div>
                </div>
                  :
                 <div className="flex flex-col mt-4">
                  <span className="font-semibold text-black">{item.quiestion}</span>
                  <div className="mt-2">
                    <textarea
                      className="w-full rounded-[8px] resize-none p-2.5"
                      //rows="5"
                    ></textarea>
                  </div>
                </div>
              ))
            }
            {/* <div className="flex flex-col">
              <span className="font-semibold text-black"
                >¿Doloremque tempore aut modi?</span
              >
              <div className="mt-2">
                <div className="flex items-center gap-x-2">
                  <input type="radio" />
                  <label>Opcion 1</label><br />
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="radio" />
                  <label>Opcion 2</label><br />
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="radio" />
                  <label>Opcion 3</label><br />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <span className="font-semibold text-black"
                >¿Doloremque tempore aut modi?</span
              >
              <div className="mt-2">
                <div className="flex items-center gap-x-2">
                  <input type="checkbox" />
                  <label>Opcion 1</label><br />
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="checkbox" />
                  <label>Opcion 2</label><br />
                </div>
                <div className="flex items-center gap-x-2">
                  <input type="checkbox" />
                  <label>Opcion 3</label><br />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <span className="font-semibold text-black"
                >¿Doloremque tempore aut modi?</span
              >
              <div className="mt-2">
                <textarea
                  className="w-full rounded-[8px] resize-none p-2.5"
                  //rows="5"
                ></textarea>
              </div>
            </div> */}

            <div className="flex items-center gap-x-[12px] mt-4">
              <div className="flex flex-col w-full mb-4">
                <label>Tus Encuestas</label>
                <select onChange={(e)=> selectSurvey(e.target.value)} disabled={draftSurvey && draftSurvey.active} className="p-2.5 rounded-[4px]">
                  <option value="-1">Seleccione</option>
                  {surveys && surveys.map((item: ISurvey, i: number) => {
                      return <option value={item.id}>{item.title}</option>
                  })}
                </select>
              </div>
              <button
                onClick={() => newSurvey()}
                className="bg-purple-400 text-white font-semibold py-2 px-4 mt-5 rounded-[8px] mb-[11px]"
              >
                NUEVA ENCUESTA
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Suverys;

