export class Actions {
    action: string = ""
    seconds: number = 0
    mseconds: number = 0

    constructor(action: string, seconds: number, mseconds: number){
        this.action = action
        this.seconds = seconds
        this.mseconds = mseconds
    }
}
