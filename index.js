const updateSkill = (id, value) => {
    const skillBar = document.getElementById(id).querySelector('.skill__progress')
    const skillValue = document.getElementById(id).querySelector('.skill__value')
    
    skillBar.style.width = value + '%'
    skillValue.textContent = value + ' / 100'
  }
  
  const userPromptHTML = prompt("HTML dovednosti od 0-100:")
  const updatedHTML = updateSkill('skill1', userPromptHTML)
  
  const userPromptCSS = prompt("CSS dovednosti od 0-100:")
  const updatedCSS = updateSkill('skill2', userPromptCSS)
  
  const userPromptJS = prompt("JS dovednosti od 0-100:")
  const updatedJS = updateSkill('skill3', userPromptJS)