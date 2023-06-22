export interface IPatient {
  id: number,
  hours: string,
  name?: string,
  born?: string,
}

export interface IParsedPatient {
  id?: any,
  hours?: any,
  name?: any,
  born?: any,
}
