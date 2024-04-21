export default function Demo() {
  const gradientColors = ['#ff0000', '#00ff00', '#0000ff']; // Array of gradient colors

  // Function to generate random hexadecimal color
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Function to generate random gradient
  const generateRandomGradient = () => {
    const startColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    const endColor = generateRandomColor();
    return `linear-gradient(to right, ${startColor}, ${endColor})`;
  };

  return (
    <div className="">
      <h3 class="text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">  This is A Demo Component </h3>
    </div>
  );
}

