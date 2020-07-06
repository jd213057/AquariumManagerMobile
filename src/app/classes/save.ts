export class Save {
  public id: number;
  public no2: number;
  public no3: number;
  public gH: number;
  public kH: number;
  public pH: number;
  public cl2: number;
  public co2: number;
  public comment: string;
  public date: string;

  constructor(id: number,
    no2: number,
    no3: number,
    gH: number,
    kH: number,
    pH: number,
    cl2: number,
    co2: number,
    comment?: string ) {
    this.id = id;
    this.no2 = no2;
    this.no3 = no3;
    this.gH = gH;
    this.kH = kH;
    this.pH = pH;
    this.cl2 = cl2;
    this.co2 = co2;
    if (comment) {
      this.comment = comment
    }
    this.date = this.getSaveTime();
  }

  getNo2(): number {
    return this.no2;
  }

  setNo2(input: number){
this.no2 = input;
  }

  getNo3(): number {
    return this.no3;
  }

  setNo3(input: number) {
    this.no3 = input;
  }

  getGH(): number {
return this.gH;
  }

  setGH(input: number) {
    this.gH = input;
  }

  getKH(): number {
return this.kH;
  }

  setKH(input: number) {
    this.kH = input;
  }

  getPH(): number {
return this.pH;
  }

  setPH(input: number){
    this.pH = input;
  }

  getCl2(): number {
return this.cl2;
  }

  setCl2(input: number) {
this.cl2 = input;
  }

  getCo2(): number{
    return this.co2;
  }

  setCo2(input: number){
    this.co2 = input;
  }

  getComment(){
return this.comment;
  }

  setComment(input: string) {
    this.comment = input;
  }


  getSaveTime(): string {
    const saveDay = new Date();
    const year = saveDay.getUTCFullYear().toString();
    let month = (saveDay.getUTCMonth() + 1).toString();
    if (month.length == 1) {
      month = '0' + month;
    }
    let day = saveDay.getUTCDate().toString();
    if (day.length == 1) {
      day = '0' + day;
    }
    let hour = (saveDay.getUTCHours() + 2).toString();
    if (hour.length == 1) {
      hour = '0' + hour;""
    }
    let min = saveDay.getUTCMinutes().toString();
    if (min.length == 1) {
      min = '0' + min;
    }
    let sec = saveDay.getUTCSeconds().toString();
    if (sec.length == 1) {
      sec = '0' + sec;
    }
    return day + '/' + month + '/' + year + '-' + hour + ':' + min + ':' + sec;
  }
}
