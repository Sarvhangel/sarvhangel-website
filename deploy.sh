#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mRemoving public folder...\033[0m\n"

# Remove the public folder
rm -rf public

printf "\033[0;32mCleaning gitmodules file...\033[0m\n"

# Clean gitmodules file
cat /dev/null > .gitmodules

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Adding git submodules
git submodule add --force -b master https://github.com/Sarvhangel/Sarvhangel.github.io public

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

# Commit message.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi

# Add changes to git.
git add .

printf "\033[0;32mCommiting changes to submodule...\033[0m\n"

# Commit changes.
git commit -m "$msg"

# Push source and build repos.
git push origin master

printf "\033[0;32mCommiting changes...\033[0m\n"

# Go To Project folder
cd ..

# Add changes to git.
git add .

# Commit changes
git commit -m "$msg"

# Push source and build repos.
git push origin master