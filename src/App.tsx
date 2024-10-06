import { Avatar, Button, Input, Label, Toggle, Collapsible, CollapsibleTrigger, CollapsibleContent, TabList, Tabs, TabPanels, TabPanel, Tab } from '@/components'
import { Section } from '@/components/section'
import { Cog6ToothIcon, HomeIcon, MoonIcon, SunIcon, PlusIcon, UserIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

function App() {  


  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-24 text-primary bg-background space-y-8 lg:space-y-16">      
      <AppHeader />
      <Section title="Buttons" variants={["Default, Primary, Accent, Ghost"]}>
        <Button onClick={() => alert("Default button")}>Default</Button>
        <Button variant="primary" onClick={() => alert("Primary button")}>Primary</Button>
        <Button variant="accent" onClick={() => alert("Accent button")}>Accent</Button>
        <Button variant="ghost" onClick={() => alert("Ghost button")}>Ghost</Button>
      </Section>
      <Section title="Toggles">
        <Toggle><PlusIcon className="w-4 h-4" /></Toggle>
      </Section>
      <Section title="Inputs">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" className="w-72" />
        </div>            
      </Section>
      <Section title="Avatars">
        <Avatar initials="RH" />      
      </Section>
      <Section title="Collapsible">
        <Collapsible id="test">
          <CollapsibleTrigger>
            Open
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p>Hello World</p>
          </CollapsibleContent>
        </Collapsible>
      </Section>
      <Section title="Tabs">
        <Tabs>
          <TabList>
            <Tab>
              <HomeIcon className="w-4 h-4" />
              Home
            </Tab>
            <Tab>
              <UserIcon className="w-4 h-4" />
              Profile
            </Tab>
            <Tab>
              <Cog6ToothIcon className="w-4 h-4" />
              Settings
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
          </TabPanels>
        </Tabs>
      </Section>
    </main>
  )
}

function AppHeader() {
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
    <header className="w-full flex justify-between items-center">
      <h1>Kitchen Sink UI</h1>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
      </Button>
    </header>
  )
}

export default App
