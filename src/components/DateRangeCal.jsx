import { DateRangePicker } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

export default function DateRangeCal(props) {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  }
  return <DateRangePicker ranges={[selectionRange]} onChange={props.handleSelect} />
}
