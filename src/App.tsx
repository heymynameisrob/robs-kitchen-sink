import { Avatar, Button, Input, Label, Toggle } from '@/components'
import { PlusIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

function App() {  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }


  useEffect(() => {
    // Check for user's color scheme preference on first load
    if (!localStorage.getItem('theme')) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
    }

    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-24 bg-background">      
      <p>Hello World</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Toggle><PlusIcon className="w-4 h-4" /></Toggle>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>            
      <Avatar initials="RH" />      
    </main>
  )
}

export default App
