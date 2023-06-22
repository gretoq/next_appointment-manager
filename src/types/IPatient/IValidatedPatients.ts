import { IParsedPatient, IPatient } from './IPatient';

export interface IValidatedPatients {
  patients: IPatient[],
  wrongFormatPatients: IParsedPatient[],
}
