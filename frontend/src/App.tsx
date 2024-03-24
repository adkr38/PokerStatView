import {Diamonds,Spades,Hearts,Clubs} from "./components/utils/suits"


function App() {
  return (
  <div className="grid grid-rows-1 grid-cols-4 place-items-center w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  <Diamonds className="fill-rose-800 w-120 h-100"/>
  <Spades className="fill-stone-900 w-120 h-100"/>
  <Hearts className="fill-rose-800 w-120 h-100"/>
  <Clubs className="fill-stone-900 w-120 h-100"/>
  </div>
  )
}

export default App
