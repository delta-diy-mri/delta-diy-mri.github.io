# Contributing to Delta DIY MRI

Welcome! 👋  
Thank you for contributing to the Delta DIY MRI ecosystem.

This project spans multiple repositories and disciplines (hardware: magnet, gradients, RF;  firmware and software:spectrometer, acquisition, reconstruction; mechanical designs of parts and phantoms, etc.), and this guide is designed to help **participants and mentors collaborate effectively** during the workshop and beyond.

---

## Table of Contents

- Getting Started
- Ways to Contribute
- Branching Strategy
- Development Workflow
- Pull Request Guidelines
- Code Review Process
- Workshop-Specific Guidelines
- After the Workshop
- Multi-Repository Coordination
- Commit Message Guidelines
- Code Style & Best Practices
- Getting Help

---

## Getting Started

1. Fork the repository (if external contributor)

2. Clone your fork
   git clone <your-fork-url>
   cd <repo-name>

3. Add upstream
   git remote add upstream <original-repo-url>

4. Sync with upstream
   git fetch upstream
   git checkout dev
   git merge upstream/dev

---

## Ways to Contribute

- Hardware design (coils, magnet, electronics)
- RF systems and tuning
- Gradient design and optimization
- Reconstruction algorithms
- Software tools and GUIs
- Documentation and tutorials
- Testing and validation

---

## Branching Strategy

| Branch Type | Purpose | Stability |
|------------|--------|----------|
| main       | Production-ready code | High |
| dev        | Active development | Medium |
| feature/*  | New features | Low |
| workshop/* | Rapid experiments | Very Low |
| hotfix/*   | Urgent fixes | High |

Core rules:
- No direct commits to main
- All changes via Pull Requests
- Branch from dev (unless hotfix)
- Keep PRs small and focused

Naming conventions:

Feature branches:
feature/<module>-<description>

Workshop branches:
workshop/day1-rf
workshop/team-recon

Hotfix branches:
hotfix/<issue-description>

---

## Development Workflow

1. git checkout dev
   git pull origin dev

2. git checkout -b feature/<name>

3. git add .
   git commit -m "feat: short description"

4. git push origin feature/<name>

5. Open Pull Request to dev

---

## Pull Request Guidelines

Each PR should include:
- Description of the change
- Problem being solved
- How it was tested
- Screenshots / plots if applicable

Checklist:
[ ] Code runs without errors
[ ] No broken dependencies
[ ] Documentation updated

---

## Code Review Process

- At least one mentor approval required - please refer to https://delta-diy-mri.github.io/ for the appropriate mentor
- Focus on correctness, clarity, reproducibility
- Discussion encouraged - please use GitHub discussions - https://github.com/delta-diy-mri/delta-diy-mri.github.io/discussions

---

## Workshop-Specific Guidelines

- Prioritize learning and speed of trying out implementations
- Use workshop branches for experiments
- Merge into dev daily
- Coordinate within teams

---

## After the Workshop

- Reduce workshop branches
- Enforce stricter reviews
- Add CI/testing
- Stabilize main

---

## Multi-Repository Coordination

- Use consistent branch names
- Reference related PRs:

Depends on: repo-name#123  
Related to: repo-name#456

---

## Commit Message Guidelines

Format:
<type>: <short description>

Types:
- feat
- fix
- docs
- refactor
- test

---

## Code Style & Best Practices

- Keep code modular and readable
- Comment non-obvious logic
- Prefer clarity over cleverness
- Avoid breaking existing functionality

---

## Getting Help

- Open a draft PR early
- Ask a mentor
- Use GitHub Issues
- Discuss with your team

---

## Final Notes

This project enables hands-on MRI system building and interdisciplinary collaboration.

When in doubt: open a PR early and ask for feedback.

Happy building! 🧲
