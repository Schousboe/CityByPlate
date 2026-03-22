# Contributing to CityByPlate

First of all, thank you for considering contributing to **CityByPlate**.  
Contributions of all kinds are welcome - whether it's fixing bugs, improving the dataset, enhancing the UI, or suggesting new features.

This document explains how to contribute and how the development workflow works.

---

## Ways to Contribute

You can help the project in several ways:

- Fix bugs or unexpected behavior
- Improve the license plate dataset
- Improve documentation
- Improve UI/UX or accessibility
- Add new features
- Suggest improvements through issues

If you are unsure whether something is worth contributing, feel free to open an **issue** first.

---

## Development Workflow

CityByPlate uses a simple development workflow based on Git branches.

### Branches

- `main` - stable production branch  
- `dev` - quick test  

All contributions should be based on the **`dev` branch**.

---

## Setting Up the Project

1. **Clone the repository**

```bash
git clone https://github.com/Schousboe/CityByPlate.git
cd CityByPlate
```

2. **Add the upstream repository**

```bash
git remote add upstream https://github.com/Schousboe/CityByPlate.git
```

3. **Switch to the development branch**

```bash
git checkout dev
```

4. **Generate the SSL certificate (first time only)**

```bash
chmod +x ./scripts/cert.sh
./scripts/cert.sh
```

5. **Start a local HTTPS server**

```bash
node server.js
```

**Now, you just open [localhost:8443](https://localhost:8443) and it's ready** 

---

## Project Areas You Can Contribute To

### Dataset

The finalized license plate dataset is stored in `data/numberplates.json`. This file is generated automatically and should _not_ be edited manually. 
The JSON is produced by running the [convertToJson Python script](https://github.com/Schousboe/CityByPlate/blob/dev/scripts/convertToJson.py), 
Which converts the raw dataset from numberplates.txt into a structured JSON format used by CBP.

To prevent formatting errors or inconsistencies, all dataset edits should be made in `data/numberplates.txt` and then, after making changes, run the conversion script to regenerate the JSON file.

If you notice missing, outdated, or incorrect entries, feel free to submit a fix using the methods described above.

### Frontend

All the frontend files are located in:

```/public```.

The relevant files to edit are:

```
index.html,
style.css,
script.js
```

Possible improvements include general enhancements to the user experience, interface design, accessibility, and overall functionality of the application. Contributions that improve performance, usability, or make the tool more intuitive and efficient are especially valuable.

### Cloudflare functions

All the serverless endpoints to cloudflare are located in 

`/functions`

There are eg. `data.js`, which returs the [dataset](data/numberplates.json) and `health.js` which is a health endpoint for [the uptime monitor](citybyplate.pages.dev/status).

Possible improvements could be caching, performance optimizations and additional API endpoints, but generally there shouldn't be any changes in here without talking with the owner first.

---

## Commit message guidelines

This repository follows conventional-style commits to generate release notes automatically.

Examples:

```
feat: add autocomplete for license plate search
fix: correct district name for code "XYZ"
docs: update README usage instructions
refactor: simplify search logic
```

Types accepted by the release-note generator:

| Type | Meaning |
| ---- | ------- |
| feat | New feature |
| fix | Bug fix |
| doc | Documentation changes |
| perf | Performance optimization |
| refactor | Code restructuring | 
| style | Code styling |
| test | Code/functionality testing |
| chore | Maintenance tasks |

---

## Pull request process

1. Fork the repository
2. Create a branch from main
3. Make your changes
4. Commit with clear messages
5. Push your branch
6. Open a Pull Request to main

Please include:

- A clear description of the change
- Screenshots (if UI changes)
- Reference to any related issue

## Code style

The project _intentionally_ stays simple and dependency-free.

Guidelines:

- Prefer vanilla JavaScript
- Keep the code readable and lightweight
- Avoid unnecessary dependencies
- Keep functions small and focused

## Reporting bugs

If you encounter a bug, please open an issue and include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS (if relevant)

## Questions

If you have any type of question to the project, just open an issue and ask :)

## License

By contributing to this repository, you agree that your contributions will be licensed under [the MIT License](/LICENSE).

<div align="center"> <sub>Built with passion by <a target="_blank" href="https://github.com/Schousboe">Schousboe</a></sub> </div> 




