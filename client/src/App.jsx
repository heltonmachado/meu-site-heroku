import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState('Carregando...')

  useEffect(() => {
    fetch('/api/teste')
      .then(res => res.json())
      .then(data => setMsg(data.mensagem))
      .catch(() => setMsg("API offline - rodando só front"))
  }, [])

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Meu Site no Heroku 🚀</h1>
      <p>Status da API: <strong>{msg}</strong></p>
    </div>
  )
}

export default App