import { IPatient } from '@/types/IPatient/IPatient';
import { IWrongFormat } from '@/types/IWrongFormat';
import { initialWrongFormat } from '@/utils/constants/initials';
import { getValidatedData } from '@/utils/helpers/validate';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  name: string,
  placeholder: string,
  onChange: (text: string) => void,
}

export const TextArea: React.FC<Props> = ({
  name,
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlerPatientsKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(value);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center w-1/3">
      <label className="mb-4 capitalize">
        {name}
      </label>

      <textarea
        className="resize-none text-black w-full p-3 rounded-md text-sm border-2 focus:border-indigo-500 outline-0 transition delay-75 duration-300 ease-in-out"
        placeholder={placeholder}
        rows={22}
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyUp={handlerPatientsKeyUp}
      >
      </textarea>
    </div>
  );
};

const CreateDataset = () => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [wrongFormat, setWrongFormat] = useState<IWrongFormat>(initialWrongFormat);

  const handlerPatientsChange = (patientsValue: string) => {
    const validatedPatients = getValidatedData(patientsValue);

    setPatients(validatedPatients.people);
    setWrongFormat(prev => ({ ...prev, patients: validatedPatients.wrongFormatPeople}));
  };

  useEffect (() => {
    window.console.log('patients:', patients);
    window.console.log('WrongFormat:', wrongFormat);
  }, [patients, wrongFormat]);

  return (
    <section className="w-full container">
      <h1 className="text-2xl font-semibold uppercase mb-8">
        Lets create patients, doctors and their appointments
      </h1>

      <form className="h-full">
        <div className="container w-full flex justify-between gap-8 mb-12">
          <TextArea
            name="patients"
            placeholder="Patient ID, Hospital stay hours, First and Last name, Born date"
            onChange={handlerPatientsChange}
          />
          {/* <div className="flex flex-col items-center w-1/3">
            <label className="mb-4">
              Patients
            </label>

            <textarea
              className="resize-none text-black w-full p-3 rounded-md text-sm border-2 focus:border-indigo-500 outline-0 transition delay-75 duration-300 ease-in-out"
              placeholder="Patient ID, Hospital stay hours, First and Last name, Born date"
              rows={22}
              name="patients"
              value={patientsValue}
              onChange={handlerPatientsInput}
              onKeyUp={handlerPatientsKeyUp}
            >
            </textarea>
          </div> */}

          <div className="flex flex-col items-center w-1/3">
            <label className="mb-4">
              Doctors
            </label>

            <textarea
              className="resize-none text-black w-full p-3 rounded-md text-sm border-2 focus:border-indigo-500 outline-0 transition delay-75 duration-300 ease-in-out"
              placeholder="Doctor ID, Hospital working hours, First and Last name, Born date"
              rows={22}
              name="doctors"
            >
            </textarea>
          </div>

          <div className="flex flex-col items-center w-1/3">
            <label className="mb-4">
              Appointments
            </label>

            <textarea
              className="resize-none text-black w-full p-3 rounded-md text-sm border-2 focus:border-indigo-500 outline-0 transition delay-75 duration-300 ease-in-out"
              placeholder="Patient ID, Doctors ID, Doctor`s appointment time"
              rows={22}
              name="appointments"
            >
            </textarea>
          </div>
        </div>

        <div className="flex gap-4 w-full flex-row-reverse">
          <button
            className="
              p-3 rounded border border-indigo-900
              hover:border-indigo-500 transition
              delay-75 duration-300 ease-in-out
            "
          >
            Clear DB
          </button>

          <button
            className="
              p-3 rounded border border-indigo-900
              hover:border-indigo-500 transition
              delay-75 duration-300 ease-in-out
            "
          >
            Send Data
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateDataset;
