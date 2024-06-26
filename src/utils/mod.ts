export type ModState = 'REGISTER' | 'MODIFY'
//
export const ModStateObj: Record<ModState, ModState> = {
  REGISTER: 'REGISTER',
  MODIFY: 'MODIFY'
}

export class Mod {
  private state: ModState
  constructor(state: ModState) {
    this.state = state
  }
  get isRegister() {
    return this.state === 'REGISTER'
  }
  get isModify() {
    return this.state === 'MODIFY'
  }
}
