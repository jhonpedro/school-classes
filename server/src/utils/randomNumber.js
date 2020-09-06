export default function RandomNumber(initInterval, endInterval) {
  return Math.floor((Math.random() * (initInterval + endInterval)) + initInterval)
}
