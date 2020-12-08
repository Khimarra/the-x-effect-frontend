import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

export default function DateRangeCal(props) {
  return <DateRange ranges={[props.dates]} onChange={props.handleSelect} rangeColors={['teal']} />
}
