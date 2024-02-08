# Sprint 7 project
 1. Sprint 7 project
description of the project: testing GET, POST ,PUT, and DELETE methods, by choosing one endpoint from the Urban Grocers documentation and write at least two tests for each one: to Check the response status code and to Parse the response and check that the response body contains the expected data. all positive testing performed by Javascript using command such as let, const, test try, catch...
description of the technologies and techniques used: all of the above was achived by using GitBash, Visual Studio Code, tasks are fron TripleTen platform, endpoint are from API Urban Grocers Docs and GitHub platform.
instructions on how to run the tests: the test for each endpoint are in a separate file, the status codes/response values should match the documentation, Each test should have a descriptive test names, GET, POST ,PUT, and DELETE methods should all be covered, the tests can return PASSED or FAILED results as long as the expected results are valid and are based on documentation and there should be no errors (based on your code) while running the tests. 
the testes were all run in the VS Code, by using "npx jest" command in the terminal.

 2. Setup
Before running the tests, make sure you have the following software installed:
GitHub, GitBash, Postman, Visual Stodio Code and Windows.

 3. Step 1: Connect your GitHub-
 click the "Link GitHub account" button in the widget at the top of "https://tripleten.com/trainer/qa-engineer/lesson/482cdbf3-8f52-400d-9108-af4c9c23f617/?from=program" page.
 This will take you to a new browser tab where you'll be asked to confirm that you want to link your GitHub account. If you're not signed in to GitHub already, you'll be asked to enter your username and password. Upon confirming, your Practicum profile will be connected to your GitHub profile via GitHub's secure API.
 Step 2: Clone the repo to your computer-
 Once you’ve linked your Practicum account with GitHub, a repository will be created automatically. The repository name will be hm07-qa-us.
 Go to GitHub and clone the new repo to your local computer, using the following steps:
Open your preferred terminal emulator. If you’re on Windows, use Git Bash.
If you haven’t done so already, create a directory to store all of your projects. For example:
cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
 Clone the repo. The command you use will depend on the authentication strategy that you’re using:
 # if you are using HTTPS
 git clone https://github.com/username/hm07-qa-us.git
 # if you are using SSH
 git clone git@github.com:username/hm07-qa-us.git
Step 3: Work with the project locally-Before starting your work with the project, run npm install from the console in your project folder. 
When you’re ready to start working, hit the “start server” button to get your server URL.


Configuration

the servers URL need to be extracted from the TripleTen platfom by clicking "start server".
then, use this URL to run the commands on PostMan with the accordinate API.
by the results of your tests on PostMan you will know what response code and response body you shoul expect.

4. Running the Tests
run the tests GET,DELETE,PUT and POST as described in the given test.js files with the data extracted from your tests in PostMan accordingly.

5. Test cases
Name of the test cases:
GETtest1 Checking the response status code
GETtest2 Checking that the response body contains the expected data
POSTtest1 Checking the response status code
POSTtest2 Checking that the response body contains the expected data
PUTtest1 Checking the response status code
PUTtest2 Checking that the response body contains the expected data
DELETEtest1 Checking the response status code
DELETEtest2 Checking that the response body contains the expected data

Testing success rate (passed or failed):8/8 passed.

6. Coding style:
camelCase is used for function and variable names, Only nouns are used as variable names, Checklist 2 Variable names clearly describe what is stored in them. If the project has several variables with similar data, those variables have unique but descriptive names, Function names are descriptive and reflect what they do, Function names start with a verb, Names must not include unsuitable/unclear abbreviations.
