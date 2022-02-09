# Smart sensor with edge AI Dashboard

> React app to display sensor array data and classification results.

## Prerequisite
node version: `>= 16.13.0`<br />
npm version: `>= 8.1.0`
mongoDB community installed locally

---

## Usage
### `npm i` in root and client folders
### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder.<br>

---

## MongDB Replica Set

Convert Standalone MongoDB to Replica Set as server uses MongoDB Change Streams
---

## Generate fake sensor array data
``` bash
python3 fake_data/fake_data.py
```
## Connecting to BLE Device
Please use Google Chrome and enable "Experimental Web Platform features" on Chrome.
chrome://flags/#enable-experimental-web-platform-features 
set to enable

## Dashboard
![](/img/dashboard.png)