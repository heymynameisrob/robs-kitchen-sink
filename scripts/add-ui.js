import fs from 'fs/promises';
import path from 'path';
import https from 'https';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

const UI_REPO_URL = process.env.UI_REPO_URL;
if (!UI_REPO_URL) {
  console.error('UI_REPO_URL environment variable is not set.');
  process.exit(1);
}

const REMOTE_JSON_URL = `${UI_REPO_URL}/components.json`;
const LOCAL_COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');

async function fetchRemoteJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function installDependencies(dependencies) {

  if (dependencies && dependencies.length > 0) {
    const command = `yarn add ${dependencies.join(' ')}`;
    await execPromise(command);
    console.log('Dependencies installed successfully.');
  }
}

async function copyFile(remoteFilePath, localFilePath) {
  const fileContent = await fetchRemoteJSON(`${UI_REPO_URL}/${remoteFilePath}`);
  await fs.mkdir(path.dirname(localFilePath), { recursive: true });
  await fs.writeFile(localFilePath, fileContent);
  console.log(`File copied to ${localFilePath}`);
}

async function addComponent(componentId) {
  try {
    const components = await fetchRemoteJSON(REMOTE_JSON_URL);
    const component = components.find(c => c.id === componentId);
    
    if (!component) {
      console.error(`Component with id "${componentId}" not found.`);
      return;
    }

    await installDependencies(component.dependencies);

    const localFilePath = path.join(LOCAL_COMPONENTS_DIR, component.file);
    await copyFile(component.file, localFilePath);

    console.log(`Component "${component.name}" added successfully.`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Check if a component ID was provided
const componentId = process.argv[2];
if (!componentId) {
  console.error('Please provide a component ID.');
  process.exit(1);
}

addComponent(componentId);