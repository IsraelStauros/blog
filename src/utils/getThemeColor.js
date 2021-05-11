const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'flash') return '#54068c'
  if (theme === 'dark') return '#260026'
}

export default getThemeColor
