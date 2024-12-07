# 🚀 Torpedo Calculator - Carrier Command 2

A web-based calculator for computing torpedo activation delays in Carrier Command 2.

## Features

- Calculates optimal torpedo activation delay based on target distance
- Accounts for arming distance (default 1000m)
- Includes comprehensive torpedo strategy guide
- Dark mode UI for better visibility

## Usage

1. Enter the distance to your target
2. Verify arming distance (default: 1000m)
3. Click "Calculate" to get the activation delay in seconds

## Technical Details

- Pure HTML/CSS/JavaScript implementation
- No external dependencies
- CSP (Content Security Policy) enabled
- Mobile-responsive design

## Quick Reference

- Torpedo Speed: 50 meters/second
- Optimal Arming Distance: 1000m before target
- Formula: `(Distance - ArmingDistance) ÷ 50 = Delay`

## Files

- [index.html](index.html) - Main application interface
- [styles.css](styles.css) - Dark theme styling
- [script.js](script.js) - Calculator logic

## Strategy Tips

- Fire torpedoes broadside to your hull
- Avoid firing along bow/stern (adds 20s turn time)
- Be aware of ocean currents affecting trajectory
- Account for enemy noisemaker defenses

## Attribution

Based on information from [StrategyWiki's Carrier Command 2 Guide](https://strategywiki.org/wiki/Carrier_Command_2/Carrier:_Offensive_Weapons#Torpedo_Strategy)