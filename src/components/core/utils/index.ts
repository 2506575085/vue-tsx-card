export default class Utils{
  /**
  * 获得当前时间
  */  
  public static getDate(format: string) {
        const oDate = new Date(),
          oYear = oDate.getFullYear(),
          oMonth = oDate.getMonth() + 1,
          oDay = oDate.getDate();
        let oTime = "";
        if (format == "yyyy-mm-dd") {
          oTime = oYear + "-" + this.getzf(oMonth) + "-" + this.getzf(oDay); //最后拼接时间
        } else if (format == "yyyy/mm/dd") {
          oTime = oYear + "/" + this.getzf(oMonth) + "/" + this.getzf(oDay); //最后拼接时间
        } else if (format == "yyyy-MM-dd HH:mm") {
          oTime = oYear + "-" + this.getzf(oMonth) + "-" + this.getzf(oDay) + " " + this.getzf(oDate.getHours()) + ":" + this.getzf(oDate.getMinutes()); //最后拼接时间
        }
        return oTime;
      }
      public static getzf(num: any) {
        if (parseInt(num) < 10) {
          num = "0" + num;
        }
        return num;
      }
}