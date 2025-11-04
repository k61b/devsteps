---
title: "Testing and Debugging"
description: "Finding and fixing bugs in your code"
type: "reading"
duration: "15 min"
day: 7
order: 4
nextLesson: "wrap-up-next-steps"
---

# Testing and Debugging

A polished project isn’t just feature-complete—it’s stable and reliable. Today you’ll stress-test your app, catch edge cases, and build a repeatable process for spotting bugs before users do.

## Step 1: Create a Test Checklist

- Load the app in a fresh browser session.
- Walk through each core feature identified in your plan.
- Include empty states, error states, and boundary inputs.

Document each step so you can reuse it when shipping updates.

## Step 2: Manual Testing Scenarios

1. **Create**: Add new entries with short and long titles.
2. **Toggle/Update**: Mark items complete, edit details, undo changes.
3. **Delete** (if supported): Remove items and confirm they disappear.
4. **Filters/Views**: Switch between filters, sort orders, or tabs.
5. **Persistence**: Reload the page to ensure state restores correctly.

Check both desktop and mobile breakpoints.

## Step 3: Console and Network Monitoring

- Open DevTools (`Cmd+Option+I` / `Ctrl+Shift+I`).
- Watch the **Console** for errors, warnings, or failed promises.
- Use the **Network** tab to ensure assets load quickly and requests resolve.

Resolve all console errors before you call the project done.

## Step 4: Debugging Techniques

- Add temporary `console.log` statements to inspect state and event flows.
- Use breakpoints in the **Sources** panel to step through code line by line.
- Leverage DOM inspectors to verify classes, attributes, and styles during interactions.

Remove temporary logs after fixing the issue to keep output clean.

## Step 5: Accessibility Checks

- Navigate the app using only the keyboard (Tab, Shift+Tab, Enter, Space).
- Ensure focus indicators are visible and logical.
- Run Lighthouse or Axe to catch color contrast and ARIA issues.

Accessibility bugs are real bugs—fix them before launch.

## Step 6: Performance Quick Wins

- Audit bundle size (Vite’s analyzer or DevTools Coverage).
- Defer heavy scripts and lazy-load non-critical images.
- Minimize layout shifts by defining image dimensions and using flex/grid wisely.

Even small optimizations can improve perceived polish.

## Step 7: Regression Safety Net

- After each fix, rerun the checklist to confirm nothing else broke.
- Mark off scenarios and note any flaky behavior for future improvement.
- Consider keeping a `TESTING.md` file to track known limitations or follow-up work.

## Step 8: Prepare a Bug Triage List

- If you discover issues you can’t fix immediately, log them clearly:
  - Steps to reproduce
  - Expected vs. actual behavior
  - Priority level and potential fixes

Transparency helps you iterate confidently.

## Step 9: Celebrate Completed QA

- Once the checklist passes, capture a short video or GIF of the final product.
- Share progress with peers or mentors for fresh eyes.
- Reflect on debugging techniques that saved time—you’ll reuse them in future projects.

## Key Takeaways

- ✅ Structured checklists prevent missed bugs.
- ✅ DevTools depth—console, breakpoints, network—is your debugging toolbox.
- ✅ Accessibility and performance are part of quality, not extras.
- ✅ Keep notes on known issues to guide future iterations.

---

## 🎯 Quick Check

1. Which test scenarios uncovered the most issues?
2. How did you verify the app works without a mouse?
3. What debugging step proved most effective?
4. Which follow-up items will you track for future releases?

Next lesson: wrap up the sprint and decide where to head next. 🏁
