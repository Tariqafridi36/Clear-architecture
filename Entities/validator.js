exports.InputValidator = class InputValidator {
  constructor(search, state, avail) {
    this.search = search
    this.state = state
    this.availability = avail
  }

  validateName = () => {
    if (this.search?.length === 0) {
      return false
    } else return true
  }

  validateState = () => {
    if (this.state?.length === 0) {
      return false
    } else return true
  }

  validateTime = () => {
    if (this.availability?.length === 0) {
      return false
    } else return true
  }
}
