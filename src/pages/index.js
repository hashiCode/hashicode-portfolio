import React from "react"
import Content from "../components/content"
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faMobileAlt,
  faLaptopCode,
  faCode
} from '@fortawesome/free-solid-svg-icons'

export default function IndexPage(props){

  library.add(fab, faMobileAlt, faLaptopCode, faCode)
  config.autoAddCss = false
  
  return (
    <Content />
  )
}