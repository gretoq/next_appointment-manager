import { ParsedDataType } from '@/types/ParsedDataType';

export const parsePatients = (patients: string[][]): ParsedDataType[] => {
  return patients.map(patient => {
    const [id, hours, name, born] = patient;

    const parsedPatient: ParsedDataType = {
      ...(id && { id: Number(id) }),
      ...(hours && { hours }),
      ...(name && { name }),
      ...(born && { born }),
    };

    return parsedPatient;
  });
};
