export class Camp {
    loc:string;
    cmDate:Date;
    estimate:number;
    constructor(loc:string, cmDate:Date, estimate:number){
        this.loc = loc;
        this.cmDate = cmDate;
        this.estimate = estimate;
    }

    toString(){
        return `${this.loc}, at ${this.cmDate}`;
    }
}
