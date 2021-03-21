export class Settings {
  constructor() {
    this.defaultSettings = {
      name: "Alexander Nikolaev CV Settings",
      language: "Russian"
    }
  }

  setDefaultSettings() {
    if (localStorage.getItem(this.defaultSettings.name) === null) {
      localStorage.setItem("Alexander Nikolaev CV Settings", JSON.stringify(this.defaultSettings));
    }
  }
}