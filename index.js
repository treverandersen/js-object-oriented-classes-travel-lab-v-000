class Driver {
  constructor(name, started) {
    this.name = name
    this.started = started
  }

  startDate() {
    let started = new Date();
    return started
  }
  yearsExperienceFromBeginningOf(year) {
    return year - startDate();
  }
}

class Route {
  constructor(horizontal, vertical) {
    this.horizontal = horizontal
    this.vertical = vertical
  }
}