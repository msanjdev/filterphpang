
export class FilterData {
    constructor(
      public storage?: string,
      public ram?: string,
      public hdd?: string,
      public location?: string
    ) { }

    getAsParameter() {
      let param = "model=null&storage="

      if (!this.storage || this.storage == "0")
        param += "null"
      else
        param += this.storage

      param += "&ram="
      if (!this.ram)
        param += "null"
      else
        param += this.ram

      param += "&hdd="
      if (!this.hdd)
        param += "null"
      else
        param += this.hdd

      param += "&location="
      if (!this.location)
        param += "null"
      else
        param += this.location

      return param
    }
  }