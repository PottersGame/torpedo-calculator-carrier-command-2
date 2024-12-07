document.getElementById('torpedoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const armingDistance = parseFloat(document.getElementById('arming_distance').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(distance) || isNaN(armingDistance) || distance <= 0 || armingDistance <= 0) {
        resultDiv.textContent = "Please enter valid positive numbers.";
        return;
    }
    
    const torpedoSpeedMps = 50;
    const distanceToArm = distance - armingDistance;
    
    if (distanceToArm < 0) {
        resultDiv.textContent = `Error: Target is ${distance}m away but torpedo needs ${armingDistance}m to arm. ` +
                               `Either increase distance to target or reduce arming distance.`;
        return;
    }
    
    const activationDelaySeconds = distanceToArm / torpedoSpeedMps;
    const roundedActivationDelay = Math.round(activationDelaySeconds / 10) * 10;
    
    resultDiv.textContent = `${roundedActivationDelay} seconds`;
});