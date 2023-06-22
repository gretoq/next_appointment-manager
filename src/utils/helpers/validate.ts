import { ParsedDataType } from '@/types/ParsedDataType';
import { ValidatedPeopleType } from '@/types/ValidatedPeopleType';
import { getSeparatedTrimmedData } from './normalize';
import { parsePatients } from './parse';
import { PeopleType } from '@/types/PeopleType';

export const validatePeople = (people: ParsedDataType[]): ValidatedPeopleType => {
  const wrongFormatPeople: ParsedDataType[] = [];
  const validatedPeople: PeopleType[] = people.flatMap((person) => {
    const { id, hours, name, born } = person;

    if (!id || typeof id !== 'number') {
      wrongFormatPeople.push(person);
      return [];
    }

    if (!hours || typeof hours !== 'string') {
      wrongFormatPeople.push(person);
      return [];
    }
    if (name && typeof name !== 'string') {
      wrongFormatPeople.push(person);
      return [];
    }
    if (born && typeof born !== 'string') {
      wrongFormatPeople.push(person);
      return [];
    }

    const validatedPatient: PeopleType = {
      id,
      hours,
      ...(name && { name }),
      ...(born && { born }),
    };

    return [validatedPatient];
  });

  return {
    people: validatedPeople,
    wrongFormatPeople,
  };
};

export const getValidatedData = (text: string): ValidatedPeopleType => {
  const normalizedData: string[][] = getSeparatedTrimmedData(text);
  const parsedPatients: ParsedDataType[] = parsePatients(normalizedData);

  return validatePeople(parsedPatients);
};
