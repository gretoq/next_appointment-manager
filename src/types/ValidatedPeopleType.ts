import { ParsedDataType } from './ParsedDataType';
import { PeopleType } from './PeopleType';

export interface ValidatedPeopleType {
  people: PeopleType[],
  wrongFormatPeople: ParsedDataType[],
}
