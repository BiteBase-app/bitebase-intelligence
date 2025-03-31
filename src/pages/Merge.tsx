
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, FileCode, GitBranch, GitMerge, Terminal } from "lucide-react";

const Merge = () => {
  return (
    <Layout>
      <div className="container py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Project Merger</h1>
            <p className="text-muted-foreground">
              Tools and instructions to merge the pre-lunch.bitebase.app repository with this project.
            </p>
          </div>
        </div>

        <Tabs defaultValue="instructions" className="mt-6">
          <TabsList className="mb-4">
            <TabsTrigger value="instructions">
              <FileCode className="mr-2 h-4 w-4" />
              Instructions
            </TabsTrigger>
            <TabsTrigger value="helper">
              <Terminal className="mr-2 h-4 w-4" />
              Merge Helper
            </TabsTrigger>
            <TabsTrigger value="manual">
              <GitMerge className="mr-2 h-4 w-4" />
              Manual Merge
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="instructions" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Repository Merge Instructions</CardTitle>
                <CardDescription>
                  Follow these steps to merge the BiteBase pre-lunch repository with your current project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">1. Clone the Repository Locally</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>git clone https://github.com/BiteBase-app/pre-lunch.bitebase.app.git pre-lunch-bitebase</code>
                  </pre>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">2. Examine Repository Structure</h3>
                  <p className="text-sm text-muted-foreground">
                    Take time to understand the structure and components of the cloned repository.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">3. Copy Relevant Files</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Copy components, assets, and utilities that you want to integrate</li>
                    <li>Pay special attention to UI components, hooks, utilities, assets, and styling</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">4. Update Your Project</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Place copied components in appropriate directories</li>
                    <li>Update imports in your files to point to the new components</li>
                    <li>Resolve any style conflicts or inconsistencies</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">5. Test Integration</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Test each integrated component to ensure it works with your existing codebase</li>
                    <li>Address any issues that arise during testing</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/merge-helper" target="_blank" rel="noopener noreferrer">
                    <Terminal className="mr-2 h-4 w-4" /> Run Merge Helper
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="helper" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Merge Helper Script</CardTitle>
                <CardDescription>
                  Use this script to automate parts of the merge process
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">How to Use the Merge Helper</h3>
                  <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Make sure you have Node.js installed</li>
                    <li>Clone the repository as mentioned in the instructions</li>
                    <li>Place the merge-helper.js file in your project root</li>
                    <li>Run the script using Node.js: <code>node merge-helper.js</code></li>
                    <li>Follow the interactive prompts to select which files to copy</li>
                  </ol>
                </div>
                
                <div className="bg-muted p-4 rounded-md overflow-x-auto max-h-96">
                  <pre className="text-xs">
                    <code>
{`/**
 * Helper script to assist with merging repositories
 * 
 * Usage: 
 * 1. Place this file in your project root
 * 2. Run with Node.js: node merge-helper.js
 * 
 * This script requires the 'fs-extra' package:
 * npm install fs-extra
 */

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration - update these paths
const sourceRepoPath = './pre-lunch-bitebase'; // Path to cloned repository
const targetRepoPath = './'; // Path to current project

// Directories to copy from source to target
const directoriesToCopy = [
  { source: 'src/components', target: 'src/components' },
  { source: 'src/hooks', target: 'src/hooks' },
  { source: 'src/pages', target: 'src/pages' },
  { source: 'src/utils', target: 'src/utils' },
  { source: 'public', target: 'public' },
  // Add more directories as needed
];

// Files to copy (relative to repo root)
const filesToCopy = [
  // Add specific files to copy
];

// Function to copy directories with confirmation
async function copyDirectoryWithConfirmation(source, target) {
  return new Promise((resolve) => {
    rl.question(\`Copy \${source} to \${target}? (y/n): \`, async (answer) => {
      if (answer.toLowerCase() === 'y') {
        try {
          const sourceFullPath = path.join(sourceRepoPath, source);
          const targetFullPath = path.join(targetRepoPath, target);
          
          if (fs.existsSync(sourceFullPath)) {
            console.log(\`Copying \${source} to \${target}...\`);
            await fs.copy(sourceFullPath, targetFullPath, {
              overwrite: false,
              errorOnExist: false
            });
            console.log(\`Successfully copied \${source} to \${target}\`);
          } else {
            console.log(\`Source directory \${source} does not exist\`);
          }
        } catch (err) {
          console.error(\`Error copying \${source} to \${target}:\`, err);
        }
      } else {
        console.log(\`Skipping \${source}\`);
      }
      resolve();
    });
  });
}

// Main function
async function mergeRepositories() {
  console.log('Starting repository merge process...');
  
  // Create directories if they don't exist
  for (const dir of directoriesToCopy) {
    const targetDir = path.join(targetRepoPath, dir.target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
  }
  
  // Copy directories
  for (const dir of directoriesToCopy) {
    await copyDirectoryWithConfirmation(dir.source, dir.target);
  }
  
  // Copy individual files
  for (const file of filesToCopy) {
    const sourceFile = path.join(sourceRepoPath, file);
    const targetFile = path.join(targetRepoPath, file);
    
    if (fs.existsSync(sourceFile)) {
      await new Promise((resolve) => {
        rl.question(\`Copy file \${file}? (y/n): \`, async (answer) => {
          if (answer.toLowerCase() === 'y') {
            try {
              await fs.copy(sourceFile, targetFile, { overwrite: false });
              console.log(\`Successfully copied \${file}\`);
            } catch (err) {
              console.error(\`Error copying \${file}:\`, err);
            }
          } else {
            console.log(\`Skipping \${file}\`);
          }
          resolve();
        });
      });
    } else {
      console.log(\`Source file \${file} does not exist\`);
    }
  }
  
  console.log('Repository merge process completed.');
  rl.close();
}

// Run the merge process
mergeRepositories();`}
                    </code>
                  </pre>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <a href="/merge-helper.js" download>
                    <Code className="mr-2 h-4 w-4" /> Download Script
                  </a>
                </Button>
                <Button className="flex-1">
                  <Terminal className="mr-2 h-4 w-4" /> Run in Terminal
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="manual" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Manual Merge Process</CardTitle>
                <CardDescription>
                  Follow this checklist to manually merge the repositories
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Component Integration Checklist</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="deps" className="mt-1" />
                      <label htmlFor="deps" className="text-sm">
                        Check for dependencies (in package.json) and install any missing ones
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="imports" className="mt-1" />
                      <label htmlFor="imports" className="text-sm">
                        Update import paths in the copied files
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="styles" className="mt-1" />
                      <label htmlFor="styles" className="text-sm">
                        Resolve any styling conflicts
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="test" className="mt-1" />
                      <label htmlFor="test" className="text-sm">
                        Test the integrated components
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="routes" className="mt-1" />
                      <label htmlFor="routes" className="text-sm">
                        Update your routing if adding new pages
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Post-Integration Tasks</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="cleanup" className="mt-1" />
                      <label htmlFor="cleanup" className="text-sm">
                        Clean up any duplicate or unused components
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="consistency" className="mt-1" />
                      <label htmlFor="consistency" className="text-sm">
                        Ensure consistent styling across the application
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="docs" className="mt-1" />
                      <label htmlFor="docs" className="text-sm">
                        Update documentation to reflect the new components
                      </label>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="commit" className="mt-1" />
                      <label htmlFor="commit" className="text-sm">
                        Commit your changes to version control
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <GitBranch className="mr-2 h-4 w-4" /> Create Merge Branch
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Merge;
