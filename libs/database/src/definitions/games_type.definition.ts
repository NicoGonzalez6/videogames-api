export enum Egames_type {
  action = 'action',
  rpg = 'rpg',
  Sandbox = 'Sandbox',
  adventure = 'adventure',
  rts = 'rts',
}

export interface IgamesType {
  id?: number;
  type: Egames_type;
}
