# Contributing to DevSteps

Thank you for your interest in contributing to DevSteps! This platform is built by the community, for the community. Every contribution helps make quality programming education accessible to everyone.

## 🌟 How to Contribute

There are many ways to contribute to DevSteps:

### 1. **Write Course Content**
Create new lessons or improve existing ones. All content is written in MDX format.

### 2. **Review Content**
Help review and improve existing lessons for clarity and accuracy.

### 3. **Translate Content**
Translate lessons to make them accessible to non-English speakers.

### 4. **Fix Bugs**
Found a typo or technical issue? Submit a fix!

### 5. **Improve UI/UX**
Help make the platform more user-friendly.

## 📝 Writing Course Content

### Course Structure

Courses are organized in the following structure:

```
src/lib/
├── content/
│   └── courses/
│       └── [course-id]/
│           ├── day-1/
│           │   ├── lesson-1.mdx
│           │   ├── lesson-2.mdx
│           │   └── ...
│           ├── day-2/
│           │   └── ...
│           └── ...
└── data/
    └── course-details/
        └── [course-id].json
```

### MDX Lesson Format

Each lesson should follow this structure:

```mdx
---
title: "Your Lesson Title"
description: "Brief description of what students will learn"
day: 1
lesson: 1
duration: "15 min"
type: "reading"
author: "Your Name"
lastUpdated: "2025-11-01"
tags: ["tag1", "tag2", "tag3"]
---

# Lesson Title

Your content here...

## Sections

Use clear headings and subheadings.

### Code Examples

\`\`\`javascript
// Add code examples with explanations
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

### Key Takeaways

- Point 1
- Point 2
- Point 3

## Practice Exercise

Include a hands-on exercise for students to practice.

---

**Next Lesson:** [Next Lesson Title](/courses/course-id/day-1/next-lesson)
```

### Course Metadata JSON

Each course needs a JSON file in `src/lib/data/course-details/[course-id].json`:

```json
{
  "id": "course-id",
  "title": "Course Title",
  "description": "Short description",
  "longDescription": "Detailed description of the course",
  "language": "en",
  "duration": 7,
  "level": "Beginner",
  "estimatedHours": 14,
  "lastUpdated": "2025-11-01",
  "color": "purple",
  "contributors": [
    {
      "name": "Your Name",
      "title": "Community Contributor",
      "bio": "Brief bio",
      "avatar": "👨‍💻"
    }
  ],
  "community": {
    "contributorsCount": 1,
    "githubRepo": "https://github.com/devsteps/course-name"
  },
  "whatYouWillLearn": [],
  "requirements": [],
  "targetAudience": [],
  "curriculum": [],
  "features": []
}
```

## ✅ Content Guidelines

### Writing Style

- **Clear and Concise**: Use simple language
- **Beginner-Friendly**: Assume no prior knowledge
- **Practical**: Include real-world examples
- **Structured**: Use headings, bullet points, and code blocks
- **Progressive**: Build on previous lessons

### Code Examples

- Include comments explaining the code
- Show both good and bad examples when relevant
- Test all code before submitting
- Use proper syntax highlighting

### Exercises

- Include at least one exercise per lesson
- Provide hints without giving away the solution
- Vary difficulty levels

## 🚀 Getting Started

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/devsteps.git
   cd devsteps
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Make Your Changes**
   - Add your lesson files
   - Update course metadata
   - Test locally

6. **Commit and Push**
   ```bash
   git add .
   git commit -m "Add: Description of your changes"
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Describe your changes
   - Wait for review

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Content is original or properly attributed
- [ ] All code examples are tested and working
- [ ] Markdown is properly formatted
- [ ] No spelling or grammar errors
- [ ] Follows the style guide
- [ ] Course metadata is updated
- [ ] Commit messages are clear

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome beginners
- Provide constructive feedback
- Credit others' work
- Focus on education quality

## 💡 Content Ideas

Need inspiration? Consider creating:

- Beginner courses on popular technologies
- Advanced topics with clear explanations
- Project-based tutorials
- Best practices guides
- Common pitfalls and how to avoid them

## 🎯 Quality Standards

All content should:

- Be technically accurate
- Include working code examples
- Have clear learning objectives
- Be properly structured
- Include exercises for practice

## 📞 Get Help

- **Questions?** Open a GitHub Discussion
- **Bug Reports?** Create an Issue
- **Chat with us:** Join our Discord community

## 🙏 Recognition

All contributors will be:

- Listed as course contributors
- Credited in the contributors page
- Part of the DevSteps community

Thank you for helping make programming education accessible to everyone!

---

**Happy Contributing! 🚀**
