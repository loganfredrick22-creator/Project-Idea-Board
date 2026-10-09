# Project Idea Board

A small, dependency-free JavaScript module for capturing project ideas, pinning them to a board, and tracking whether each one has been executed. It uses plain ES6 classes and has no external requirements, so it works in the browser and in Node.js.

## Features

- **Create ideas** with a title and description
- **Track status** with three predefined states: pending, success, and failure
- **Organize ideas on a board**: pin and unpin ideas, and count what's on the board
- **Readable summaries**: print the whole board as formatted text
- **Zero dependencies**: just vanilla JavaScript

## Getting Started

1. Clone the repository:
```bash
   git clone [your-repo-url]
   cd [your-project-folder]
```
2. Include the code in your project:
   - **Browser:** add the script with a `<script>` tag.
   - **Node.js:** copy the code into a module and export what you need, for example `module.exports = { projectStatus, ProjectIdea, ProjectIdeaBoard };`.

## Quick Start

```javascript
const board = new ProjectIdeaBoard("Side Projects");

const weatherApp = new ProjectIdea("Weather App", "Show a 5-day forecast by city");
const budgetTracker = new ProjectIdea("Budget Tracker", "Track monthly spending by category");

board.pin(weatherApp);
board.pin(budgetTracker);

weatherApp.updateProjectStatus(projectStatus.SUCCESS);

console.log(board.formatToString());
```

Output:

```
Side Projects has 2 idea(s)
Weather App (Executed Successfully) - Show a 5-day forecast by city
Budget Tracker (Pending Execution) - Track monthly spending by category
```

## API Reference

### `projectStatus`

A constant object defining the available statuses.

| Key | Description text |
| --- | --- |
| `PENDING` | Pending Execution |
| `SUCCESS` | Executed Successfully |
| `FAILURE` | Execution Failed |

### `class ProjectIdea`

Represents a single project idea.

| Member | Type | Description |
| --- | --- | --- |
| `constructor(title, description)` | | Creates an idea. Status defaults to `projectStatus.PENDING`. |
| `title` | `string` | The idea's title. |
| `description` | `string` | A short description of the idea. |
| `status` | `object` | The current status, one of the `projectStatus` values. |
| `updateProjectStatus(newStatus)` | method | Replaces the idea's status. Pass one of the `projectStatus` values. |

### `class ProjectIdeaBoard`

A collection of ideas under a shared title.

| Member | Returns | Description |
| --- | --- | --- |
| `constructor(title)` | | Creates an empty board. |
| `title` | `string` | The board's title. |
| `ideas` | `ProjectIdea[]` | The ideas currently pinned. |
| `pin(projectIdea)` | `void` | Adds an idea to the board. |
| `unpin(projectIdea)` | `void` | Removes an idea. Matches by object reference, so pass the same instance you pinned. |
| `count()` | `number` | Returns the number of pinned ideas. |
| `formatToString()` | `string` | Returns a multi-line summary of the board and each idea's status. |

## Usage Examples

### Updating a status

```javascript
const idea = new ProjectIdea("Habit Tracker", "Daily streak counter");
idea.updateProjectStatus(projectStatus.FAILURE);
console.log(idea.status.description); // "Execution Failed"
```

### Removing an idea

```javascript
board.unpin(budgetTracker);
console.log(board.count()); // 1
```

## Design Notes

- **Reference-based removal:** `unpin` uses strict equality (`!==`), so it removes the exact object you pass in, not an idea with the same title.
- **Immutable-style removal:** `unpin` reassigns `this.ideas` to a new filtered array rather than mutating it in place.
- **Status as data:** each status is an object with a `description`, which makes it easy to extend with extra fields such as a color or icon.

## Known Limitations

- `updateProjectStatus` does not check that the value is one of the `projectStatus` options.
- `pin` allows the same idea to be added more than once.
- Ideas have no unique ID, so lookups by title or ID are not supported.
- Data lives in memory only and is lost on reload.

## Roadmap

- [ ] Validate statuses in `updateProjectStatus`
- [ ] Prevent duplicate pins
- [ ] Add unique IDs for each idea
- [ ] Persist the board with `localStorage` or a database
- [ ] Add filtering by status
- [ ] Add unit tests

## Contributing

Contributions are welcome. Please open an issue to discuss major changes before submitting a pull request.

## License

[MIT](LICENSE) or [your chosen license]
