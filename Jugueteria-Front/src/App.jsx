import { useState } from 'react'
import { Snackbar, Button } from '@mui/material'

function App() {
  // Estado para controlar la apertura del Snackbar
  const [open, setOpen] = useState(false)

  // Función para manejar la apertura del Snackbar
  const handleClick = () => {
    setOpen(true)
  }

  // Función para manejar el cierre del Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <div className="p-4">
      {/* Botón de Tailwind que al hacer clic muestra el Snackbar */}
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Mostrar Snackbar
      </button>

      {/* Snackbar de MUI */}
      <Snackbar
        open={open}
        autoHideDuration={3000} // Duración en milisegundos
        onClose={handleClose}
        message="Este es un mensaje de Snackbar"
        action={
          <Button color="inherit" onClick={handleClose}>
            Cerrar
          </Button>
        }
      />
    </div>
  )
}

export default App
