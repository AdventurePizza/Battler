
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## how to contribute / git basics

Send Taner your github username to be added to the repo, you'll receive an invite through email.

First, get the latest code by pulling while on the `master` branch, `git pull origin master`

Make your commits on a new branch. Checkout your branch with a name related to what changes you are making, like:

`git checkout -b add-vr-panel-item` 

`git checkout -b fix-font-size`

Check your branch / branches with `git branch`

Switch between existing branches with `git checkout branch-name`

Add and commit all changes recursively from current directory:

`git add .`

`git commit -m "i made these changes"`

When ready for code review, push to github and make a merge request. Then message Leo for a review

`git push origin my-branch-name`

Make sure to pull to merge the latest code before pushing to avoid merge conflicts

`git pull origin master` while on your branch
