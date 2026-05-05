# Test Automation Setup

## Prerequisites

Install the required Python and Node.js dependencies:

Python 3.11 or 3.12 is required.

Change Directory to ```test_automation``` in terminal and run the following commands.

```bash
pip install --upgrade pip
```
```bash
pip install playwright openpyxl
```
```bash
npm install
```

## Run with Excel input

```bash
python test_automation.py --excel "test_automation/Assignment 1 - Test cases.xlsx" --url "https://www.pixelssuite.com/chat-translator" --wait-ms 15000 --type-delay-ms 80 --slow-mo-ms 200 --save-every 1
```

## Notes

- `playwright` is used for browser automation.
- `openpyxl` is used for working with Excel files.
- `npm install` installs the Node.js dependencies for this project.