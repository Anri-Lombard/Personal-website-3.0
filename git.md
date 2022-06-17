# Some lessons about GIT 
1. Quick commit: git commit -am "This adds and commits at the same time"
2. Change commit message or prevent unnecessary new commit: git commit --amend -m "Hey" OR git commit --amend -m --no-edit
3. Undo commit: git revert
4. Run VSCode in github: press period in github
5. Stash changes: git stash THEN WHEN READY TO USE AWKWARD CHANGES git stash pop
6. Stash alternative: git stash save <name> THEN git stash apply <name_index>
7. Better git log: git log --graph --oneline --decorate
8. Fix bug: git bisect <last_commit>
9. Squash commits: git rebase --interactive (change pick to squash then)
10. Previous branch: git checkout -
