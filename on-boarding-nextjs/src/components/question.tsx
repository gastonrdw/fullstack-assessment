import {ISurvey} from "@/interfaces/survey";
import { useSelector } from '../state/store';
import React from "react";
import { useDispatch } from 'react-redux';
import { addDraftQuestion, updateDraftQuestionType, addQuestion, updateDraftQuestion } from '../state/actions/question';

const Question = ({active} : {active: boolean}) => {
  const dispatch = useDispatch();

  const addOptionHandler = () => {
    dispatch(addDraftQuestion());
  }

  const saveQuestionHandler = () => {
    dispatch(addQuestion());
  }

  const selectQuestionType = (type: string) => {
    dispatch(updateDraftQuestionType(type));
  }

  const updateQuestion = (question: string) => {
    dispatch(updateDraftQuestion(question));
  }

  const draftQuestion  = useSelector(store => store.Surveys.draftSurvey.draftSurvey.draftQuestion);
  return (
    <>
      {
        draftQuestion?.active &&
        <div className="relative w-full border-2 border-[#AAA4A4] rounded-[8px] py-4 px-8 mt-[45px]">
          {/* <button className="absolute right-[-26px] top-[50%] translate-y-[-50%]">
            <i className="fa-solid fa-trash text-[#F52C2C]"></i>
          </button> */}
        <div className="flex flex-col w-full mb-4">
          <label>Tipo de pregunta</label>
          <select className="p-2.5 rounded-[4px]" defaultValue="-1" onChange={(e)=> selectQuestionType(e.target.value)}>
            <option value="-1">Seleccione</option>
            <option value="seleccionMultiple">Seleccion multiple</option>
            <option value="seleccionSimple">Seleccion simple</option>
            <option value="texto">Texto</option>
          </select>
        </div>
        {draftQuestion.type &&
        <div className="flex flex-col w-full mb-4">
                <label>Pregunta</label>
                <input
                  onChange={(e)=> updateQuestion(e.target.value)}
                  className="p-2.5 rounded-[4px]"
                  type="text"
                  placeholder="Pregunta"
                />
        </div>
        }
        {(draftQuestion.type == "seleccionSimple" || draftQuestion.type == "seleccionMultiple") &&
        <>
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
          </div>
          <div className="flex flex-col w-full mb-4 relative">
                    <label>Opción 2</label>
                    <input
                      className="p-2.5 rounded-[4px]"
                      type="text"
                      placeholder="Opción 2"
                    />
                    <button
                    className="absolute top-[30px] right-[-20px]">
                      <i className="fa-solid fa-ban text-[#F52C2C]"></i>
                    </button>
          </div>
          </>
        }

        <button
          onClick={() => saveQuestionHandler()}
          className="p-[8px] bg-[#E8E8E8] rounded-[8px] flex items-center">
            <i className="fa-solid fa-circle-plus text-4 text-purple-400 bg-white rounded-[50%]"></i>
            <span
              className="ml-3 text-[#A8AAAF] text-[20px] font-semibold font-['Poppins']"
              >Guardar Pregunta
              </span>
        </button>
        </div>
      }
      {
        active &&
        <button
        onClick={() => addOptionHandler()}
        className="p-[8px] bg-[#E8E8E8] mt-[20px] mr-auto rounded-[8px] flex items-center"
      >
        <i
          className="fa-solid fa-circle-plus text-4 text-purple-400 bg-white rounded-[50%]"
        ></i>
        <span
          className="ml-3 text-[#A8AAAF] text-[20px] font-semibold font-['Poppins']"
          >Agregar Pregunta
        </span>
      </button>
      }

    </>
  );
}

export default Question;
