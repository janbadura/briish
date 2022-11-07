import { useState } from 'react'

function App() {
  const [triesCount, setTriesCount] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [correctCountStreak, setCorrectCountStreak] = useState(0)
  const [answers, setAnswers] = useState([])
  const [words, setWords] = useState(
    [
      {word: "apple", translation: "jablko"},
      {word: "about", translation: "o"},
      {word: "accident", translation: "nehoda"},
      {word: "action", translation: "akce/akční"},
      {word: "adventure", translation: "dobrodružství"},
      {word: "airfield", translation: "letiště"},
      {word: "to appear", translation: "objevit se"},
      {word: "assistant", translation: "pomocník/asistent"},
      {word: "airfield", translation: "letiště"},
      {word: "awake", translation: "probuzený"},
      {word: "awful", translation: "hrozný"},
      {word: "bank", translation: "banka"},
      {word: "bowl", translation: "miska"},
      {word: "bright", translation: "jasný"},
      {word: "captain", translation: "kapitán"},
      {word: "cartoon", translation: "kreslený film"},
      {word: "ceiling", translation: "strop"},
      {word: "chain", translation: "řetěz"},
      {word: "to change", translation: "změnit/vyměnit"},
      {word: "channel", translation: "kanál"},
      {word: "character", translation: "postava, osobnost"},
      {word: "comet", translation: "kometa"},
      {word: "to communicate", translation: "komunikovat"},
      {word: "complete", translation: "dokončit"},
      {word: "concert", translation: "koncert"},
      {word: "contestant", translation: "soutěžící"},
      {word: "corner", translation: "roh"},
      {word: "couple", translation: "pár"},
      {word: "creature", translation: "bytost/stvoření"},
      {word: "crime series", translation: "kriminální série"},
      {word: "current", translation: "současný/běžný"},
      {word: "to cut", translation: "řezat, krájet"},
      {word: "to defend", translation: "bránit"},
      {word: "detective", translation: "detektiv"},
      {word: "dinosaur", translation: "dinosaurus"},
      {word: "direction", translation: "směr"},
      {word: "documentary", translation: "dokumentární"},
      {word: "dome", translation: "dóm/kopule"},
      {word: "to dream", translation: "snít"},
      {word: "to drive", translation: "řídit"},
      {word: "to enter", translation: "vstoupit"},
      {word: "to escape", translation: "uniknout"},
      {word: "event", translation: "událost"},
      {word: "to explore", translation: "prozkoumat"},
      {word: "extra", translation: "navíc/dodatečný"},
      {word: "factory", translation: "továrna"},
      {word: "fighter", translation: "bojovník"},
    ]
  )
  const [currentWord, setCurrectWord] = useState(words[Math.floor(Math.random()*words.length)])

  function validateAnswer(answer, {word, translation}) {
    const correct = word === answer
    if (correct){
      setCorrectCount(correctCount+1)
      setCorrectCountStreak(correctCountStreak+1)
    }else{
      setCorrectCountStreak(0)
    }
    setAnswers([{answer, word, translation, correct}, ...answers])
    setTriesCount(triesCount+1)
    setCurrectWord(words[Math.floor(Math.random()*words.length)])
  }

  const handleSubmit = event => {
    event.preventDefault();

    validateAnswer(event.target[0].value, currentWord)
    event.target[0].value = ""
  };


  return (
    <div className="App">
      <h1>🇬🇧</h1>
      <div className='row'>
      <div className='col-3'>Úspěšnost: {correctCount/triesCount ? Math.floor(correctCount/triesCount * 100) : 0}%</div>
      <div className='col-3'>🔥 Odpovědí správně v řadě: {correctCountStreak}</div>
      <div className='col-3'>Počet pokusů: {triesCount}</div>
      <div className='col-3'>Odpovědí správně: {correctCount}</div>
      </div>
      <h1>Přelož: {currentWord.translation}</h1>
      <form onSubmit={handleSubmit} >
        <input type="text"/>
        <input type="submit"/>
      </form>
      <div className='row'>
      {answers.map(answer => {
        if(answer.correct){
        return <div className='col-4 my-2'><div key={answer.word} className='border border-success rounded p-3'><div>{answer.translation} = {answer.word}</div><div>✅ {answer.answer}</div></div></div>
      }
      return <div className='col-4 my-2'><div key={answer.word} className='border border-danger rounded p-3'><div>{answer.translation} = {answer.word}</div><div>❌ {answer.answer}</div></div></div>
      })}
      </div>
    </div>
  )
}



export default App
