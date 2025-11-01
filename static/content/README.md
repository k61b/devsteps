# DevSteps Course Content

This directory contains all the course lessons in Markdown format. All content is community-driven and can be edited by anyone!

## 📁 Directory Structure

```
static/content/
└── courses/
    └── [course-id]/
        ├── en/                    # English lessons
        │   ├── lesson-slug-1.md
        │   ├── lesson-slug-2.md
        │   └── lesson-slug-3.md
        └── tr/                    # Turkish lessons
            ├── lesson-slug-1.md
            ├── lesson-slug-2.md
            └── lesson-slug-3.md
```

**Note:** Lesson files are organized by language code (en, tr, etc.) and stored in the `static/content/courses/` directory so they can be served as static assets.

## ✍️ How to Add a Lesson

### 1. Create a Markdown File

Create a new `.md` file in the `static/content/courses/[course-id]/[lang]/` directory. Use kebab-case for the filename (e.g., `what-is-javascript.md`).

**Language Codes:**
- `en` - English
- `tr` - Turkish (Türkçe)

### 2. Add Frontmatter

Every lesson must include frontmatter metadata at the top:

```markdown
---
title: "Your Lesson Title"
description: "A brief description of what students will learn"
type: "reading"  # or "exercise", "project", "quiz"
duration: "15 min"
day: 1
order: 1
nextLesson: "next-lesson-slug"  # optional
---

# Your Lesson Title

Your content starts here...
```

**Important:** Do NOT add a `<script>` block in the markdown. The frontmatter is automatically parsed and used as metadata.

### 3. Write Your Content

Use standard Markdown syntax. Supported features:

#### Headings
```markdown
# Heading 1
## Heading 2
### Heading 3
```

#### Text Formatting
```markdown
**Bold text**
*Italic text*
`inline code`
```

#### Code Blocks
````markdown
```javascript
// Your code here
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```
````

#### Lists
```markdown
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2
```

#### Blockquotes
```markdown
> This is a quote or important note
```

#### Links
```markdown
[Link text](https://example.com)
```

#### Images
```markdown
![Alt text](image-url.jpg)
```

## 📝 Lesson Types

### Reading (`type: "reading"`)
- Educational content
- Explanations and concepts
- Examples and demonstrations

### Exercise (`type: "exercise"`)
- Practice problems
- Coding challenges
- Quick tasks to reinforce learning

### Project (`type: "project"`)
- Hands-on projects
- Real-world applications
- Students share their work on GitHub

### Quiz (`type: "quiz"`)
- Knowledge checks
- Multiple choice questions
- Self-assessment

## 🎯 Writing Guidelines

### Do's ✅
- Write in clear, simple language
- Use examples and code snippets
- Break complex topics into smaller sections
- Include practical, real-world applications
- Add visual elements (emojis, formatting) to make content engaging
- Test all code examples before publishing
- Link to additional resources

### Don'ts ❌
- Don't assume too much prior knowledge
- Avoid overly technical jargon without explanation
- Don't skip important foundational concepts
- Avoid very long paragraphs (break them up!)
- Don't copy content from other sources without attribution

## 🚀 Project Lessons

For project-type lessons, include:

1. **Clear objectives** - What will students build?
2. **Requirements** - What features should it have?
3. **Step-by-step guide** - Break it into manageable steps
4. **Hints section** - Help for common struggles
5. **Example solution** - One possible implementation (in a `<details>` block)
6. **Submission instructions** - How to share on GitHub

Example structure:
```markdown
## 🎯 Project Goal
What students will build

## 📋 Requirements
List of features to implement

## 📝 Step-by-Step Guide
### Step 1: Setup
Instructions...

### Step 2: Implementation
More instructions...

## 💡 Hints
<details>
<summary>Click for hints</summary>
Helpful tips here
</details>

## ✅ Example Solution
<details>
<summary>Click to see solution</summary>

```javascript
// Your solution code
```
</details>
```

## 📚 Adding Lessons to a Course

After creating your lesson file, update the course detail JSON file:

1. Open `/src/lib/data/course-details/[course-id]-en.json`
2. Find the appropriate day in the `curriculum` array
3. Add your lesson to the `lessons` array:

```json
{
  "title": "Your Lesson Title",
  "duration": "15 min",
  "type": "reading",
  "description": "Brief description",
  "slug": "your-lesson-slug"
}
```

## 🌍 Translations

To add translations:

1. Create a language-specific version of your lesson:
   - `lesson-name.md` (default/English)
   - Can add language suffixes if needed for organization

2. Update both language versions of the course JSON:
   - `course-id-en.json`
   - `course-id-tr.json`

## 🤝 Contributing

### How to Contribute

1. **Fork the repository** on GitHub
2. **Create a branch** for your lesson: `git checkout -b add-lesson-javascript-arrays`
3. **Write your lesson** following the guidelines above
4. **Test it locally** - Make sure it renders correctly
5. **Update course JSON** - Add your lesson to the curriculum
6. **Commit with clear message**: `git commit -m "Add lesson: JavaScript Arrays"`
7. **Push and create Pull Request**

### Commit Message Format

```
Add lesson: [Lesson Title]
Update lesson: [Lesson Title]
Fix typo in: [Lesson Title]
Improve examples in: [Lesson Title]
```

### Pull Request Template

When creating a PR, include:
- Course and day number
- Lesson title and type
- Brief description of what the lesson covers
- Checklist confirming you followed the guidelines

## 🐛 Reporting Issues

Found an error in a lesson? Please:

1. **Open an issue** on GitHub
2. Include:
   - Course and lesson name
   - Description of the issue
   - Suggested correction (if you have one)

## 💬 Getting Help

Need help creating content?

- Join our Reddit community: r/devsteps
- Ask questions in GitHub Discussions
- Review existing lessons for examples

## 📖 Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [MDSvex Documentation](https://mdsvex.pngwn.io/)
- [DevSteps Style Guide](coming soon)

## ⭐ Best Practices

1. **Start with learning objectives** - What will students be able to do?
2. **Use active voice** - "You will learn" vs "It will be learned"
3. **Code examples should be complete** - Students should be able to run them
4. **Explain the 'why'** - Not just the 'how'
5. **End with a summary** - Recap key points
6. **Link to next steps** - Where should they go next?

## 🎨 Formatting Examples

### Callout Boxes

```markdown
> **Note:** This is an important note

> **Warning:** Be careful with this!

> **Tip:** Here's a helpful tip
```

### Code with Highlights

````markdown
```javascript
// Basic function
function greet(name) {
  return `Hello, ${name}!`;
}

// Call the function
console.log(greet("World"));  // Hello, World!
```
````

### Details/Summary (Expandable Sections)

```markdown
<details>
<summary>Click to expand</summary>

Hidden content goes here. This is great for:
- Hints
- Solutions
- Advanced topics
- Additional resources

</details>
```

---

## 🙏 Thank You!

Thank you for contributing to DevSteps and helping others learn! Every lesson you create helps someone start their coding journey.

**Happy teaching!** 📚✨
