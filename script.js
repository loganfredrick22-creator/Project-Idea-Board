const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  unpin(projectIdea) {
    this.ideas = this.ideas.filter((item) => item !== projectIdea);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let outputString = this.title + " has " + this.count() + " idea(s)\n";
    for (const idea of this.ideas) {
      outputString += idea.title + " (" + idea.status.description + ") - " + idea.description + "\n";
    }
    return outputString;
  }
}
