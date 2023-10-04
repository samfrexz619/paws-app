import useDark from './useDark'
import './App.css'

function App() {

  const {setIsDark, isDark} = useDark('preference')

  const handleToggle =()=> {
    setIsDark(prev => (!prev))
  }

  return (
    <main className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} h-screen w-full`}>
      <p>Hello Samfrexz</p>
      <button onClick={handleToggle}>toggle</button>
    </main>
  )
}

export default App
