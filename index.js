const core = require('@actions/core');
const github = require('@actions/github');
const githubToken = process.env.GITHUB_TOKEN;
const octokit = new github.GitHub(githubToken);

// most @actions toolkit packages have async methods
async function run() {
  try { 
    const title = core.getInput('title');
    const returnval = await octokit.issues.create(
      {
        ...github.context.repo,
        title
      }
    );
    console.log(returnval);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
