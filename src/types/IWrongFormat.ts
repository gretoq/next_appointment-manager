import { IParsedDoctor } from './IDoctor/IDoctor';
import { IParsedPatient } from './IPatient/IPatient';

export interface IWrongFormat {
  patients: IParsedPatient[],
  doctors: IParsedDoctor[],
  appointments: string[],
}
