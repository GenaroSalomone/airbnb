import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
  static targets = ["dropdown", "openUserMenu"]

  connect() {
    console.log("enter", enter)
    this.openUserMenuTarget.addEventListener("click", (e) => {
      openDropdown(this.dropdownTarget)
    })
  }
}


function openDropdown(e) {
  toggle(e).then(() => {
    console.log("Enter transition complete")
  })
}

