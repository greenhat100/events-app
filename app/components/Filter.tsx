import React, { useState, useEffect } from 'react'

interface Props {
    setSelectedCategory:React.Dispatch<React.SetStateAction<string | null>>
}

function Filter({ setSelectedCategory }: Props){
  
    const [theme, setTheme] = useState('dark-theme');

    useEffect(() => {
        document.body.className = theme;
    
        // Get the popup element by class name
        const popupElements = document.getElementsByClassName('popup-inner');
    
        // Check if there is at least one element with the class
        if (popupElements.length > 0) {
            const popupElement = popupElements[0];
    
            // Set or toggle the class based on the theme
            popupElement.classList.toggle('light-popup-inner', theme === 'light-theme');
        }
    }, [theme]);
    
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
    };

  const categories = [
    'Politics',
    'Science',
    'Sports',
    'War', 
    'Religion',
    'Other'
  ]

  return (
    <div className='filter'>
        <div className='filter_select'>
           <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value='All'>All</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
           </select>
        </div>
        <div className='theme-toggler'>
          <input type='checkbox' id='theme-toggler__checkbox' className='theme-toggler__checkbox' />
          <label htmlFor='theme-toggler__checkbox' className='theme-toggler__label' onClick={changeTheme}>Toggle</label>
        </div>
    </div>
  )
}

export default Filter