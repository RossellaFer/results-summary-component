const data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

let resultsHTML = '<h2>Summary</h2>';
const resultsSection = document.querySelector('.container.summary');

for (let i = 0; i < data.length; i++) {
  const item = data[i];
   resultsHTML += `
    <div class="individual_score">
        <div class="individual_score_description">
            <img src="${item.icon}" alt="${item.category} icon"/>
            <p>${item.category}</p>
        </div>
        <p class="individual_score_points"><span class="points_highlight">${item.score}</span> / 100</p>
    </div>
   `
}

resultsSection.insertAdjacentHTML('afterbegin', resultsHTML);