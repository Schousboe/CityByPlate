# German License Plate Lookup

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A lightweight web application that allows users to look up the first letters on a german license plate (district code) and find out which **city or district** they represent.

---

## Overview

This project provides a simple, fast, and offline-capable tool to identify German vehicle registration codes.  
Users can enter a license plate abbreviation (for example, `HH`, `B`, or `M`) and instantly see the corresponding city or region.

---

## Features

- Search for any German license plate abbreviation  
- Displays the corresponding city or district name
- Uses a local JSON file as the data source (no external API required)  
- Lightweight and dependency-free  

---

## Technologies Used

- **Vanilla JavaScript** - Core logic/Fetching and displaying data
- **JSON** - Data source for license plate codes  

---

## Usage

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/Schousboe/CityByPlate.git
   &&
   cd CityByPlate
   ```

2. **Add upstream repository** 

    ```bash
    git remote add upstream https://github.com/Schousboe/CityByPlate.git
    ```
   
3. **Install Wrangler**

    ```bash
    npm install -g wrangler # This will install wrangler globally, remove "-g" if you don't want  it global
    ```

4. **Start up the beauty**

    ```bash
    npx wrangler pages dev
    ```

5. **Open your web browser**

     Open [https://localhost:8443](https://localhost:8443) in your browser.


6. **Enter a license plate abbreviation and the result will be displayed immediately.** 
  
    Enter an abbreviation like `B` for Berlin or `M` for Munich, click "Search" and watch the magic happen!

---

## How It Works

1. When the user clicks "Search", the function `findCity` runs.

2. The script loads the `numberplates.json` file asynchronously.

3. The user input is matched against the dataset.

4. If a match is found, the city or region name is displayed; otherwise, an error message appears.

---

## Future Improvements

Please leave an issue or PR on some of this, if you wanna help.

- Implement autocomplete or live suggestions for abbreviations
  
- Improve mobile responsiveness and accessibility

- Include additional metadata such as federal state or region

---

## License

This project is licensed under the [MIT License](LICENSE).
You are free to use, modify, and distribute it for personal or commercial purposes.

<div align="center"><sub>Made with ❤ by <a target="_blank" href="https://github.com/Schousboe">Schousboe</sub><a>
