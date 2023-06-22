export interface IDoctor {
  id: number,
  hours: string,
  name?: string,
  born?: string,
}

export interface IParsedDoctor {
  id?: any,
  hours?: any,
  name?: any,
  born?: any,
}
