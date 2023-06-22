import { IParsedDoctor, IDoctor } from './IDoctor';

export interface IValidatedDoctors {
  patients: IDoctor[],
  wrongFormatPatients: IParsedDoctor[],
}
