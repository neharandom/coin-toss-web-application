document.getElementById('tossButton').addEventListener('click', function() {
    // Randomly generate 0 or 1
    const toss = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    // Update the result paragraph
    document.getElementById('result').textContent = `It's ${toss}!`;
});
